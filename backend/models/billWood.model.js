const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billWoodSchema = new Schema({
  bill_number: { type: Number, required: true },
  date: { type: Date, required: true },
  wood_name: { type: String, required: true }, //fk 
  seller_name: { type: String, required: true }, //fk
  car_type: { type: String, required: true },
  license_plate: { type: String, required: true },
  sitting: { type: Number, required: true },
  weight_in: { type: Number, required: true },
  weight_out: { type: Number, required: true },
  weight_net: { type: Number, required: true },
  price_per_kg: { type: Number, required: true },
  net_price: { type: Number, required: true },
  payment_status: { type: String, required: true },
  note: { type: String, required: true },
}, {
  timestamps: true,
});

const BillWood = mongoose.model('BillWood', billWoodSchema);

module.exports = BillWood;