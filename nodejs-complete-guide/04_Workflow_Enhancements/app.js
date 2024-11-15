// require() - default way to import in node
const http = require("http")
const routes = require("./routes")

const server = http.createServer(routes)
//console.log(req.url, req.method, req.headers)
//process.exit()		this will exit the process and close connection

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
