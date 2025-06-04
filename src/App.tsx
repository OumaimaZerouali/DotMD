import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import './index.css';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {
    ArrowDownTrayIcon
} from "@heroicons/react/24/solid";

const App: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(`# John Doe
**Full-Stack Developer**

- React
- Node.js
- MongoDB`);

    const printRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: 'resume',
    });

    return (
        <div className="app-container">
            <h1 className="title">DotMD</h1>

            <div className="content-area">
                <div className="editor-container">
                    <MDEditor value={markdown} onChange={(val) => setMarkdown(val ?? '')} preview="edit" height="100%" />
                </div>

                <div className="button-column">
                    <button className="btn-download" onClick={handlePrint}>
                        <ArrowDownTrayIcon className="icon" /> Download as PDF
                    </button>
                    <button className="btn-open-modal" onClick={() => setIsModalOpen(true)}>
                        Show Instructions
                    </button>
                </div>

                <div className="preview-container" ref={printRef}>
                    <MDEditor.Markdown source={markdown} />
                </div>
            </div>


            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="dialog">
                <div className="dialog-backdrop" aria-hidden="true" />
                <DialogPanel className="dialog-panel">
                    <DialogTitle className="dialog-title">Instructions</DialogTitle>
                    <Description>
                        Write your resume in Markdown format on the left editor. Preview appears on the right.
                        Write your resume in Markdown format on the right editor. Preview appears on the left.
                    </Description>
                    <button className="btn-close" onClick={() => setIsModalOpen(false)}>Close</button>
                </DialogPanel>
            </Dialog>
        </div>
    );
};

export default App;