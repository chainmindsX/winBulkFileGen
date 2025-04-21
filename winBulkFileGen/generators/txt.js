const fs = require("fs");
const path = require("path");

function generateTxt(count) {
  const outputDir = path.join(__dirname, "../output/txt");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    fs.writeFileSync(path.join(outputDir, `file${i}.txt`), `Sample text file number ${i}`);
  }
}
module.exports = generateTxt;
