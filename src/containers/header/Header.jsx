import React from 'react';
import './Header.css';
import Hero from '../../assets/Hero.png';
import {motion} from 'framer-motion';

const headerAnimation = {
  key: "header",
  initial: {y: 0, opacity: 0, scale: 0.5},
  animate: {y: 0, opacity: 1, scale: 1},
  transition: {duration: 1, ease: 'easeOut'}
}


const Header = () => {
  return (
    <div className='portfolio__header' id='home'>
      <div className='portfolio__header-content'>
        <motion.h1 initial={{originX: 0, y: 0, opacity: 0, scale: 0.5}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 1, ease: 'easeOut'}} whileHover={{scale: 1.2, originX: 0, color: '#D04F2C', transition: {type: 'spring', stiffness: 500}}} >
          Iman Hassan
        </motion.h1>
        <motion.p initial={{originX: 0, y: 0, opacity: 0, scale: 0.5}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 1, ease: 'easeOut'}}>I love to design, code and turn creative and imaginative ideas into logic.</motion.p>
      </div>
      <motion.div {...headerAnimation} className='portfolio__header-image'>
        <img src={Hero} alt="logo" />
      </motion.div>
    </div>
  )
} 

export default Header