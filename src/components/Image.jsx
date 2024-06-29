// Image.js
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Ensures proper alignment and behavior
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

const Image = ({ src, alt }) => {
  const classes = useStyles();

  return <img className={classes.image} src={src} alt={alt} />;
};

export default Image;
