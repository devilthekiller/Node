const { required } = require("joi")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
            , 'Enter a valid email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Pls Provide Password'],
        minlength: 6,
    }
})

UserSchema.pre("save", async function () {

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    // next()
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}
UserSchema.methods.comparePassword=async function(canditatePassword){
    const isMatch= await bcrypt.compare(canditatePassword,this.password)
    return isMatch
}

module.exports = mongoose.model("User", UserSchema)