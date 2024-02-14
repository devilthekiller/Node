http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("home page")
    }
    else if (req.url === "/about") {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(j,i);
            }

        }
        res.end("about page")
    }
    else {
        res.end("Error 404")

    }
})


server.listen(5000, () => {
    console.log("server is listening on port 5000");

})
