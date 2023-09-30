import React from 'react'
import closeImage from '../../../public/close.svg';
import './style.css';
import { useRouter } from "next/router";
import Image from 'next/image';

const CloseIcon = () => {
    const router = useRouter();

    const handlePageClose = () => {
      router.push("/");
    };
  return (
    <div className="close-button" onClick={handlePageClose}>
          <Image src={closeImage} alt="Close" width={32} height={32} />
        </div>
  )
}

export default CloseIcon