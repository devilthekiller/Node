
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

connectDB = require("./db/connect")

//middleware
app.use(express.json())


app.get("/", (req, res) => {
    res.send("<h1>hi <br> go to hell😡😡😡😡 </h1>");
});


const start = async () => {
    try {
        await connectDB()
        app.listen(3000, () => {
            console.log("port 3000...");
        })
    } catch (err) {
        console.log(err);
    }
}

app.use("/api/v1/tasks", tasks)
start()
