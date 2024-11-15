const fs = require("fs") // allows access to file system

function requestHandler(req, res) {
	const url = req.url
	const method = req.method
	if (url === "/") {
		res.write("<html>")
		res.write("<head><title>Enter Info</title></head>")
		res.write(
			"<body><form action='/message' method='POST'><input type='text' name='messsage'><button type='submit it'>Send</button></form></body>"
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
		return req.on("end", () => {
			// this code will actually run after a response has already been sent
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split("=")[1]
			fs.writeFile("message.txt", message, (err) => {
				// return error response showing the error
				// this will execute after the writting of the file is done
				res.statusCode = 302
				res.setHeader("Location", "/")
				return res.end()
			})
		})
	}

	res.setHeader("Content-Type", "text/html")
	res.write("<html>")
	res.write("<head><title>My first page</title></head>")
	res.write("<body><h1>Hello there from the Node.js server</h1></body>")
	res.write("</html>")
	res.end()
}

module.exports = requestHandler

/* Can also use the following export syntax:

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

or

module.exports.handler = requestHandler
module.exports.someText = 'Some hard coded text'

*/
