// App.js
import React from 'react';
import Gallery from './components/Gallery';

const clientImages = [
  { src: '/images/c1.jpg', alt: 'Client Artwork 1' },
  { src: '/images/client2.jpg', alt: 'Client Artwork 2' },
  // Add more client images as needed
];

const personalImages = [
  { src: '/images/personal1.jpg', alt: 'Personal Artwork 1' },
  { src: '/images/personal2.jpg', alt: 'Personal Artwork 2' },
  // Add more personal images as needed
];

function App() {
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <Gallery clientImages={clientImages} personalImages={personalImages} />
    </div>
  );
}

export default App;
