const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    employeeNo : {
        type: String,
        required: true
    },

    fromDate : {
        type: String,
        required: true
    },
    noOfDays: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
})

const Leave = mongoose.model("Leave",leaveSchema);

module.exports = Leave;