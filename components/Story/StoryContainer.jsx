import React, { useState } from 'react';
import './style.css';
import RightLeftIcons from '../Buttons/RightLeftIcons';
import data from '../../api/data';

const StoryContainer = () => {
  const [index, setIndex] = useState(0);

  const handleCardClick = (cardIndex) => {
    setIndex(cardIndex);
  };

  const handleLeftRightIconsClick = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className='story-wraper'>
      <div className="slider">
        <div className="carousel">
          <RightLeftIcons index={index} setIndex={handleLeftRightIconsClick} cards={data} />
          {data.map((user, userIndex) => {
            return user.stories.map((item, i) => {
              let className = 'card';

              if (userIndex === index && i === index) {
                className = 'card card--active';
              } else if ((userIndex === index && i === index + 1) || (userIndex === 0 && index === data.length - 1)) {
                className = 'card card--next';
              } else if ((userIndex === index && i === index - 1) || (userIndex === data.length - 1 && index === 0)) {
                className = 'card card--previous';
              } else if ((userIndex === index && i === index + 2) || (userIndex === 1 && index === data.length - 1) || (userIndex === 0 && index === data.length - 2)) {
                className = 'card card--next2';
              } else if ((userIndex === index && i === index - 2) || (userIndex === data.length - 1 && index === 1) || (userIndex === data.length - 2 && index === 0)) {
                className = 'card card--previous2';
              }

              return (
                <div
                  key={item.id}
                  className={className}
                  onClick={() => handleCardClick(i)}
                >
                  {/* Your card content goes here */}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryContainer;
