const express = require('express')
const router = express.Router()
const { Department } = require('../model/Department')

router.post('/add', (req, res, next) => {
  let department = req.body.department
  if (department) {
    department = new Department({name:department})
    department
      .save()
      .then(department => {
        res.send(department)
      })
      .catch(() => {
        res.sendStatus(500)
      })
  } else {
    res.status(422).send({ notice: 'provide a department' })
  }
})

router.get('/', (req, res, next) => {
  Department.find()
    .then(departments => {
      res.send(departments)
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = {
    departmentRouter: router
}
