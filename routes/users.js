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

router.get('/map', (req, res) => {
 
      res.render('/map.html')
})

router.get('/', (req, res) => {
  db.getRestaurants()
    .then(byow => {
      console.log(byow)
      res.render('home', { byow: byow })
    })
})

router.get('/all', (req, res) => {
  db.getRestaurants()
    .then(byow => {
      console.log(byow)
      res.render('index', { byow: byow })
    })
})

router.post('/random', (req, res) => {
  // db.getRestaurant()
  db.getRandomRestaurant()
    .then(id => {
      console.log(id)
      res.redirect('/' + id.id)
    })
})

router.get('/category', (req, res) => {
  db.getCategory(req.params.category)
    .then(category => {
      console.log({ category: category })
      res.render('dropdowns', { category: category })
    })
})

router.post('/category', (req, res) => {
  console.log('rawr')
  db.getCategory(req.params.category)
  res.redirect('/category/' + req.body.category)
})

router.get('/category/:category', (req, res) => {
  //console.log(req.params.category)
  db.getRestaurantByType(req.params.category)
    .then(category => {
      console.log(category)
      res.render('view', { data: category })
    })
})

router.get('/dollars', (req, res) => {
  res.render('checkbox')
})

router.post('/dollars', (req, res) => {
  console.log('key', Object.values(req.body))
  let price = Object.values(req.body)
  db.getRestaurantByPrice(Object.values(req.body)[0])
  res.redirect('/price/' + price)
})

router.get('/price/:price', (req, res) => {
  db.getRestaurantByPrice(req.params.price)
    .then(price => {
      console.log('ra di ra')
      res.render('view', { data: price })
    })
})

router.get('/restaurant/:restaurant', (req, res) => {
  //console.log(req.params.restaurant)
  db.getRestaurantByRestaurant(req.params.restaurant)
    .then(restaurant => {
      console.log('ars', restaurant[0])
      res.render('template', restaurant[0])
    })
})


router.get('/review', (req, res) => {
  res.render('review')
})

router.get('/create', (req, res) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  console.log(req.body)

  db.createRestaurant(req.body)
    .then(id => {
      res.redirect('/restaurant/' + req.body.restaurant)
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


router.get('/location/:location', (req, res) => {
  console.log(req.params.location)
  db.getRestaurantByLocation(req.params.location)
    .then(location => {
      console.log(location)
      res.render('view', { data: location })
    })
})






//router.get('/thumbnails', (req, res) => {
//   db.getRestaurants()
//     .then(byow => {
//       console.log(byow)
//       res.render('thumbnails', { byow: byow })
//     })
// })
module.exports = router
