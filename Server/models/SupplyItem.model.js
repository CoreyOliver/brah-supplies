const mongoose = require('mongoose')

const SupplySchema = new mongoose.Schema({
  SKU: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  active: {
    type: Boolean
  },
  unitCount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required:true
  },
  added: {
    type: Date,
  }

})

module.exports = mongoose.model('Supply', SupplySchema, 'Supplies')