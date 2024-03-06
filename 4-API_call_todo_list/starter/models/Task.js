// const mongoose = require("mongoose")


// const TaskSchema = new mongoose.Schema({
//     name: String, completed: Boolean
// })

// Task.js
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength :[20,"name cant be larger than 20 chars"]
    },
    completed: {
        type:Boolean,
        default:false,
        
    }
});

// const Task = ; // Create a model from the schema

module.exports = mongoose.model("Task", TaskSchema); // Export the model
