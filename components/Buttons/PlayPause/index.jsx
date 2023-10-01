// PlayPause.jsx
import React from 'react';
import playIcon from '../../../public/play.svg';
import pauseIcon from '../../../public/pause.svg'; 
import Image from 'next/image';
import './style.css';

const PlayPause = ({ isPlaying, onTogglePlayPause }) => {
  return (
    <div className='icon' onClick={onTogglePlayPause}>
      <Image src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
    </div>
  );
}

export default PlayPause;
