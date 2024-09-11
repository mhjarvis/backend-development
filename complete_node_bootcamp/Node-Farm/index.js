const fs = require("fs")
const http = require("http")
const url = require("url")

/////////////////////////////////////////////////////////////
// FILES

// BLOCKING, SYNCHRONOUS WAY
/* 
const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
console.log(textIn)

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`

fs.writeFileSync("./txt/output.txt", textOut)
console.log("File written!") 
*/

// NON-BLOCKING, ASYCHRONOUS WAY
/* fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
	if (err) return console.log("Error")

	fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
		console.log(data2)

		// ASYNCHRONOUS WAY OF WRITING A FILE
		fs.writeFile("./txt/final.txt", `${data2}`, "utf-8", (err) => {
			console.log("files have been written")
		})
	})
})
console.log("Reading...")
 */

/////////////////////////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
	// SEND BASIC, PT RESPONSE WHEN A CERTAIN REQUEST COMES IN
	const pathName = req.url

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

// ADD BASIC ROUTING
