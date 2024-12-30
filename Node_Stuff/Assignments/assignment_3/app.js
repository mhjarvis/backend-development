const http = require("http")
const path = require("path")

const mainRoutes = require("./routes/mainRoutes")

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(mainRoutes)

app.listen(4000)
