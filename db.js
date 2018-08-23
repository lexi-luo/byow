const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('byow').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('byow').where('id', id).first()
}
