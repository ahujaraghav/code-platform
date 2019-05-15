const express = require('express')
const router = express.Router()
const { College } = require('../model/College')
const { User } = require('../model/User')
const roles = require('../config/roles')

const shorthash = require('shorthash')
const _ = require('lodash')

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
      addFields(user, roles.COLLEGE_BRANCH_ADMIN)
      const branch_admin = new User(user)
      branch_admins.push(branch_admin)
      tempBranch.admins.push(branch_admin._id)
    })

    branch.moderators.forEach(user => {
      user = { ...user }
      addFields(user, roles.COLLEGE_BRANCH_MODERATOR)
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

  addUsersToCollege(college, req.body.admin, req.body.departments)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(422).send(err)
    })
})

// College name and address update
router.put('/update/:id', (req, res) => {
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

// College admin, department admin and moderators delete
router.delete('/delete/:collegeId/:role/:id', (req, res) => {
  const collegeId = req.params.collegeId
  const role = req.params.role
  const user = req.params.id
  console.log(user)

  College.findById(collegeId).then(college => {
    if (college) {
      let roleFound = false
      if (role === roles.COLLEGE_ADMIN && college.admin === user) {
        college.admin = undefined
        roleFound = true
      } else if (role === roles.COLLEGE_BRANCH_ADMIN) {
        college.departments = college.departments.map(department => {
          department.admins = department.admins.filter(admin => {
            return String(admin._id) !== user
          })
          console.log(department)
          return department
        })
        roleFound = true
      } else if (role === roles.COLLEGE_BRANCH_MODERATOR) {
        college.departments = college.departments.map(department => {
          department.moderators = department.moderators.filter(moderator => {
            return String(moderator._id) !== user
          })
          return department
        })
        roleFound = true
      } 
      if(roleFound){
        college.save()
        .then(()=>{
          res.sendStatus(200)
        })
      } else{
        res.sendStatus(422)
      }
    } else {
      res.sendStatus(404)
    }
  })
})

// College admin, department admin and moderators add
router.post('/add/:collegeId/:role', (req, res) => {})

module.exports = {
  collegeRouter: router
}
