const express = require("express") // exported as a function
const bodyParser = require("body-parser")

const app = express() // app here is a valid request handler

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// parse incoming request body; will call next(); will handle body parsing
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRoutes)

// instead of using this:
/* 
const server = http.createServer(app) 
server.listen(3000)
*/
// we can just use:

app.listen(3000)
