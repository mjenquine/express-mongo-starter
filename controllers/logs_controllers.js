const express = require('express')
const Log = require('../models/logs.js')
const logs = express.Router()

const isAuthenticated = (req, res, next) => {
  console.log(req.session.currentUser);
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}
//// PRESENTATION ROUTES

// INDEX
logs.get('/', (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render('logs/index.ejs', {
      logs: allLogs, currentUser: req.session.currentUser
    })
  })
})
// NEW

// SHOW

// EDIT

//// FUNCTIONAL ROUTES

// CREATE

// UPDATE

// DELETE



module.exports = logs
