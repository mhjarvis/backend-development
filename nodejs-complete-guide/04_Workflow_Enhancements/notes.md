## 04 Workflow Improvements

### NPM Scripting

Make use of the `package.json` file to add scripts that you can execute with npm.

```js
{
	"name": "04_workflow_enhancements",
	"version": "1.0.0",
	"main": "app.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node app.js",  // run npm start to run this script
        "start-server": "node app.js" // run with `npm run start-server` these are custom scripts that you create

	},
	"author": "Markus",
	"license": "ISC",
	"description": ""
}

```

### Installing Third Party Packages

`npm install <package-name>` will be the primary method for installing packages. You can also choose how to install these packages. For example, we could install it as a developmental dependency only, so it is not used in production, for example:

```js
    npm install nodemon --save-dev      // only for development use
	npm install --save express		// install for production dependency

    -g      // ending will install the package globally
```

In the package.json file, you can use these packages (for the example, using nodemon to restart the server after changes):

```js
...
    	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "nodemon app.js",  // udpated
        "start-server": "node app.js"
        }
...
```
