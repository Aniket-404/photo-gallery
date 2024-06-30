// ImageModal.js
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  dialogContent: {
    textAlign: 'center',
    padding: 0,
    overflow: 'hidden', // Prevent content overflow
  },
  fullScreenContainer: {
    height: '70vh', // Full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  fullScreenImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain', // Fit image within the container
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: 'white',
  },
  navButtonContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
  prevButton: {
    left: 0,
  },
  nextButton: {
    right: 0,
  },
  navButton: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
});

const ImageModal = ({ open, onClose, images, currentIndex, nextImage, prevImage }) => {
  const classes = useStyles();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, nextImage, prevImage, onClose]);

  if (!open || currentIndex === null) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.fullScreenContainer}>
          <div className={`${classes.navButtonContainer} ${classes.prevButton}`}>
            <IconButton
              aria-label="previous"
              className={classes.navButton}
              onClick={prevImage}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          {images[currentIndex] && (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={classes.fullScreenImage}
            />
          )}
          <div className={`${classes.navButtonContainer} ${classes.nextButton}`}>
            <IconButton
              aria-label="next"
              className={classes.navButton}
              onClick={nextImage}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
