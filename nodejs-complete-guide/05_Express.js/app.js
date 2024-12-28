const express = require("express") // exported as a function
const bodyParser = require("body-parser")

const app = express() // app here is a valid request handler

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// parse incoming request body; will call next(); will handle body parsing
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRoutes)

// default
app.use((req, res, next) => {
	res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000)
