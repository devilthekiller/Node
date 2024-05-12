const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { required } = require("joi")

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,"Pls provide company name"],
        maxlength:50,
        minlength:3
    }
    ,
    position:{
        type:String,
        required:[true,"Pls provide position"],
        maxlength:100,
        minlength:3
    }
,
status:{
    type:String,
    enum:["interview","declined",'pending'],
    default:"pending",

},
createdBy:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:[true,"Please provide user"]
}
},{timestamps:true})


module.exports= mongoose.model("Job",JobSchema)