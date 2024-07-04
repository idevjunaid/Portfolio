import React, { useEffect, useState } from 'react';
import './Contact.scss'; // Your SCSS file for styling
import resumePdf from '../../assets/Resume.pdf'; // Import the PDF file
import Button from '@mui/material/Button';
import { LinkedIn, Email, Phone } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Contact() {
    const [animate, setAnimate] = useState(false);
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    useEffect(() => {
        setAnimate(true);
    }, []);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpen = (content) => {
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isLink = (content) => {
        return content.startsWith('http') || content.startsWith('mailto:');
    };

    return (
        <>
            <div className={`main offset-lg-3 col-md-12 col-lg-9 d-flex text-white ${animate ? 'slide-fade-enter-active' : ''}`}>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="info d-flex flex-md-column flex-lg-row justify-content-around">
                        <p><strong>Name:</strong> Junaid Amin</p>
                        <p><strong>Country:</strong> Pakistan</p>
                    </div>
                    <div className="contact-icons">
                        <div className="icon-wrapper" onClick={() => handleOpen('https://linkedin.com/in/junaidamin')}>
                            <LinkedIn className="contact-icon" />
                        </div>
                        <div className="icon-wrapper" onClick={() => handleOpen('mailto:idevjunaid@gmail.com')}>
                            <Email className="contact-icon" />
                        </div>
                        <div className="icon-wrapper" onClick={() => handleOpen('+92 314 3002813')}>
                            <Phone className="contact-icon" />
                        </div>
                    </div>
                    <div className="cv-download">
                        <Button variant="contained" color="primary" onClick={downloadCV}>
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box className="modal-box">
                    {isLink(modalContent) ? (
                        <a href={modalContent} target="_blank" rel="noopener noreferrer">
                            {modalContent}
                        </a>
                    ) : (
                        <p>{modalContent}</p>
                    )}
                    <Button variant="contained" color="secondary" onClick={handleClose} className="close-button">
                        Close
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default Contact;
