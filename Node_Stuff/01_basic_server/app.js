const http = require("http")

function rqListener(req, res) {
	// process.exit()
	const url = req.url

	if (url === "/") {
		res.setHeader("Content-Type", "text/html")
		res.write(
			'<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>'
		)
		return res.end()
	}
	res.setHeader("Content-Type", "text/html")
	res.write("<html><h1>Hello World</h1></html>")
	res.end()
}

const server = http.createServer(rqListener)

server.listen(3000) // listens for each incoming request
