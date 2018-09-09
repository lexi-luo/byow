const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantByType,
  getRestaurantByLocation,
  getRestaurantByPrice,
  getRestaurantByRestaurant,
  getCategory,
  createRestaurant,
  getRandomRestaurant
}
// module.imports = {
//   randomRestaurant
// }

function getRestaurants(testConn) {
  const conn = testConn || connection
  return conn('byow')
}

function getRestaurant(id, testConn) {
  const conn = testConn || connection
  return conn('byow').first()
    .where('id', id)
}

// function getRestaurantByThai(type, testConn) {
//   const conn = testConn || connection
//   return conn('byow')
//   .where('byow.category', '=', 'Thai')
// }

function getRestaurantByLocation(location, testConn) {
  const conn = testConn || connection
  return conn('byow')
    .where('byow.location', '=', upperCase(location))
}

function getRestaurantByType(category, testConn) {
  const conn = testConn || connection
  return conn('byow')
    .where('byow.category', '=', upperCase(category))
}

function getCategory(testConn) {
  const conn = testConn || connection
  return conn('byow').distinct().pluck('category')
}

function getRestaurantByPrice(price, testConn) {
  const conn = testConn || connection
  console.log('and here?')
  return conn('byow')
    .where('byow.price', '=', price)
}

function createRestaurant(data, testConn) {
  const conn = testConn || connection
  data.restaurant = upperCase(data.restaurant)
  console.log(data)
  return conn('byow').insert(data)
}

function getRestaurantByRestaurant(restaurant, testConn) {
  const conn = testConn || connection
  return conn('byow')
    .where('byow.restaurant', '=', upperCase(restaurant))
}

function upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomRestaurant(testConn) {
  const conn = testConn || connection
  console.log("ra di ra")
  let id = Math.round(Math.random() * 40);
  return conn('byow').first()
    .where('id', id)
}