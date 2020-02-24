const {Schema, model} = require('mongoose')

const XMLSchema = new Schema({
  xml: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

module.exports = model('XML', XMLSchema)
