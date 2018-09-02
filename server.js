const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')
//const bodyParser = require('body-parser'),


var server = express()

// Middleware

// Middleware
server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
  }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))
  server.use(express.urlencoded({ extended: false }))


// Routes

server.use('/', userRoutes)

module.exports = server
