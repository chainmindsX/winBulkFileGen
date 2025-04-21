const { ipcRenderer } = require("electron");

document.getElementById("generateBtn").addEventListener("click", () => {
  const types = ["docx", "xlsx", "pptx", "txt", "csv", "json", "pdf"];
  const selectedTypes = types.filter(type => document.getElementById(type).checked);
  const fileCount = parseInt(document.getElementById("fileCount").value);
  ipcRenderer.send("generate-files", { selectedTypes, fileCount });
});
