const express = require('express')
const mongoose = require('mongoose')
const consola = require('consola')
const bodyParser = require('body-parser')
const keys = require('./keys')

const rssRouter = require('./routers/RSSParser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/RSS', rssRouter)

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error))

const port = process.env.PORT || 3000

app.listen(port, () => {
  consola.ready({
    message: `Server listening on localhost:${port}`,
    badge: true
  })
})
