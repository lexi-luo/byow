const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantByType,
  getRestaurantByLocation,
  getRestaurantByPrice,
  getRestaurantByRestaurant
}

function getRestaurants (testConn) {
  const conn = testConn || connection
  return conn('byow')
}

function getRestaurant (id, testConn) {
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

function getRestaurantByPrice(price, testConn) {
  const conn = testConn || connection
  return conn('byow')
  .where('byow.price', '=', upperCase(price))
}


function getRestaurantByRestaurant(restaurant, testConn) {
  const conn = testConn || connection
  return conn('byow')
  .where('byow.restaurant', '=', upperCase(restaurant))
}

function upperCase(string) {
  return string.charAt(0).toUpperCase()+string.slice(1);
}
