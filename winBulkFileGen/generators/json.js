const fs = require("fs");
const path = require("path");

function generateJson(count) {
  const outputDir = path.join(__dirname, "../output/json");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const obj = { id: i, name: `User${i}`, role: "tester" };
    fs.writeFileSync(path.join(outputDir, `file${i}.json`), JSON.stringify(obj, null, 2));
  }
}
module.exports = generateJson;
