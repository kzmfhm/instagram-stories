// RightLeftIcons.js
import React from 'react';
import Image from 'next/image';
import leftImage from '../../../public/left-icon.svg';
import rightImage from '../../../public/right-icon.svg';
import './style.css';

const RightLeftIcons = ({ onLeftArrowClick, onRightArrowClick }) => {
  return (
    <div className="arrow">
      <div className="custom-left-arrow" onClick={onLeftArrowClick}>
        <Image src={leftImage} alt="scroll left" />
      </div>
      <div className="custom-right-arrow" onClick={onRightArrowClick}>
        <Image src={rightImage} alt="scroll right" />
      </div>
    </div>
  );
};

export default RightLeftIcons;
