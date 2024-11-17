const http = require("http")
const express = require("express")

const app = express()

app.use("/about", (req, res, next) => {
	console.log("in the about section")
	next()
})

app.use("/test", (req, res, next) => {
	console.log("in the test section")
	next()
})

app.use("/home", (req, res, next) => {
	res.send("<h1>You are getting a actual response in this one</h1>")
})

app.use("/users", (req, res, next) => {
	res.send("<h1>Users only/h1>")
})

app.use("/", (req, res, next) => {
	res.send("<h1>This is the default response.</h1>")
})

app.listen(3000)
