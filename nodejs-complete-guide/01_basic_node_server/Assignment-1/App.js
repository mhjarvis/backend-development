const http = require("http")

const server = http.createServer((req, res) => {
	const url = req.url
	const method = req.method

	if (url === "/") {
		res.write(
			"<html><body><h1>Hello there!</h1><form action='/create-user' method='POST'><input type='text' name='create-user'><button type='submit'>Submit</button></form></body></html>"
		)
		return res.end()
	}

	if (url === "/create-user" && method === "POST") {
		const body = []
		req.on("data", (chunk) => {
			body.push(chunk)
		})
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split("=")[1]
			console.log(message)
			res.statusCode = 302
			res.setHeader("Location", "/")
			return res.end()
		})
	}

	if (url === "/users") {
		res.write(
			"<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>"
		)
	}
})

server.listen(3000)
