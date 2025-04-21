const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");

function generatePptx(count) {
  const outputDir = path.join(__dirname, "../output/pptx");
  fs.mkdirSync(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    slide.addText(`Slide ${i}`, { x: 1, y: 1, fontSize: 24 });
    pptx.writeFile({ fileName: path.join(outputDir, `file${i}.pptx`) });
  }
}
module.exports = generatePptx;
