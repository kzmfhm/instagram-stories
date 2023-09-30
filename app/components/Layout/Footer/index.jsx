"use client";
import React from 'react';
import Image from 'next/image'; 
import githubImage from '../../../../public/github.svg';
import './style.css';

const Footer = () => {
  return (
    <div className='github'>
      <a href="https://github.com/kzmfhm/instagram-stories" target="_blank" rel="noopener noreferrer">
        <Image src={githubImage} alt="Github Icon" width={35} height={35} className='github-icon'/> 
      </a>
    </div>
  );
}

export default Footer;
