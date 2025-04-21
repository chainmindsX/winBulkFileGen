const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

function generatePdf(count) {
  const outputDir = path.join(__dirname, "../output/pdf");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const doc = new PDFDocument();
    const filePath = path.join(outputDir, `file${i}.pdf`);
    doc.pipe(fs.createWriteStream(filePath));
    doc.text(`Hello PDF file #${i}`);
    doc.end();
  }
}
module.exports = generatePdf;
