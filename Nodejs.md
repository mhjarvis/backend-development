# Node.js Basics

### Read/Write Files

```js
// REQUIRE FILE SYSTEM MODULE
const fs = require("fs")

// EXAMPLE OF READING A FILE IN
const textIn = fs.readFileSync("../pathToFile", "utf-8")

// EXAMPLE OF WRITING TEXT OUT
const textOut = `This is text out to file: ${textIn}.\n Creted on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)
```
