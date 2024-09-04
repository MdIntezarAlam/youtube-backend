const fs = require("fs-extra");
const path = require("path");

const functionsDir = path.join(__dirname, "../dist/functions");
const sourceDir = path.join(__dirname, "../src/functions");

fs.copySync(sourceDir, functionsDir);
console.log("Functions have been copied to the dist/functions directory.");
