import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
<<<<<<< HEAD
import PDFViewer from './PDFViewer/PDFViewer';
import PDFJSBackend from '../backends/pdfjs';
import { PlayCircleFilledWhite } from '@material-ui/icons';
=======
// import { PlayCircleFilledWhite } from '@material-ui/icons';
>>>>>>> c56925497a7acc81366ac5033e80b33f7fdd737f

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
<<<<<<< HEAD
            <PDFViewer 
                    backend={PDFJSBackend} 
                    src='/myPDF.pdf' />
        /* </React.Fragment> 
=======
         </React.Fragment> 
>>>>>>> c56925497a7acc81366ac5033e80b33f7fdd737f
        

    );
};

export default Resume;
