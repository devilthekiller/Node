const mongoose = require("mongoose")

// const connectionString = "mongodb+srv://jay:1234@cluster0.sm6v0ok.mongodb.net/ManagerApi?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = (url) => { return mongoose.connect(url) }
module.exports = connectDB 