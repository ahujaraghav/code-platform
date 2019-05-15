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

module.exports = {
  collegeRouter: router
}
