"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import './style.css';
import instaIcon from '../../public/insta.svg';
import Image from 'next/image';
import iccIcon from '../../public/icc.svg';
import pkIcon from '../../public/pk.svg';
import profileImage from '../../public/profile.svg';
import reactImage from '../../public/react.svg';


const Profiles = () => {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingIcc, setLoadingIcc] = useState(false);
  const [loadingInstagram, setLoadingInstagram] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const handleLinkClick = (loadingStateSetter) => {
    loadingStateSetter(true);

    setTimeout(() => {
      loadingStateSetter(false);
      if (loadingStateSetter === setLoadingProfile) {
        
      }
    }, 1500);
  };

  return (
    <div className='flex gap-5 mb-10 justify-center md:mt-[-55px] items-center md:ml-5 font-serif p-4'>
      <div className='story-cover'>
      <Link href='/Stories' className={`story-id${loadingProfile ? ' loading' : ''}`} onClick={() => handleLinkClick(setLoadingProfile)}>
        <div className='story-id-text'>
          <Image src={reactImage} className='react' alt="React Logo" />
        </div>
      </Link>
      </div>
      <div className='story-cover'>
      <Link href='/Stories' className={`story-id${loadingProfile ? ' loading' : ''}`} onClick={() => handleLinkClick(setLoadingProfile)}>
        <div className='story-id-text'>
          <Image src={profileImage} className='profile' alt="Instagram Logo" />
        </div>
      </Link>
      </div>
      <div className='story-cover'>
      <Link href='/Stories' className={`story-id${loadingIcc ? ' loading' : ''}`} onClick={() => handleLinkClick(setLoadingIcc)}>
        <div className='story-id-text'>
          <Image src={iccIcon} alt="ICC Icon" />
        </div>
        </Link>
      </div>
      <div className='story-cover'>
      <Link  href='/Stories' className={`story-id${loadingInstagram ? ' loading' : ''}`} onClick={() => handleLinkClick(setLoadingInstagram)}>
        <div className='story-id-text'>
          <Image src={instaIcon} alt="Instagram Icon" width={38} height={38}/>
        </div>
      </Link>
      </div>
    <div className='story-cover'>
      <Link  href='/Stories'className={`story-id${loadingAvatar ? ' loading' : ''}`} onClick={() => handleLinkClick(setLoadingAvatar)}>
        <div className='story-id-text'>
          <Image src={pkIcon} alt="Pakistan"/>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default Profiles;
