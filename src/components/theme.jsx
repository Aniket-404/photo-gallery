// theme.js
import { createTheme } from '@mui/material/styles';

// Create a dark theme
const theme = createTheme({
  palette: {
    mode: 'dark', // Set the palette mode to dark
    primary: {
      main: '#90caf9', // Adjust primary color as needed
    },
    secondary: {
      main: '#ffcc80', // Adjust secondary color as needed
    },
    background: {
      default: '#121212', // Dark background color for the entire app
      paper: '#1e1e1e', // Slightly lighter background color for surfaces
    },
    text: {
      primary: '#ffffff', // Text color for primary content
      secondary: '#bdbdbd', // Text color for secondary content
    },
  },
  // Add other customizations like typography, spacing, etc.
});

export default theme;
