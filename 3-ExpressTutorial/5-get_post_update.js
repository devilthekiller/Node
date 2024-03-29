const express = require("express")
const app = express()
let { people } = require("./data")

// static assets
express.static("./methods-public")

app.use(express.urlencoded({ extended: false }))




app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post("/login", (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send("pls provide control")
})

app.listen(5000, () => {
    console.log("assfd");
})
