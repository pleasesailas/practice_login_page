const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

const routes = require('./routes')
//mongoose
const mongoose = require('mongoose')
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
})

//view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body-parser
app.use(express.urlencoded({ extended: true }))
//routes
app.use(routes)

//listening
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})
