const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

const routes = require('./routes')

//mongoose
require('./config/mongoose')
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
