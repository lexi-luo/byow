const express = require('express')

const { userExists, createUser } = require('./db/users')

const router = express.Router()


router.post('/register', register)

function register(req, res) {
  console.log(req.body)
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.username, req.body.hash[0])
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}


//write functions for getUserByName, createToken, issue


module.exports = router