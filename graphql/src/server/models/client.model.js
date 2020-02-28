const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true
  },
  active: Boolean,
})

module.exports = mongoose.model('ClientModel', clientSchema)