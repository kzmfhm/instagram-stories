import React from 'react'
import './style.css'
import MuteIcon from '../../../public/mute.svg';
import UnmuteIcon from '../../../public/unmute.svg'; 
import Image from 'next/image';

const MuteUnmute = ({onPlayMute, onPlayUnmute}) => {
  return (
    <div className='voice-control'>
        <Image src={MuteIcon} alt="Play" onClick={onPlayMute}/>
        <Image src={UnmuteIcon} alt="Pause" onClick={onPlayUnmute}/>  
    </div>
  )
}

export default MuteUnmute