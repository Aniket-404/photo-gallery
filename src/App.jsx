import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Gallery from './components/Gallery';
import theme from './components/theme'; // Import your custom theme
import { createGlobalStyle } from 'styled-components';

const clientImages = [
  { src: '/images/client/c1.jpg', alt: 'Client Image 1' },
  { src: '/images/client/c2.jpg', alt: 'Client Image 2' },
  { src: '/images/client/c3.jpg', alt: 'Client Image 3' },
  { src: '/images/client/c4.jpeg', alt: 'Client Image 4' },
  { src: '/images/client/c5.jpg', alt: 'Client Image 5' },
  { src: '/images/client/c6.jpg', alt: 'Client Image 6' },
  { src: '/images/client/c7.jpg', alt: 'Client Image 7' },
  { src: '/images/client/c8.jpg', alt: 'Client Image 8' },
  { src: '/images/client/c9.jpg', alt: 'Client Image 9' },
  { src: '/images/client/c10.jpg', alt: 'Client Image 10' },
  { src: '/images/client/c11.jpg', alt: 'Client Image 11' },
  { src: '/images/client/c12.jpg', alt: 'Client Image 12' },
  { src: '/images/client/c13.jpg', alt: 'Client Image 13' },
  { src: '/images/client/c14.jpg', alt: 'Client Image 14' },
  { src: '/images/client/c15.jpg', alt: 'Client Image 15' },
  { src: '/images/client/c16.jpg', alt: 'Client Image 16' },
  { src: '/images/client/c17.jpg', alt: 'Client Image 17' },
  { src: '/images/client/c18.jpg', alt: 'Client Image 18' },
  { src: '/images/client/c19.png', alt: 'Client Image 19' },
  { src: '/images/client/c20.jpg', alt: 'Client Image 20' },
];

const personalImages = [
  { src: '/images/personal/p1.png', alt: 'Personal Image 1' },
  { src: '/images/personal/p2.png', alt: 'Personal Image 2' },
  { src: '/images/personal/p3.png', alt: 'Personal Image 3' },
  { src: '/images/personal/p4.png', alt: 'Personal Image 4' },
  { src: '/images/personal/p5.png', alt: 'Personal Image 5' },
  { src: '/images/personal/p6.png', alt: 'Personal Image 6' },
  { src: '/images/personal/p7.png', alt: 'Personal Image 7' },
  { src: '/images/personal/p8.png', alt: 'Personal Image 8' },
  { src: '/images/personal/p9.png', alt: 'Personal Image 9' },
  { src: '/images/personal/p10.png', alt: 'Personal Image 10' },
  { src: '/images/personal/p11.png', alt: 'Personal Image 11' },
  { src: '/images/personal/p12.png', alt: 'Personal Image 12' },
  { src: '/images/personal/p13.png', alt: 'Personal Image 13' },
  { src: '/images/personal/p14.png', alt: 'Personal Image 14' },
  { src: '/images/personal/p15.png', alt: 'Personal Image 15' },
  { src: '/images/personal/p16.png', alt: 'Personal Image 16' },
  { src: '/images/personal/p17.png', alt: 'Personal Image 17' },
  { src: '/images/personal/p18.png', alt: 'Personal Image 18' },
  { src: '/images/personal/p19.png', alt: 'Personal Image 19' },
  { src: '/images/personal/p20.png', alt: 'Personal Image 10' },
  { src: '/images/personal/p21.png', alt: 'Personal Image 21' },
  { src: '/images/personal/p22.png', alt: 'Personal Image 22' },
  { src: '/images/personal/p23.png', alt: 'Personal Image 23' },
  { src: '/images/personal/p24.png', alt: 'Personal Image 24' },
  { src: '/images/personal/p25.png', alt: 'Personal Image 25' },
  { src: '/images/personal/p26.png', alt: 'Personal Image 26' },
  { src: '/images/personal/p27.png', alt: 'Personal Image 27' },
  { src: '/images/personal/p28.png', alt: 'Personal Image 28' },
  { src: '/images/personal/p29.png', alt: 'Personal Image 29' },
  { src: '/images/personal/p30.png', alt: 'Personal Image 30' },
  { src: '/images/personal/p31.png', alt: 'Personal Image 31' },
  { src: '/images/personal/p32.png', alt: 'Personal Image 32' },
  { src: '/images/personal/p33.jpg', alt: 'Personal Image 33' },
  { src: '/images/personal/p34.png', alt: 'Personal Image 34' },
  { src: '/images/personal/p35.png', alt: 'Personal Image 35' },
  { src: '/images/personal/p36.png', alt: 'Personal Image 36' },
  { src: '/images/personal/p37.png', alt: 'Personal Image 37' },
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
