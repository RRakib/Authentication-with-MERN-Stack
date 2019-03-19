const mongoose = require("mongoose");

// Defining Schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

// Creating Collection
const userModel = mongoose.model("users" , userSchema)

module.exports = userModel