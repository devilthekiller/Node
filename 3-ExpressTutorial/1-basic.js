const http = require("http")
const server = http.createServer((req, res) => {
    console.log("hi guys");
res.end("ihihihihih")
});
server.listen(5000);