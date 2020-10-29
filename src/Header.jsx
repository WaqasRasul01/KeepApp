import React from 'react';
import logo from './images/logo.jpg';

const Header = () => {
  return (
      <>
      <div className= "header">
      <img src = {logo} className="logo" alt ="logo" width='70px' height='60px' />
    <h1>Keep Yours</h1>
    </div>
  </>
  );
}

export default Header;
