const path = require("path") // used for setting paths
const express = require("express")

const rootDir = require("../../util/path")

const router = express.Router()

// '/' is the default and used for any path
router.get("/", (req, res, next) => {
	// __dirname points to the routes folder
	res.sendFile(path.join(rootDir, "views", "shop.html"))
})

module.exports = router
