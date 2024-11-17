const http = require("http")
const fs = require("fs")

const serveFile = (filePath, res, statusCode = 200) => {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(500, { "Content-Type": "text/plain" })
			res.end("Internal Server Error")
		} else {
			res.writeHead(statusCode, { "Content-Type": "text/html" })
			res.end(data)
		}
	})
}

const server = http.createServer((req, res) => {
	const url = req.url
	const mehtod = req.method

	if (url === "/") {
		serveFile("index.html", res)
	} else if (url === "/about") {
		serveFile("about.html", res)
	} else if (url === "/contact-me") {
		serveFile("contact-me.html", res)
	} else {
		serveFile("404.html", res)
	}
})

server.listen(8080)
