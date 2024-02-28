const express = require("express")
const app = express();

app.get("/", (req, res) => {
    console.log("res hit");
    res.send("hii guys!!!")
})
app.get("/about", (req, res) => {
    res.status(200).send("About!!!")
})
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404!!!</h1>")
})

app.listen(5000, () => {
    console.log("byy guyzzz!!!");
})
