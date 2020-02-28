const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  user: {
    type: String
  }
})

module.exports = mongoose.model('ProductModel', productSchema)