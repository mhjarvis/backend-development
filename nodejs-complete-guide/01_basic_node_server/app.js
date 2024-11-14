// require() - default way to import in node
const http = require("http")
const fs = require("fs") // allows access to file system

const server = http.createServer((req, res) => {
	//console.log(req.url, req.method, req.headers)
	//process.exit()		this will exit the process and close connection

	const url = req.url
	const method = req.method

	if (url === "/") {
		res.write("<html>")
		res.write("<head><title>Enter Info</title></head>")
		res.write(
			"<body><form action='/message' method='POST'><input type='text' name='messsage'><button type='submit'>Send</button></form></body>"
		)
		res.write("</html>")
		return res.end()
	}

	if (url === "/message" && method === "POST") {
		const body = []
		req.on("data", (chunk) => {
			console.log(chunk)
			body.push(chunk)
		})
		req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split("=")[1]
			fs.writeFileSync("message.txt", message)
		})
		res.statusCode = 302
		res.setHeader("Location", "/")
		return res.end()
	}

	res.setHeader("Content-Type", "text/html")
	res.write("<html>")
	res.write("<head><title>My first page</title></head>")
	res.write("<body><h1>Hello there from the Node.js server</h1></body>")
	res.write("</html>")
	res.end()
})

// this will start the server to continually listen for incoming requests
server.listen(3000)

/* 
function rqListener(req, res) {}

// this will create a server that will run the called function for every request that it gets
http.createServer(rqListener) 
*/

/* 
http.createServer(function (req, res) {})
 */
