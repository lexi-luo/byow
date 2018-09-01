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
  openNav,
  closeNav
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

function getCategory(testConn) {
  const conn = testConn || connection
  return conn('byow').distinct().pluck('category')
}

function getRestaurantByPrice(price, testConn) {
  const conn = testConn || connection
  return conn('byow')
  .where('byow.price', '=', upperCase(price))
}

// function createRestaurant(restaurant, category, location, price, phone, corkage, testConn) {
// const conn = testConn || connection
// return conn ('byow').insert({
//    restaurant = restaurant,
//    category = category,
//    location = location,
//    price = price,
//    phone = phone,
//    corkage = corkage
// })
// .push(data => {

// })

// }


function getRestaurantByRestaurant(restaurant, testConn) {
  const conn = testConn || connection
  return conn('byow')
  .where('byow.restaurant', '=', upperCase(restaurant))
}

function upperCase(string) {
  return string.charAt(0).toUpperCase()+string.slice(1);
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById(sidenav).style.width = "250px";
  document.getElementById(main).style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  console.log('yuiuei')
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}