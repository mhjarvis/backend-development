const path = require("path")
const express = require("express")

const rootDir = require("../util/path")

const router = express.Router()

const products = []

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"))

	// do not add next()
})

// /admin/add-product => POST
// get limits to incoming get requests (also app.post for post requests)
router.post("/add-product", (req, res, next) => {
	products.push({ title: req.body.title })
	res.redirect("/") // will redirect to '/'
})

exports.routes = router
exports.products = products
