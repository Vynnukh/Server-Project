const express = require("express")
const server = express()

server.use("/static", express.static("public"))
// ^ This will add the public folder to the web server, and enable it to be accessible through /static

server.listen(5000, () => {
    console.log("Listening on port 5000")
})