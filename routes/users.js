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


// router.get('/restaurant/:id', (req, res) => {
//   let restaurantID = req.params.id
//   db('byow')
//   .where('byow.id', '=', restaurantID)
//   .then(data => {
//     restaurantProfile = data[0]
//     console.log(data[0])
//     res.render('view', data[0])
//   })
// })

// router.get('/category', (req, res) => {
//   db('byow')
//   .where('byow.category', '=', 'Thai')
//   .then(data => {
//       console.log(data)
//       res.render('view', {data: data})
//   })
// })

module.exports = router
