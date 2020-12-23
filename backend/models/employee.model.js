const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employee_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
}, {
  timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;