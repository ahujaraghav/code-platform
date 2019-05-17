const express = require('express')
const router = express.Router()
const { College } = require('../model/College')
const { User } = require('../model/User')
const roles = require('../config/roles')

const shorthash = require('shorthash')
const _ = require('lodash')

const userWhiteList = 'firstName lastName email role'

function addUsersToCollege (college, college_admin, departments) {
  // Add fields is used to add default password, role and college id
  function addFields (user, role) {
    user.role = role
    user.password = shorthash.unique('secret' + user.email)
    user.college = college._id
  }

  let admin
  if (college_admin) {
    admin = new User(college_admin)
    addFields(admin, roles.COLLEGE_ADMIN)
  }

  const branch_admins = []
  const branch_moderators = []

  departments.forEach(branch => {
    const tempBranch = { name: branch.name, admins: [], moderators: [] }

    branch.admins.forEach(user => {
      user = { ...user }
      addFields(user, roles.COLLEGE_DEPARTMENT_ADMIN)
      const branch_admin = new User(user)
      branch_admins.push(branch_admin)
      tempBranch.admins.push(branch_admin._id)
    })

    branch.moderators.forEach(user => {
      user = { ...user }
      addFields(user, roles.COLLEGE_DEPARTMENT_MODERATOR)
      const branch_moderator = new User(user)
      branch_moderators.push(branch_moderator)
      tempBranch.moderators.push(branch_moderator._id)
    })
    college.departments.push(tempBranch)
  })

  return User.insertMany([admin, ...branch_admins, ...branch_moderators]).then(
    () => {
      return college.save().then(() => {
        return Promise.resolve()
      })
    }
  )
}

router.post('/add', (req, res) => {
  const user = req.user
  const body = _.pick(req.body, ['name', 'address'])

  const college = new College(body)
  college.createdBy = user._id
  college.isActive = true
  college
    .save()
    .then(college => {
      res.send(college._id)
    })
    .catch(() => {
      res.sendStatus(500)
    })

  // addUsersToCollege(college, req.body.admin, req.body.departments)
  //   .then(() => {
  //     res.sendStatus(200)
  //   })
  //   .catch(err => {
  //     res.status(422).send(err)
  //   })
})

// Get College Information
router.get('/:id', (req, res) => {
  College.findById(req.params.id)
    .populate({
      path: 'admin',
      model: 'User',
      select: userWhiteList
    })
    .populate({
      path: 'department_admins.department',
      model: 'Department'
    })
    .populate({
      path: 'department_admins.user',
      select: userWhiteList
    })
    .populate({
      path: 'department_moderators.department',
      model: 'Department'
    })
    .populate({
      path: 'department_moderators.user',
      select: userWhiteList
    })
    .select(
      'name address admin department_admins department_moderators isActive'
    )
    .then(college => {
      if (college) {
        res.send(college)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(() => {
      res.sendStatus(404)
    })
})

router.get('/', (req, res) => {
  College.find()
    .populate({
      path: 'admin',
      model: 'User',
      select: userWhiteList
    })
    .populate({
      path: 'department_admins.department',
      model: 'Department'
    })
    .populate({
      path: 'department_admins.user',
      select: userWhiteList
    })
    .populate({
      path: 'department_moderators.department',
      model: 'Department'
    })
    .populate({
      path: 'department_moderators.user',
      select: userWhiteList
    })
    .select(
      'name address admin department_admins department_moderators isActive'
    )
    .then(colleges => {
      if (colleges.length > 0) {
        res.send(colleges)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(() => {
      res.sendStatus(404)
    })
})

// College name and address update
router.put('/:id/update', (req, res) => {
  const user = req.user
  const id = req.params.id
  const body = _.pick(req.body, ['name', 'address'])
  College.findByIdAndUpdate(id, { $set: body }, { runValidators: true })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

// College admin, department admin and moderators add
router.post('/:id/users/add', (req, res) => {
  const body = _.pick(req.body, [
    'firstName',
    'lastName',
    'email',
    'role',
    'department'
  ])

  body.accountActive = true

  if (!(body.firstName || body.lastName || body.email || body.role)) {
    res.sendStatus(422)
  } else if (!Object.values(roles).includes(body.role)) {
    res.status(422).send({ notice: 'provide a valid role' })
  } else if (body.role !== roles.COLLEGE_ADMIN && !body.department) {
    res.status(422).send({ notice: 'provide department details' })
  } else {
    College.findById(req.params.id)
      .then(college => {
        if (college) {
          body.college = college._id
          body.password = shorthash.unique('secret' + body.email)
          const user = new User(body)

          user.save().then(() => {
            if (user.role === roles.COLLEGE_ADMIN && college.admin) {
              res.status(422).send({ notice: 'college can have only 1 admin' })
            } else {
              if (user.role === roles.COLLEGE_ADMIN) {
                college.admin = user._id
              } else if (user.role === roles.COLLEGE_DEPARTMENT_ADMIN) {
                const department = body.department
                college.department_admins.push({ department, user: user._id })
              } else if (user.role === roles.COLLEGE_DEPARTMENT_MODERATOR) {
                const department = body.department
                college.department_moderators.push({
                  department,
                  user: user._id
                })
              }
              college.save().then(() => {
                res.send(user)
              })
            }
          })
        } else {
          res.status(404).send({ notice: 'college not found' })
        }
      })
      .catch(err => {
        res.sendStatus(404)
      })
  }
})

// College admin, department admin and moderators delete
router.delete('/:id/users/:userId/delete', (req, res) => {
  const collegeId = req.params.id
  const userId = req.params.userId

  Promise.all([User.findById(userId), College.findById(collegeId)])
    .then(values => {
      const college = values[1]
      const user = values[0]

      user.accountActive = false

      if (String(college.admin) === userId) {
        college.admin = undefined
      }
      college.department_admins = college.department_admins.filter(
        department => {
          return String(department.user) !== userId
        }
      )
      college.department_moderators = college.department_moderators.filter(
        department => {
          return String(department.user) !== userId
        }
      )
      Promise.all([user.save(), college.save()])
        .then(() => {
          res.sendStatus(200)
        })
        .catch(() => {
          res.sendStatus(500)
        })
    })
    .catch(() => {
      res.sendStatus(404)
    })

  // College.findById(collegeId).then(college => {
  //   if (college) {
  //     let roleFound = false
  //     if (role === roles.COLLEGE_ADMIN && college.admin === user) {
  //       college.admin = undefined
  //       roleFound = true
  //     } else if (role === roles.COLLEGE_DEPARTMENT_ADMIN) {
  //       college.department_admins = college.department_admins.filter((admin)=>{return })
  //       roleFound = true
  //     } else if (role === roles.COLLEGE_DEPARTMENT_MODERATOR) {
  //       college.departments = college.departments.map(department => {
  //         department.moderators = department.moderators.filter(moderator => {
  //           return String(moderator._id) !== user
  //         })
  //         return department
  //       })
  //       roleFound = true
  //     }
  //     if (roleFound) {
  //       college.save().then(() => {
  //         res.sendStatus(200)
  //       })
  //     } else {
  //       res.sendStatus(422)
  //     }
  //   } else {
  //     res.sendStatus(404)
  //   }
  // })
})

module.exports = {
  collegeRouter: router
}
