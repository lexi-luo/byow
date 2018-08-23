const express = require('express')

const db = require('../db')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/category', (req, res) => {
  db.getRestaurantByType()
  .then(data => {
    restaurantProfile = data
    console.log(data)
    res.render('view', {data: data})
  })
})


module.exports = router
