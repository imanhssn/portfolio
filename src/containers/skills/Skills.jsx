import React from 'react';
import './Skills.css';
import { SkillAdobeXD, SkillCPP, SkillCSS, SkillFigma, SkillHTML, SkillJavascript, SkillNode, SkillReact } from './imports';
import { motion } from 'framer-motion';
import {useState} from 'react';

const entranceAnimation = {
  key: "enter",
  initial: {y: 0, opacity: 0, scale: 0.5},
  animate: {y: 0, opacity: 1, scale: 1},
  transition: {duration: 1, ease: 'easeOut'}
}

const SkillImg = ({imgUrl, altValue, title}) => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='portfolio__skills-container'>
      <motion.img whileHover={{scale: 2, transition: {type: 'spring', stiffness: 500}}} src={imgUrl} alt={altValue} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      {isHovering && (
        <motion.div initial={{y: 0, opacity: 0, scale: 0.5}} animate= {{y: 0, opacity: 1, scale: 1, transition: {type: 'spring', stiffness: 500} }} className='portfolio__skills-container-content'>
          <h2>{title}</h2>
        </motion.div> 
      )}
    </div>
  )
}

const Skills = () => {

  

  return (
    <div className='portfolio__skills' id='skills'> 
      <div className='portfolio__skills-heading'>
        <motion.h1 {...entranceAnimation}>Skills</motion.h1>
      </div>
      <motion.div initial={{y: 0, opacity: 0, scale: 0.5}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 1, ease: 'easeOut'}} className='portfolio__skills-icon'>
        <SkillImg imgUrl={SkillJavascript} altValue='Javascript' title='Javascript'/>
        <SkillImg imgUrl={SkillHTML} altValue='HTML' title='HTML'/>
        <SkillImg imgUrl={SkillCSS} altValue='CSS' title='CSS'/>
        <SkillImg imgUrl={SkillReact} altValue='React' title='React'/>
        <SkillImg imgUrl={SkillNode} altValue='Node' title='Node'/>
        <SkillImg imgUrl={SkillFigma} altValue='Figma' title='Figma'/>
        <SkillImg imgUrl={SkillAdobeXD} altValue='Adobe XD' title='Adobe XD'/>
        <SkillImg imgUrl={SkillCPP} altValue='C++' title='C++'/>
      </motion.div>
    </div>
  )
}

export default Skills