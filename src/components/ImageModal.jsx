// ImageModal.js
import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
});

const ImageModal = ({ open, onClose, image }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.fullScreenContainer}>
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              className={classes.fullScreenImage}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
