const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

//view engine
app.engine('handlebars', exphbs({ defaultLayout:'main'}))
app.set('view engine', 'handlebars')
//routes
app.get('/', (req, res) => {
  res.render('index')
})
//listening
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})
