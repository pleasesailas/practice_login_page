const express = require('express')
const router = express.Router()
const USERS = require('../models/users')


router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {
  const { email } = req.body
  USERS.findOne({ email })
    .lean()
    .then((data) => {
      if (!data) {
        return res.render('error')
      } else {
        res.render('success', { user: data.firstName })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router