const db = require('../../config/mongoose')
const USERS = require('../users')
//載入json
const userList = require('./userList.json')

db.once('open', () => {
  USERS.create(userList)
    .then(() => {
      console.log('loading userList done!')
    })
})
