import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ImageModal from './ImageModal';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: 'linear-gradient(to bottom right, #303030, #252525)',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(3),
  },
  imageItem: {
    position: 'relative',
    overflow: 'hidden',
    width: 'auto',
    height: '150px',
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  image: {
    maxHeight: '100%',
    width: 'auto',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  title: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    color: 'white',
  },
}));

const Gallery = ({ clientImages, personalImages }) => {
  const [showClientArtworks, setShowClientArtworks] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = showClientArtworks ? clientImages : personalImages;

  return (
    <Container>
      <Typography variant="h4" className={classes.title}>
        Aniket's Portfolio
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setShowClientArtworks(true)}
        >
          Client Artworks
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setShowClientArtworks(false)}
        >
          Personal Artworks
        </Button>
      </div>
      <div className={classes.galleryContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={classes.imageItem}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        images={images}
        currentIndex={selectedImageIndex}
        nextImage={nextImage}
        prevImage={prevImage}
      />
    </Container>
  );
};

export default Gallery;
