const http = require("http")
const { register } = require("module")

const server = http.createServer((req,res)=>{
    if (req.url=='/') {
        res.end("welcome to home page")
        return
    }
    if(req.url==="/about"){
        res.end("About page")
        return

    }
    res.end(`
    <h1>Opps!</h1>
    <p><a href="/">home</a></p>
    <p><a href="/about">about</a></p>
    `)


})

server.listen(4000)