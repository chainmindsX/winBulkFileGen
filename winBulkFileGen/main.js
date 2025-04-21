const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const generateDocx = require('./generators/docx');
const generateXlsx = require('./generators/xlsx');
const generatePptx = require('./generators/pptx');
const generateTxt = require('./generators/txt');
const generateCsv = require('./generators/csv');
const generateJson = require('./generators/json');
const generatePdf = require('./generators/pdf');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('renderer/index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('generate-files', async (event, { selectedTypes, fileCount }) => {
  if (selectedTypes.includes('docx')) await generateDocx(fileCount);
  if (selectedTypes.includes('xlsx')) await generateXlsx(fileCount);
  if (selectedTypes.includes('pptx')) await generatePptx(fileCount);
  if (selectedTypes.includes('txt')) generateTxt(fileCount);
  if (selectedTypes.includes('csv')) generateCsv(fileCount);
  if (selectedTypes.includes('json')) generateJson(fileCount);
  if (selectedTypes.includes('pdf')) generatePdf(fileCount);
});
