const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

require("dotenv").config()

const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware")

connectDB = require("./db/connect")

//middleware
app.use(express.static("./public"))
app.use(express.json())



app.get("/", (req, res) => {
    res.send("<h1>hi <br> go to hell😡😡😡😡 </h1>");
});



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log("port 3000...");
        })
    } catch (err) {
        console.log(err);
    }
}

app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
start()
