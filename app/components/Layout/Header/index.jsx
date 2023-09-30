"use client";
import React from 'react';
import Image from 'next/image'; 
import instagramImage from '../../../../public/instagram.svg'
import './style.css'
const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
     <h1 className='header'>
      <Image src={instagramImage} alt="Instagram Icon" /> 
      </h1>
    </div>
  );
}

export default Header;