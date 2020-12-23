const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;