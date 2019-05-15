const express = require('express')
const router = express.Router()
const { College } = require('../model/College')
const { User } = require('../model/User')
const roles = require('../config/roles')

const shorthash = require('shorthash')
const _ = require('lodash')

function addUsersToCollege (college, college_admin, departments) {
  const admin = new User(college_admin)
  admin.role = roles.COLLEGE_ADMIN
  admin.password = shorthash.unique('secret' + admin.email)
  admin.college = college._id

  college.admin = admin._id

  const branch_admins = []
  const branch_moderators = []

  departments.forEach(branch => {
    const tempBranch = { name: branch.name, admins: [], moderators: [] }

    branch.admins.forEach(tempUser => {
      tempUser.role = roles.COLLEGE_BRANCH_ADMIN
      tempUser.password = shorthash.unique('secret' + tempUser.email)
      tempUser.college = college._id
      const branch_admin = new User(tempUser)
      branch_admins.push(branch_admin)

      tempBranch.admins.push(branch_admin._id)
    })

    branch.moderators.forEach(tempUser => {
      tempUser.role = roles.COLLEGE_BRANCH_MODERATOR
      tempUser.password = shorthash.unique('secret' + tempUser.email)
      tempUser.college = college._id
      const branch_moderator = new User(tempUser)
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
        .catch(err => {
          res.status(422).send(err)
        })
    })
})

module.exports = {
  collegeRouter: router
}
