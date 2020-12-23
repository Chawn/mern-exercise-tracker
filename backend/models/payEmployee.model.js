const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const payEmployeeSchema = new Schema({ 
  bill_number: { type: Number, required: true },
  date: { type: Date, required: true },
  employee_name: { type: String, required: true }, //fk
  money: { type: Number, required: true },
  note: { type: String, required: true },
}, {
  timestamps: true,
});

const PayEmployee = mongoose.model('PayEmployee', payEmployeeSchema);

module.exports = PayEmployee;