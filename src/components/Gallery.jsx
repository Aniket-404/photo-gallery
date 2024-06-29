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
    paddingTop: theme.spacing(4), // Add padding to top of gallery
    paddingBottom: theme.spacing(4), // Add padding to bottom of gallery
    background: 'linear-gradient(to bottom right, #303030, #252525)', // Dark-themed subtle gradient
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    padding: theme.spacing(3),
  },
  imageItem: {
    position: 'relative',
    overflow: 'hidden',
    width: 'auto',
    height: '150px', // Fixed height for the images
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
    borderRadius: '8px', // Rounded corners for images
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
    paddingTop: theme.spacing(2), // Add padding above the title
    color: 'white', // Title text color
  },
}));

const Gallery = ({ clientImages, personalImages }) => {
  const [showClientArtworks, setShowClientArtworks] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

//   const handleToggleChange = () => {
//     setShowClientArtworks(!showClientArtworks);
//   };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
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
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <ImageModal open={modalOpen} onClose={handleCloseModal} image={selectedImage} />
    </Container>
  );
};

export default Gallery;
