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
logs.put('/:id', (req, res) => {
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
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
      res.redirect('/logs')
    })
})

// DELETE
logs.delete('/:id', isAuthenticated, (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    res.redirect('/logs')
  })
})

// SEED ROUTE
logs.get('/setup/seed', (req, res) => {
  Log.create(
    [
      {
      title: 'The Chocolate Touch',
      readerName: 'Jade Smith',
      pagesRead: '45 - 52',
      characterName: 'John',
      isHappy: false,
      isSad: false,
      isMad: false,
      isFunny: false,
      isLove: false,
      isSuprise: true,
      questionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      questionTwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      questionThree: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      questionFour: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      picture: '',
      },
      {
      title: 'Return of the Mummy',
      readerName: 'Carson Rodgers',
      pagesRead: '7 - 17',
      characterName: 'Gabe',
      isHappy: true,
      isSad: false,
      isMad: false,
      isFunny: false,
      isLove: false,
      isSuprise: false,
      questionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      questionTwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      questionThree: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      questionFour: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      picture: '',
      },
      {
      title: 'Danger in Quicksand Swamp',
      readerName: 'Ben Sanders',
      pagesRead: '78 to 85',
      characterName: 'Ben',
      isHappy: false,
      isSad: true,
      isMad: false,
      isFunny: false,
      isLove: false,
      isSuprise: false,
      questionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      questionTwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      questionThree: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      questionFour: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      picture: '',
      },
      {
      title: 'Restart',
      readerName: 'Addison Simmons',
      pagesRead: '50 - 56',
      characterName: 'Chase',
      isHappy: false,
      isSad: true,
      isMad: false,
      isFunny: false,
      isLove: false,
      isSuprise: false,
      questionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      questionTwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      questionThree: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      questionFour: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      picture: '',
      },
      {
      title: 'Stuart Little',
      readerName: 'Eddy Bryant',
      pagesRead: '37 - 45',
      characterName: 'Stuart',
      isHappy: false,
      isSad: false,
      isMad: false,
      isFunny: false,
      isLove: false,
      isSuprise: true,
      questionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      questionTwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      questionThree: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      questionFour: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      picture: '',
      }
    ],
    (error, data) => {
      res.redirect('/logs')
    }
  )
})

module.exports = logs
