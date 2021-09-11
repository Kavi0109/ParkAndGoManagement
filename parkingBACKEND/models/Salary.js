const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
    employeeNo : {
        type: String,
        required: true
    },

    salaryMonth : {
        type: String,
        required: true
    },
     workingDays: {
        type: Number,
        required: true
    },

    basicPay: {
        type: Number,
        required: true
    },

    allowance: {
        type: Number,
        required: true
    },

    deduction: {
        type: Number,
        required: true
    },

    monthTax: {
        type: Number,
        required: true
    },

    salaryNote : {
        type: String,
        required: true
    },

    totDeduction: {
        type: Number,
        required: true
    },

    netPay: {
        type: Number,
        required: true
    }



})

const Salary = mongoose.model("Salary",salarySchema);

module.exports = Salary;
