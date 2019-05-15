const { User } = require('../model/User')
const roles = require('../config/roles')

const strictRoutes = {
  '/colleges': {
    GET: [roles.SUPER_ADMIN],
    POST: [roles.SUPER_ADMIN],
    UPDATE: [roles.SUPER_ADMIN],
    DELETE: [roles.SUPER_ADMIN]
  }
}

const authenticateUser = function (req, res, next) {
  const token = req.header('x-auth')

  User.findByToken(token)
    .then(function (user) {
      if (user) {
        req.user = user
        req.token = token
        return Promise.resolve()
      } else {
        return Promise.reject({ notice: 'token not available' })
      }
    })

    // Authorizing user
    .then(() => {
      const baseUrl = req.baseUrl
      const method = req.method
      if (strictRoutes[baseUrl]) {
        if (strictRoutes[baseUrl][method] && strictRoutes[baseUrl][method].includes(req.user.role)) {
          next()
        } else {
          res.status(401).send()
        }
      } else {
        next()
      }
    })

    .catch(function (err) {
      res.status('404').send(err)
    })
}

module.exports = {
  authenticateUser
}
