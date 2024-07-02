const mongoose = require("mongoose")
const userDetail = new mongoose.Schema({
    name :{
        type : String,
    },
    email :{
        type : String,
    },
    password :{
        type : String,
    },
    phonenumber :{
        type : Number,
    },
})
const userModels = mongoose.model("user", userDetail)
module.exports =  userModels