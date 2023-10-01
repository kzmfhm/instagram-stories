// Heart.jsx
import React, { useState } from 'react';
import heartFillIcon from '../../../public/heart-fill.svg';
import heartBlankIcon from '../../../public/heart-blank.svg';
import Image from 'next/image';
import './style.css';

const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='heart' onClick={handleToggleLike}>
      <Image src={isLiked ? heartFillIcon : heartBlankIcon} alt={isLiked ? 'Liked' : 'Not Liked'} />
    </div>
  );
}

export default Heart;
