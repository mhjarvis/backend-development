# Express.js Notes

ExpressJS does a lot of the heavy lifting in terms of building out a server.

## Installing Express.js

```bash
    npm install --save express
```

## Adding Middleware

```js
const http = require("http")
const express = require("express") // exported as a function

const app = express() // app here is a valid request handler

app.use((req, res, next) => {
	console.log("in the middleware")
	next()
})

app.use((req, res, next) => {
	console.log("in the second middleware")
})

const server = http.createServer(app)

server.listen(3000)
```

## How Middleware Works

You travel from middleware to middleware calling the `next()` function, until you send a response:

```js
app.use((req, res, next) => {
	console.log("in the middleware")
	next() // go to the next middleware
})

app.use((req, res, next) => {
	console.log("in the second middleware")
	res.send("<h1>hello there</h1>") // send a response
})

app.listen(3000) // shorter version using express
```

## Handling Different Routes

```js
app.use("/", (req, res, next) => {
	console.log("this always runs")
	next()
})
// this should only trigger when requests go to nothing
app.use("/add-product", (req, res, next) => {
	console.log("in the second middleware")
	res.send("<h1>Add Product</h1>") // send a response
})

// this is the default path
app.use("/", (req, res, next) => {
	console.log("in the second middleware")
	res.send("<h1>Hello from the Index!</h1>") // send a response
})
```

## Parse Incoming Requests

Use `body-parser` for parsing incoming requests.

```js
npm install --save body-parser

// parse incoming request body; will call next(); will handle body parsing
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/add-product", (req, res, next) => {
	res.send(
		"<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
	) // send a response
})

// you can omit arguments if you don't use them (e.g. next or res)
app.use("/product", (req, res, next) => {
	console.log(req.body)
	res.redirect("/")
})
```

## Using Express Router

Folder structure:

- routes
