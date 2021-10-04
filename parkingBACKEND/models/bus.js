const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating Bus schema
const busSchema = new Schema({

    bus_Id : {
        type : String,
        unique : [true, 'ID is Unique'],
        required : [true, 'ID is required']
    },

    name : {
        type : String,
        required : [true, 'Name is required']
    },

    no_Plate : {
        type : String,
        required : [true, 'Plate is required']
    },

    owner_Name : {
        type : String,
        required : [true, 'Owner is required']
    },

    date_Rented : {
        type : Date,
        required : true
    },

    rental_Rem : {
        type: Date,
        required : true
    },
    
    phone_No : {
        type: String
    }
})

//Creating Bus model
const Bus = mongoose.model("Bus", busSchema);

// Exporting Bus model
module.exports = Bus;