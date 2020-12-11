import React, { Component } from 'react';
import Navbar from './Navbar';
import '../App';
import PDFViewer from './PDFViewer/PDFViewer';
import PDFJs from '../backends/pdfjs';

class Resume extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <PDFViewer
                    backend={PDFJs}
                    src='/myPDF.pdf'
                />
            </div>
        );
    }
}

export default Resume;
