import Image from 'next/image';
import instagramImage from '../../../public/instagram.svg';
import CloseIcon from '../../Buttons/CloseIcon';
import { useRouter } from "next/router";

import './style.css';



const Appbar = () => {

  const router = useRouter();

  const handlePageClose = () => {
    router.push("/");
  };

  return (
   
      <div className="app-bar" >
        <div className="instagram-logo" onClick={handlePageClose}>
          <Image src={instagramImage} alt="Instagram Icon" />
        </div>
     
        <CloseIcon/>
      </div>
  
      
      
  
  );
};

export default Appbar;