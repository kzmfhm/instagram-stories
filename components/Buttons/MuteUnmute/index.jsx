import React from 'react';
import muteIcon from '../../../public/mute.svg';
import unmuteIcon from '../../../public/unmute.svg'; 
import Image from 'next/image';
import './style.css';

const MuteUnmute = ({ isPlaying, onToggleMuteUnmute }) => {
  return (
    <div className='voice-control' onClick={onToggleMuteUnmute}>
      <Image src={isPlaying ? unmuteIcon : muteIcon} alt={isPlaying ? 'Unmute' : 'Mute'} />
    </div>
  );
}

export default MuteUnmute;
