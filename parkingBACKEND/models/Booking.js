const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    BookingID:{
        type:String,
        required:true
    },

    Firstname:{
        type:String,
        required:true
    },

    Lastname:{
        type:String,
        required:true
    },

    Contactnumber:{
        type:Number,
        required:true
    },

    Address:{
        type:String,
        required:true
    },

    PlateNumber:{
        type:String,
        required:true
    },

    VehicleModel:{
        type:String,
        required:true
    },

    EntryDate:{
        type:String,
        required:true
    },

    ExitDate:{
        type:String,
        require:true
    },

    BusNo:{
        type:Number,
        require:true
    },

    BusRoute:{
        type:String,
        require:true
    },

    CardNo:{
        type:Number,
        require:true
    },

    CardHolderName:{
        type:String,
        require:true
    },

    ExpireDate:{
        type:String,
        require:true
    },

    SecurityCode:{
        type:Number,
        require:true
    }


})

const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;