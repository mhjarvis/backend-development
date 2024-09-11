# Node.js Basics

## Input/Output

### Reading and Writing Synchronously

```js
// REQUIRE FILE SYSTEM MODULE
const fs = require("fs")

// EXAMPLE OF READING A FILE IN; SYNCHRONOUS WAY
const textIn = fs.readFileSync("../pathToFile", "utf-8")

// EXAMPLE OF WRITING TEXT OUT
const textOut = `This is text out to file: ${textIn}.\n Creted on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)
```

### Reading and Writing Asynchronously

```js
// NON-BLOCKING ASYNCHRONOUS APPROACH
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
	if (err) return console.log("Error")
	console.log(data)
})
// THIS LINE OF CODE WILL PRINT FIRST
console.log("File Reading")

// ASYNCHRONOUS WAY OF WRITING A FILE
fs.writeFile("./txt/final.txt", `${data2}`, "utf-8", (err) => {
	console.log("files have been written")
})
```

### Blocking and Non-Blocking: Asynchronous Nature of Node

- Synchronous code is blocking code because it causes the system to wait until it is finished.
- Asynchronous code is non-blocking code because other processes can finish while it completes stuff in the background.
