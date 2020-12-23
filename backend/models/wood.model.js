const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const woodSchema = new Schema({
  name: { type: String, required: true },
  price_per_kg: { type: Number, required: true },
}, {
  timestamps: true,
});

const Wood = mongoose.model('Wood', woodSchema);

module.exports = Wood;