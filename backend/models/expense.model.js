const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const expenseSchema = new Schema({ 
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  detail: { type: String, required: true },
}, {
  timestamps: true,
  _id: false
});

expenseSchema.plugin(AutoIncrement);

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;