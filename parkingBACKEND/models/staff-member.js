const mongoose = require("mongoose")

const Schema = mongoose.Schema



// Creating Staff schema
const stmSchema = new Schema({

    stm_Id : {
        type : String,
        unique : [true, 'ID is unique'],
        required : true
    },

    name : {
        type : String,
        required : true
    },

    type : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    date_Reg : {
        type :  Date,
        required : true
    }

})


// Creating Stm model
const Stm = mongoose.model("Stm", stmSchema)



// Exporting 
module.exports = Stm;