import React from 'react';
import Image from 'next/image'; 
import instagramImage from '../../public/instagram.svg'

const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
     <h1 style={{ marginLeft: '25px', marginTop: '25px'}}>
      <Image src={instagramImage} alt="Instagram Icon" /> 
      </h1>
    </div>
  );
}

export default Header;
