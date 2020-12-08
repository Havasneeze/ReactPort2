import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
import PDFViewer from './PDFViewer/PDFViewer';
import PDFJSBackend from '../backends/pdfjs';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles({
    mainContainer: {
        background: "#223",
        
    },
    title: {
        color: 'white',
    }

})

const Resume = () => {
    const classes = useStyles();
    return (
      
         <React.Fragment> 
             
            <Navbar />
            
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.title}>
                    Sup?! 
                </Typography>
                <Box component="div">
                    <Typography variant="h2" align="center" style={{color: 'white'}}>
                        Resume Section still in work.  Be Patient Por favor.  
                    </Typography>
                   

                </Box>
            </Box>
            <PDFViewer 
                    backend={PDFJSBackend} 
                    src='/myPDF.pdf' />
        /* </React.Fragment> 
        

    );
};

export default Resume;
