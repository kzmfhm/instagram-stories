import React from 'react';
import Image from 'next/image';
import leftImage from '../../../public/left-icon.svg';
import rightImage from '../../../public/right-icon.svg';
import './style.css'

const RightLeftIcons = ({ index, setIndex, cards }) => {
  const handleLeftArrowClick = () => {
    const newIndex = (index - 1 + cards.length) % cards.length;
    setIndex(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex = (index + 1) % cards.length;
    setIndex(newIndex);
  };

  return (
    <div className="arrow">
      <div className="custom-left-arrow" onClick={handleLeftArrowClick}>
        <Image src={leftImage} alt="scroll left" />
      </div>
      <div className="custom-right-arrow" onClick={handleRightArrowClick}>
        <Image src={rightImage} alt="scroll right" />
      </div>
    </div>
  );
};

export default RightLeftIcons;
