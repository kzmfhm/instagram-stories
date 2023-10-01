import React, { useState, useRef, useEffect, createRef } from 'react';
import PlayPause from '../Buttons/PlayPause';
import RightLeftIcons from '../Buttons/RightLeftIcons';
import MuteUnmute from '../Buttons/MuteUnmute';
import Heart from '../Buttons/Heart';
import cards from '../../api/data';
import './style.css';

const StoryContainer = () => {
  const cards = [
    {
      id: '1',
      video: '/videos/tom-jery.mp4',
    },
    {
      id: '2',
      video: '/videos/code.mp4', 
    },
    {
      id: '3',
      video: '/videos/cute.mp4', 
    },
    {
      id: '4',
      video: '/videos/tom-jery.mp4',
    },
    {
      id: '5',
      video: '/videos/frontend-course.mp4', 
    },
  ];

  const [index, setIndex] = useState(0);
  const videoRefs = useRef(Array(cards.length).fill().map(() => createRef()));
  const progressRefs = useRef(Array(cards.length).fill().map(() => createRef()));
  const [progressWidth, setProgressWidth] = useState(Array(cards.length).fill('100%'));
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  useEffect(() => {
    videoRefs.current = videoRefs.current.map((ref, i) => ref || createRef());
    progressRefs.current = progressRefs.current.map((ref, i) => ref || createRef());
  }, [cards.length]);

  useEffect(() => {
    const videoElements = videoRefs.current;
    const progressElements = progressRefs.current;

    const updateProgressBar = (index) => () => {
      const video = videoElements[index]?.current;
      const progressIndicator = progressElements[index]?.current;
    
      if (video && progressIndicator && !video.paused) {
        const currentTime = video.currentTime;
        const videoDuration = video.duration;
        const progressPercentage = (currentTime / videoDuration) * 100;
        const newProgressWidth = progressPercentage + '%';
    
        // Update the progress width for the specific video
        setProgressWidth((prevState) => {
          const newState = [...prevState];
          newState[index] = newProgressWidth;
          return newState;
        });
    
        // Set the progress bar width in pixels
        if (video.offsetWidth) {
          progressIndicator.style.width = `${progressPercentage * video.offsetWidth / 100}px`;
        }
      }
    };
    
    // Add event listeners for each video if the ref is valid
    videoElements.forEach((video, index) => {
      if (video?.current) {
        video.current.addEventListener('timeupdate', updateProgressBar(index));
      }
    });

    // Clean up event listeners
    return () => {
      videoElements.forEach((video, index) => {
        if (video?.current) {
          video.current.removeEventListener('timeupdate', updateProgressBar(index));
        }
      });
    };
  }, [videoRefs.current, progressRefs.current]);

  useEffect(() => {
    const video = videoRefs.current[index]?.current;

    // Pause the video when the card is not in the center position
    if (video && !isCardInCenter(index)) {
      video.pause();
      setIsVideoPlaying(false);
    }
  }, [index]);

  const isCardInCenter = (cardIndex) => {
    return cardIndex === index;
  };

  const togglePlayPause = (index) => {
    const isActive = isCardInCenter(index);
    const video = videoRefs.current[index]?.current;

    // Pause the video if it's not the active card
    if (!isActive && video && !video.paused) {
      video.pause();
      setIsVideoPlaying(false);
      return;
    }

    // Play/pause the video if it's the active card
    if (isActive && video && video.paused !== undefined) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleMuteUnmute = (index) => {
    const video = videoRefs.current[index]?.current;

    if (video) {
      video.muted = !video.muted;
      setIsVideoMuted(video.muted);
    }
  };

  const handleCardClick = (cardIndex) => {
    setIndex(cardIndex);
  };

  const handleLeftArrowClick = () => {
    const newIndex = (index - 1 + cards.length) % cards.length;
    setIndex(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex = (index + 1) % cards.length;
    setIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="carousel">
        <RightLeftIcons
          onLeftArrowClick={handleLeftArrowClick}
          onRightArrowClick={handleRightArrowClick}
        />
        {cards.map((item, i) => {
          let className = 'card';

          if (i === index) {
            className = 'card card--active';
          } else if (i === index + 1 || (i === 0 && index === cards.length - 1)) {
            className = 'card card--next';
          } else if (i === index - 1 || (i === cards.length - 1 && index === 0)) {
            className = 'card card--previous';
          } else if (i === index + 2 || (i === 1 && index === cards.length - 1) || (i === 0 && index === cards.length - 2)) {
            className = 'card card--next2';
          } else if (i === index - 2 || (i === cards.length - 1 && index === 1) || (i === cards.length - 2 && index === 0)) {
            className = 'card card--previous2';
          }

          return (
            <div
              key={item.id}
              className={className}
              onClick={() => handleCardClick(i)}
            >
              <video
                ref={videoRefs.current[i]}
                src={item.video}
                alt={`Video ${i + 1}`}
                width={300}
                height={450}
              />
              <Heart />
              <div>
              <MuteUnmute
                isPlaying={isVideoPlaying}
                onToggleMuteUnmute={() => toggleMuteUnmute(i)}
              />
                </div>
              <PlayPause
                isPlaying={isVideoPlaying}
                onTogglePlayPause={() => togglePlayPause(i)}
              />
              {isCardInCenter(i) && (
                <div className="progress-bar" style={{ width: '232px' }}>
                  <div className="progress-indicator" ref={progressRefs.current[i]}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default StoryContainer;
