const mongoose = require('mongoose')
const USERS = require('../users')
//載入json
const userList = require('./userList.json')

//mongoose
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
  USERS.create(userList)
    .then(() => {
      console.log('loading userList done!')
    })
})
