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
logs.get('/new', (req, res) => {
  res.render('logs/new.ejs', {currentUser: req.session.currentUser})
})
// SHOW
logs.get('/:id', (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render('logs/show.ejs', {log: foundLog, currentUser: req.session.currentUser})
  })
})
// EDIT
logs.get('/:id/edit', (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render('logs/edit.ejs', {
      log: foundLog, currentUser: req.session.currentUser
    })
  })
})
//// FUNCTIONAL ROUTES

// CREATE
logs.post('/', (req, res) => {
  if (req.body.isHappy === 'on') {
      req.body.isHappy = true
    } else {
      req.body.isHappy = false
    }
  if (req.body.isSad === 'on') {
      req.body.isSad = true
    } else {
      req.body.isSad = false
    }
  if (req.body.isMad === 'on') {
      req.body.isMad = true
    } else {
      req.body.isMad = false
    }
  if (req.body.isFunny === 'on') {
      req.body.isFunny = true
    } else {
      req.body.isFunny = false
    }
  if (req.body.isLove === 'on') {
      req.body.isLove = true
    } else {
      req.body.isLove = false
    }
  if (req.body.isSuprise === 'on') {
      req.body.isSuprise = true
    } else {
      req.body.isSuprise = false
    }
    Log.create(req.body, (error, createdLog) => {
      res.redirect('/logs')
    })
})
// UPDATE
logs.put('/', (req, res) => {
  if (req.body.isHappy === 'on') {
      req.body.isHappy = true
    } else {
      req.body.isHappy = false
    }
  if (req.body.isSad === 'on') {
      req.body.isSad = true
    } else {
      req.body.isSad = false
    }
  if (req.body.isMad === 'on') {
      req.body.isMad = true
    } else {
      req.body.isMad = false
    }
  if (req.body.isFunny === 'on') {
      req.body.isFunny = true
    } else {
      req.body.isFunny = false
    }
  if (req.body.isLove === 'on') {
      req.body.isLove = true
    } else {
      req.body.isLove = false
    }
  if (req.body.isSuprise === 'on') {
      req.body.isSuprise = true
    } else {
      req.body.isSuprise = false
    }
    Log.create(req.body, (error, createdLog) => {
      res.redirect('/logs')
    })
})
// DELETE
logs.delete('/:id', isAuthenticated, (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    res.redirect('/logs')
  })
})


module.exports = logs
