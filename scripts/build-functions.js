const fs = require("fs");
const path = require("path");

// Define source and destination directories
const srcDir = path.join(__dirname, "../src/functions");
const destDir = path.join(__dirname, "../dist/functions");

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy files from src to dest
fs.readdirSync(srcDir).forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(srcPath, destPath);
});

console.log("Functions have been copied to the dist/functions directory.");
