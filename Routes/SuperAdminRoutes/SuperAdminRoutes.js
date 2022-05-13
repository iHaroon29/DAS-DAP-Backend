const Express = require('express')
const {
  isAuthenticated,
} = require('../../Services/AuthenticationServices/Authentication')

const Router = Express.Router()
const Dashboard = require('./SuperAdminDashboard/Dashboard')

Router.use('/Dashboard', [isAuthenticated, Dashboard])

module.exports = Router
