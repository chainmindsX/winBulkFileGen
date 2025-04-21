const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph } = require("docx");

async function generateDocx(count) {
  const outputDir = path.join(__dirname, "../output/docx");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const doc = new Document({
      sections: [{ children: [new Paragraph("Hello from Bulk Generator!")] }],
    });
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(path.join(outputDir, `file${i}.docx`), buffer);
  }
}
module.exports = generateDocx;
