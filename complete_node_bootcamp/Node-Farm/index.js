const fs = require("fs")
const http = require("http")
const url = require("url")

/***************************
 * READING IN FILES
 ***************************/

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

/***************************
 * SERVER
 ***************************/

// Read in json data
const tempOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	"utf-8"
)
const tempCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	"utf-8"
)
const tempProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	"utf-8"
)
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")

const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
	const pathName = req.url

	// OVERVIEW PAGE
	if (pathName === "/" || pathName === "/overview") {
		res.writeHead(200, { "Content-type": "text/html" })
		res.end(tempOverview)
		// PRODUCT PAGE
	} else if (pathName === "/product") {
		res.end("This is the product page!!")
		// API PAGE
	} else if (pathName === "/api") {
		res.writeHead(200, { "Content-type": "application/json" })
		// SEND DATA BACK TO USER
		res.end(data)
		// NOT FOUND PAGE
	} else {
		res.writeHead(404, {
			// Header - need to be set before response
			"Content-type": "text/html",
		})
		res.end("<h1>Page not found!</h1>")
	}
})

// Start server and begin listening on port 8000
server.listen(8000, "127.0.0.1", () => {
	console.log("Listening to request on port 8000")
})

// ADD BASIC ROUTING

const x = 2
let y = 4

function update(arg) {
	return Math.random() + y * arg
}

y = 2

const result = update(x)
