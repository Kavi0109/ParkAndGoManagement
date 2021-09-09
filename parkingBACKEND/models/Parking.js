const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkingSchema = new Schema({

    Option : {
        type : String,
        required: true
    },
    sno:{
        type: Number,
        required:true
    },
    ssize:{
        type: Number,
        required:true
    },
    cno:{
        type: String,
        required:true
    },
    rno:{
        type:String,
        required:true
    },
    dt:{
        type: String,
        required:true
    },
    des:{
        type: String,
        required:true
    }
})

const Parking = mongoose.model("Parking_Slot",parkingSchema);

module.exports = Parking;
