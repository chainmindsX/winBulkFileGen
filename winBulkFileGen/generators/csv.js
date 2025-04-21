const fs = require("fs");
const path = require("path");

function generateCsv(count) {
  const outputDir = path.join(__dirname, "../output/csv");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const content = "Name,Email\nUser" + i + ",user" + i + "@example.com";
    fs.writeFileSync(path.join(outputDir, `file${i}.csv`), content);
  }
}
module.exports = generateCsv;
