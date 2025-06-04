# DotMD - Markdown Resume Generator

DotMD is a simple React app that lets you write your resume in Markdown format, preview it live, and download it as a PDF.  
It uses [`@uiw/react-md-editor`](https://github.com/uiwjs/react-md-editor) for Markdown editing and preview, and [`react-to-print`](https://github.com/gregnb/react-to-print) for PDF export.  
The UI is styled with [Headless UI](https://headlessui.com/) and Heroicons for a clean, minimal look.

---

## Features

- Markdown editor with live preview (editor only, preview separate)
- Download the resume as a PDF
- Instructions modal for user help
- Simple and clean UI using Headless UI Dialog and Heroicons

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/dotmd.git
   cd dotmd
    ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser at `http://localhost:3000` to see the app.

---

## Usage

* Write your resume in Markdown in the editor on the left.
* See a live preview on the right.
* Click **Download as PDF** to export your resume.
* Click **Show Instructions** for usage tips.

---

## Technologies Used

* React + TypeScript
* @uiw/react-md-editor for Markdown editing and rendering
* react-to-print for PDF export
* Headless UI for modal dialogs
* Heroicons for icons
* CSS modules / custom CSS for styling

---

## Folder Structure

```
/src
  /App.tsx         # Main app component
  /index.css       # Styles
  /index.tsx       # React entry point
```

---

## License

This project is open source under the [MIT License](LICENSE).

