const http = require("http")
const express = require("express") // exported as a function

const app = express() // app here is a valid request handler

const server = http.createServer(app)

server.listen(3000)
