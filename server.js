const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/routes')
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/db/users')
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

server.use(express.json())
server.use(express.urlencoded({ extended: false }))


// Routes

server.use('/auth', authRoutes)
// server.use('/api/v1/', apiRoutes)
server.use('/', userRoutes)

// // wildcard route
// server.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// })

module.exports = server
