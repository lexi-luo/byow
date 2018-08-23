const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  getRestaurantByType
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('byow').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('byow').where('id', id).first()
}

function getRestaurantByType(type, testConn) {
  const conn = testConn || connection
  return conn('byow')
  .where('byow.category', '=', 'Thai')

}