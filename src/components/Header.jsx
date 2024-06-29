import React from 'react';
import logo from './logo.png'; // Adjust the path relative to your component folder

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      {/* Other header content */}
    </div>
  );
};

export default Header;
