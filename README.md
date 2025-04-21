# 🧠 WinBulkFileGen v1.0 — Bulk File Generator for Windows


---

## 🏢 About ChainMindsX

**ChainMindsX** is a creative tech company focused on building cutting-edge, intelligent tools that simplify complex tasks for individuals and businesses. From data automation to AI-assisted desktop apps, we build products that actually solve real-world problems.

> 🚀 *Our mission is to build and release 100+ useful, productivity-boosting desktop tools by 2026.*

We specialize in:

- Windows desktop automation
- Electron and cross-platform GUI apps
- Data-driven productivity solutions
- Local/offline-first tools (no cloud dependency)

📧 Email: [chainmindsx@gmail.com](mailto:chainmindsx@gmail.com)  
🐦 Twitter: [@chainmindsX](https://twitter.com/chainmindsX)  
📺 YouTube: [@chainmindsx](https://youtube.com/@chainmindsx)

---

## 💡 About the Project

**WinBulkFileGen** (Windows Bulk File Generator) is a powerful offline tool that allows users to generate multiple types of files in bulk — instantly. This tool is especially useful for developers, testers, trainers, and office admins who often need dummy files, templates, or pre-filled formats across formats like:

- **Microsoft Word (.docx)**
- **Excel spreadsheets (.xlsx)**
- **PowerPoint presentations (.pptx)**
- **Text files (.txt)**
- *(More formats to come in future updates)*

---

## 🔧 How It Works

1. **Launch the App**
   - Double-click the `.exe` file to open the user-friendly dashboard.

2. **Choose File Types**
   - Select the types of files you want to generate — e.g., Word, Excel, PowerPoint, Text.

3. **Specify Quantity**
   - Enter how many files you want for each type (e.g., 10 `.docx`, 5 `.xlsx`).

4. **Click Generate**
   - The app will instantly create all files in a structured folder within seconds.

5. **Files are Ready!**
   - Files will be stored in a clean directory and named sequentially (e.g., `New Word File 1.docx`, `Report 2.xlsx`, etc.)

---

## 📦 What's Included in v1.0

- ✅ Bulk file generation for `.docx`, `.xlsx`, `.pptx`, `.txt`
- ✅ Simple Electron-based UI
- ✅ Offline desktop functionality (no internet required)
- ✅ One-click `.exe` launch
- ✅ Folder tree-based file structure
- ✅ Built-in Node.js backend for file handling
- ✅ Windows startup-safe architecture

---

## 💻 Installation / How to Use

1. **Download the `.exe`** from the [Releases](https://github.com/chainmindsX/winBulkFileGen/releases)
2. Run `winBulkFileGen.exe`
3. Select file types + quantity
4. Click **Generate**
5. Your files are instantly saved in a `bulk-output/` folder on the desktop

> **No installation required**. Fully portable. Just click and run.

---

## 🚀 Build Technology Stack

- **ElectronJS** (for cross-platform desktop GUI)
- **Node.js** (for backend generation logic)
- `docx`, `xlsx`, `pptxgenjs`, `fs`, `path` libraries
- **PowerShell & NPM scripts** (for building `.exe`)

---

## 🛠 How We Made It an `.exe`

To package this into a single `.exe` file, we used:

- [`electron-packager`](https://github.com/electron/electron-packager) to create a Windows-compatible build
- Manual optimization to remove extra files, keeping only one distributable `.exe`
- Packaging with minimized node_modules and clean main process

The `.exe` is under **100MB** and self-contained — it runs on any modern Windows system without installation.

---

## 🔮 Future Plans

- Add custom content templates (pre-filled Excel/Word)
- Image generator (dummy `.jpg`/`.png`)
- Save config presets
- Dark mode and theme options
- Drag & drop generation

---

## 🧠 Why This Project Exists

This tool was born out of a need during internal testing at ChainMindsX — we frequently had to manually create large sets of files for demos, test environments, and onboarding content.

Instead of wasting hours on repetitive tasks, **we built WinBulkFileGen to do it in seconds**. Now we're sharing it with the world.

---

## 🔗 Stay Connected

We’re continuously building tools like this. Follow us and stay updated!

- 📧 Email: [chainmindsx@gmail.com](mailto:chainmindsx@gmail.com)
- 🐦 Twitter: [@chainmindsX](https://twitter.com/chainmindsX)
- 📺 YouTube: [@chainmindsx](https://youtube.com/@chainmindsx)

---

## 🙌 Contribute or Suggest Features

We welcome feedback and contributions!  
Feel free to create issues, fork the repo, or suggest new formats to support.

---

---

🛠️ Made with 💙 by [ChainMindsX](https://github.com/chainmindsX)

