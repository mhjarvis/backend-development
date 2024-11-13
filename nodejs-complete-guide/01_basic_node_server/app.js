// require() - default way to import in node
const http = require("http")

/* function rqListener(req, res) {}

// this will create a server that will run the called function for every request that it gets
http.createServer(rqListener) */

/* http.createServer(function (req, res) {

})
 */

http.createServer((req, res) => {
	console.log(req)
})
