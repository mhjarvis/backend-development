<h1 style='text-align:center'>Node.js</h1>

[Official Node.js Docs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

[Full Node.js Reference](https://nodejs.org/dist/v23.5.0/docs/api/)

# Basic Server Using Node.js

`npm install nodemon` - package to automatically restart server for changes
`npm install nodemon --save-dev` - install only as a dev dependency

# Express.js

`npm install --save express` - install express as a dependency
`npm install --save body-parser` - install body-parser

To implement nodemon, you can add it to the `package.json` file:

`"start": "nodemon app.js"`

## Setup Basic Express Server

In app.js:

```js
const path = require("path")
const express = require("express") // import express
const mainRoutes = require("./routes/index")

const app = express() // create app

app.use(express.static(path.join(__dirname, "public")))
app.use(mainRoutes)

app.listen(3000) // listen on port 3000
```

## Routes Folder

Add routes in the `routes` folder. In the routes file:

```js
const path = require("path")
const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "views", "index"))
})

router.get("/users", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "views", "users"))
})

module.exports = router
```

## Views Folder

Here you can create index files and other html files. These will be served via the routes files.

## Public Folder

This will usually contain css files that are served statically.
