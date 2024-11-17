const http = require("http")
const express = require("express") // exported as a function

const app = express() // app here is a valid request handler

app.use("/", (req, res, next) => {
	console.log("this always runs")
	next()
})
// this should only trigger when requests go to nothing
app.use("/add-product", (req, res, next) => {
	res.send("<h1>Add Product</h1>") // send a response
})

app.use("/", (req, res, next) => {
	res.send("<h1>Hello from the Index!</h1>") // send a response
})

// instead of using this:
/* 
const server = http.createServer(app) 
server.listen(3000)
*/
// we can just use:

app.listen(3000)
