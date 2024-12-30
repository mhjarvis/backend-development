// node specific module
const http = require("http")
const path = require("path") // makes path work on all OSs

// third party modules
const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

const app = express()

// parse incoming data
app.use(bodyParser.urlencoded({ extended: false }))

// pass in folder you want to serve statically
app.use(express.static(path.join(__dirname, "public")))

// routes
app.use("/admin", adminRoutes)
app.use(shopRoutes)

// add 404 error page with catch-all route
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)

// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);
