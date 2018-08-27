router.get('/edit/:restaurant', (req, res) => {
    console.log(req.params.restaurant)
    db.getRestaurantByRestaurant(req.params.restaurant)
    .then(restaurant => {
     console.log(restaurant)
      res.render('edit', {data: restaurant})
    })
  })
  
  router.post('/edit/:restaurant', (req, res) => {
    console.log(req.params.restaurant)
    db.getRestaurantByRestaurant(req.params.restaurant)
    .then(restaurant => {
     console.log(restaurant)
      res.render('edit', {data: restaurant})
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