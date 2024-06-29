import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Gallery from './components/Gallery';
import Header from './components/Header';
import theme from './components/theme'; // Import your custom theme
import { createGlobalStyle } from 'styled-components';

const clientImages = [
  { src: '/images/c1.jpg', alt: 'Client Image 1' },
  { src: '/images/c2.jpg', alt: 'Client Image 2' },
  { src: '/images/c3.jpg', alt: 'Client Image 3' },
  { src: '/images/c4.jpeg', alt: 'Client Image 4' },
  { src: '/images/c5.jpg', alt: 'Client Image 5' },
  { src: '/images/c6.jpg', alt: 'Client Image 6' },
  { src: '/images/c7.jpg', alt: 'Client Image 7' },
  { src: '/images/c8.jpg', alt: 'Client Image 8' },
  { src: '/images/c9.jpg', alt: 'Client Image 9' },
  { src: '/images/c10.jpg', alt: 'Client Image 10' },
  { src: '/images/c11.jpg', alt: 'Client Image 11' },
  { src: '/images/c12.jpg', alt: 'Client Image 12' },
  { src: '/images/c13.jpg', alt: 'Client Image 13' },
  { src: '/images/c14.jpg', alt: 'Client Image 14' },
  { src: '/images/c15.jpg', alt: 'Client Image 15' },
  { src: '/images/c16.jpg', alt: 'Client Image 16' },
  { src: '/images/c17.jpg', alt: 'Client Image 17' },
  { src: '/images/c18.jpg', alt: 'Client Image 18' },
  { src: '/images/c19.png', alt: 'Client Image 19' },
  { src: '/images/c20.jpg', alt: 'Client Image 20' },
];

const personalImages = [
  { src: '/images/p1.png', alt: 'Personal Image 1' },
  { src: '/images/p2.png', alt: 'Personal Image 2' },
  { src: '/images/p3.png', alt: 'Personal Image 3' },
  { src: '/images/p4.png', alt: 'Personal Image 4' },
  { src: '/images/p5.png', alt: 'Personal Image 5' },
  { src: '/images/p6.png', alt: 'Personal Image 6' },
  { src: '/images/p7.png', alt: 'Personal Image 7' },
  { src: '/images/p8.png', alt: 'Personal Image 8' },
  { src: '/images/p9.png', alt: 'Personal Image 9' },
  { src: '/images/p10.png', alt: 'Personal Image 10' },
  { src: '/images/p11.png', alt: 'Personal Image 11' },
  { src: '/images/p12.png', alt: 'Personal Image 12' },
  { src: '/images/p13.png', alt: 'Personal Image 13' },
  { src: '/images/p14.png', alt: 'Personal Image 14' },
  { src: '/images/p15.png', alt: 'Personal Image 15' },
  { src: '/images/p16.png', alt: 'Personal Image 16' },
  { src: '/images/p17.png', alt: 'Personal Image 17' },
  { src: '/images/p18.png', alt: 'Personal Image 18' },
  { src: '/images/p19.png', alt: 'Personal Image 19' },
  { src: '/images/p20.png', alt: 'Personal Image 10' },
  { src: '/images/p21.png', alt: 'Personal Image 21' },
  { src: '/images/p22.png', alt: 'Personal Image 22' },
  { src: '/images/p23.png', alt: 'Personal Image 23' },
  { src: '/images/p24.png', alt: 'Personal Image 24' },
  { src: '/images/p25.png', alt: 'Personal Image 25' },
  { src: '/images/p26.png', alt: 'Personal Image 26' },
  { src: '/images/p27.png', alt: 'Personal Image 27' },
  { src: '/images/p28.png', alt: 'Personal Image 28' },
  { src: '/images/p29.png', alt: 'Personal Image 29' },
  { src: '/images/p30.png', alt: 'Personal Image 30' },
  { src: '/images/p31.png', alt: 'Personal Image 31' },
  { src: '/images/p32.png', alt: 'Personal Image 32' },
  { src: '/images/p33.jpg', alt: 'Personal Image 33' },
  { src: '/images/p34.png', alt: 'Personal Image 34' },
  { src: '/images/p35.png', alt: 'Personal Image 35' },
  { src: '/images/p36.png', alt: 'Personal Image 36' },
  { src: '/images/p37.png', alt: 'Personal Image 37' },
];

// Global styles to manage scrollbars
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    overscroll-behavior-y: none; /* Prevent pull-to-refresh effect on touch devices */
  }

  html {
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    overscroll-behavior-y: none; /* Prevent pull-to-refresh effect on touch devices */
  }

  /* Hide scrollbar for Chrome, Safari, and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
`;

const App = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides basic CSS resets */}
      <GlobalStyle /> {/* Apply global styles */}
      <div style={{ 
        background: theme.palette.background.default, 
        minHeight: '100vh', 
        padding: '20px',
      }}>
        {/* <Header /> Include your header component */}
        <Gallery clientImages={clientImages} personalImages={personalImages} />
        {/* Add more components as needed */}
      </div>
    </ThemeProvider>
  );
};

export default App;
