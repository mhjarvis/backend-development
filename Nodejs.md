# Node.js Basics

## Input/Output

### Reading and Writing Synchronously

```js
// REQUIRE FILE SYSTEM MODULE
const fs = require("fs")

// EXAMPLE OF READING A FILE IN; SYNCHRONOUS WAY
const textIn = fs.readFileSync("../pathToFile", "utf-8")

// EXAMPLE OF WRITING TEXT OUT
const textOut = `This is text out to file: ${textIn}.\n Creted on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)
```

### Reading and Writing Asynchronously

```js
// NON-BLOCKING ASYNCHRONOUS APPROACH
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
	if (err) return console.log("Error")
	console.log(data)
})
// THIS LINE OF CODE WILL PRINT FIRST
console.log("File Reading")

// ASYNCHRONOUS WAY OF WRITING A FILE
fs.writeFile("./txt/final.txt", `${data2}`, "utf-8", (err) => {
	console.log("files have been written")
})
```

### Blocking and Non-Blocking: Asynchronous Nature of Node

- Synchronous code is blocking code because it causes the system to wait until it is finished.
- Asynchronous code is non-blocking code because other processes can finish while it completes stuff in the background.

## Creating a Simple Web Server

```js
const http = require("http")

const server = http.createServer((req, res) => {
	res.end("Hello from server.")
})

server.listen(8000, "127.0.0.1", () => {
	console.log("Listenting to req on port 8000")
})
```

## Routing

```js
const url = require("url")

const server = http.createServer((req, res) => {
	// SEND BASIC, PT RESPONSE WHEN A CERTAIN REQUEST COMES IN
	const pathName = req.url

	// ROUTING STARTS
	if (pathName === "/" || pathName === "/overview") {
		res.end("This is the Overview page")
	} else if (pathName === "/product") {
		res.end("This is the product page!!")
	} else {
		res.writeHead(404, {
			// Header - need to be set before response
			"Content-type": "text/html",
		})
		res.end("<h1>Page not found!</h1>")
	}
})

// GET SERVER TO LISTEN ON PORT 8000
server.listen(8000, "127.0.0.1", () => {
	console.log("Listening to request on port 8000")
})
```

## Building a Web API

```js
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
	// SEND BASIC, PT RESPONSE WHEN A CERTAIN REQUEST COMES IN
	const pathName = req.url

	if (pathName === "/" || pathName === "/overview") {
		res.end("This is the Overview page")
	} else if (pathName === "/product") {
		res.end("This is the product page!!")
	} else if (pathName === "/api") {
		res.writeHead(200, { "Content-type": "application/json" })
		// SEND DATA BACK TO USER
		res.end(data)
	} else {
		res.writeHead(404, {
			// Header - need to be set before response
			"Content-type": "text/html",
		})
		res.end("<h1>Page not found!</h1>")
	}
})

// GET SERVER TO LISTEN ON PORT 8000
server.listen(8000, "127.0.0.1", () => {
	console.log("Listening to request on port 8000")
})
```
