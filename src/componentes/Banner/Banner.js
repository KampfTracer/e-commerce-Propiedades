import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import banner from '../../img/logo.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
      </div>
      <Link to='/' className='banner-link'>
        <img className="banner-img" src={banner} alt="RE/MAX REALTY" />
      </Link>
    </div>
  );
};

export default Banner;
