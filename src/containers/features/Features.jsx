import React from 'react';
import './Features.css';
import { Work } from '../../components'
import { work01, work02, work03, work04 } from './imports';
import {motion} from 'framer-motion';

const entranceAnimation = {
  key: "enter",
  initial: {y: 0, opacity: 0, scale: 0.5},
  animate: {y: 0, opacity: 1, scale: 1},
  transition: {duration: 1, ease: 'easeOut'}
}


const Features = () => {
  return (
    <div className='portfolio__feature section__padding' id='work'>
      <div className='portfolio__feature-heading'>
        <motion.h1 {...entranceAnimation}>Projects</motion.h1>
        <motion.h2 {...entranceAnimation}>A few in-depth case studies from product strategy and ideation to prototyping, user testing and the final product and other design work.</motion.h2>
      </div>
      <div className='portfolio__feature-container'>
        <div className='portfolio__feature-container_cards'>
          <Work imgUrl={work01} title='Digital Banking App' pageUrl='/digibank'/>
          <Work imgUrl={work02} title='Cafe Reversation Platform' pageUrl='/cafebook'/>
          <Work imgUrl={work03} title='Student Donation Drive Website' pageUrl='/dreams'/>
          <Work imgUrl={work04} title='Jadual' pageUrl='/jadual'/>
        </div>
      </div>
    </div>
  )
}

export default Features