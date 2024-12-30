const path = require("path")
const express = require("express")

const rootDir = require("../util/path")

const router = express.Router()

router.get("/users", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "users.html"))
})

router.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "index.html"))
})

module.exports = router
