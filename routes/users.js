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
  db.getRestaurants()
  .then(byow => {
    console.log(byow)
    res.render('index', {byow: byow})
  })         
})

router.get('/:id', (req, res) => {
  // db.getRestaurant()
  db.getRestaurant(req.params.id)
  .then(id => {
    console.log(id)
    res.render('template', id)
  })        
})


// router.get('/category/thai', (_req, res) => {
//   db.getRestaurantByThai()
//   .then(data => {
//     restaurantProfile = data
//     console.log(data)
//     res.render('view', {data: data})
//   })
// })

router.get('/category/:category', (req, res) => {
  //console.log(req.params.category)
  db.getRestaurantByType(req.params.category)
  .then(category => {
    console.log(category)
    res.render('view', {data: category})
  })
})


router.get('/location/:location', (req, res) => {
  console.log(req.params.location)
  db.getRestaurantByLocation(req.params.location)
  .then(location => {
   console.log(location)
    res.render('view', {data: location})
  })
})

router.get('/price/:price', (req, res) => {
  console.log(req.params.price)
  db.getRestaurantByPrice(req.params.price)
  .then(price => {
   console.log(price)
    res.render('view', {data: price})
  })
})


module.exports = router
