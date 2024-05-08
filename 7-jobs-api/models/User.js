const { required } = require("joi")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pls Provide Name'],
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: [true, 'Pls Provide Email'],
        minlength: 3,
        maxlength: 30,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            , 'Enter a valid email']
        , unique: true,
    },
    password: {
        type: String,
        required: [true, 'Pls Provide Password'],
        minlength: 6,
    }
})

module.exports = mongoose.model("User", UserSchema)
