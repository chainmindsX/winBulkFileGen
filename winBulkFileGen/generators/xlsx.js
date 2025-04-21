const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

function generateXlsx(count) {
  const outputDir = path.join(__dirname, "../output/xlsx");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([["Name", "Age"], ["John", 30]]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, path.join(outputDir, `file${i}.xlsx`));
  }
}
module.exports = generateXlsx;
