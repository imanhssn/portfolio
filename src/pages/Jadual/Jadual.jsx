import React from 'react'
import './Jadual.css';
import JadualIcon from '../../assets/Jadual.png';
import { motion } from 'framer-motion';
import NextButton from '../../components/button/NextButton';

export const Jadual = () => {
  return ( 
      <motion.div initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}} transition={{duration: 0.5}} className='portfolio__jadual'>
         <div className='portfolio__jadual-header gradient__cafebook'>
          <div className='portolio__jadual-header_content'>
            <h1>Jadual: Designing the Icon for a Scheduling App</h1>
          </div>
          <div className='portfolio__jadual-header_image'>
            <img src={JadualIcon} alt="jadual" />
          </div>
         </div>
         <div className='portfolio__jadual-info'>
            <h2>The Project</h2>
            <p>For this project, I designed a logo for a scheduling application called "Jadual", which is Malay for Schedule. The logo is a simplified, small and empty schedule meant to signify that is ready to be filled up by the app.</p>
            <div className='portfolio__jadual-info_image'>
              <img src={JadualIcon} alt="jadual" />
            </div>
         </div>
         <NextButton pageUrl='/digibank'/>
      </motion.div> 
  )
}

export default Jadual;