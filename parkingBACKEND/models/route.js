const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating Route schema
const routeSchema = new Schema({

    route_Id : {
        type : String,
        unique : [true, 'ID is Unique'],
        required : [true, 'ID is required']
    },

    from : {
        type : String,
        required : [true, 'From is required']
    },

    to : {
        type : String,
        required : [true, 'To is required']
    },

    dep_time : {
        type : String,
        required : [true, 'Departure Time is required']
    },

    bus_Id : {
        type : String,
        required : [true, 'Bus ID is required']
    },

    driver_Id : {
        type : String,
        required : [true, 'Driver ID is required']
    },

    conductor_Id : {
        type : String,
        required : [true, 'Driver ID is required']
    },
})

//Creating Route model
const Route = mongoose.model("Route", routeSchema);

// Exporting Bus model
module.exports = Route;