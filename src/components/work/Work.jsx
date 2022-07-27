import React from 'react';
import './Work.css';
import {useState} from 'react';
import {motion} from 'framer-motion';

const entranceAnimation = {
  key: "enter",
  initial: {y: 0, opacity: 0, scale: 0.5},
  animate: {y: 0, opacity: 1, scale: 1},
  transition: {duration: 1, ease: 'easeOut'}
}

const Work = ({imgUrl, title, pageUrl}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='portfolio__features-container_work'>
      <motion.div {...entranceAnimation} whileHover={{originY: 0, opacity: 0, transition: {duration: 0.2, ease: 'easeIn'}}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='portfolio__features-container_work-image'>
      <a href={pageUrl}><img src={imgUrl} alt="work image" /></a>
      </motion.div> 
      {isHovering && (
        <div className='portfolio__feature-container-content'>
          <h2>{title}</h2>
        </div> 
      )}
    </div>
  )
}

export default Work