import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import './Navbar.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { RiNewspaperLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { SiGmail }  from 'react-icons/si';

const Menu = () => (
  <>
    <motion.p whileHover={{scale: 1.2, originX: 0, color: '#D04F2C', transition: {type: 'spring', stiffness: 500}}}><a href='/#home'>Home</a></motion.p>
    <motion.p whileHover={{scale: 1.2, originX: 0, color: '#D04F2C', transition: {type: 'spring', stiffness: 500}}}><a href='/#about'>About</a></motion.p>
    <motion.p whileHover={{scale: 1.2, originX: 0, color: '#D04F2C', transition: {type: 'spring', stiffness: 500}}}><a href='/#skills'>Skills</a></motion.p>
    <motion.p whileHover={{scale: 1.2, originX: 0, color: '#D04F2C', transition: {type: 'spring', stiffness: 500}}}><a href='/#work'>Projects</a></motion.p>
  </>
)

const boxAnimation = {
  key: "box",
  initial: {y: 0, opacity: 0, scale: 0.5},
  animate: {y: 0, opacity: 1, scale: 1},
  exit: {y: 0, opacity: 0, scale: 0.5},
  transition: {duration: 0.2, ease: 'easeOut'}
}

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <motion.div initial={{opacity: 1, scale: 1}} animate={{opacity: 0, scale: 1}} transition={{delay: 5, duration: 0.5, ease: 'easeOut'}} whileHover={{scale: 1, opacity: 1, transition: {duration: 0.5, ease: 'easeOut'}}} className='portfolio__navbar-links_container'>
          <Menu />
        </motion.div>
      </div>
      <div className='portfolio__navbar-menu'>
        {toggleMenu 
          ? <HiMenuAlt4 color='#000' size={27} onClick={() => setToggleMenu(false)}/>
          : <HiMenuAlt4 color='#000' size={27} onClick={() => setToggleMenu(true)}/>
        }
        <AnimatePresence>
          {toggleMenu && (
            <motion.div {...boxAnimation} className='portfolio__navbar-menu_container'>
              <div className='portfolio__navbar-menu_container-links'>
                <Menu />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='portfolio__navbar-socmed'>
        <div className='portfolio__navbar-socmed_links'>
          <div className='portfolio__navbar-socmed_links-one'>
              <p><a href='https://www.linkedin.com/in/nurul-iman-hassan/'>LinkedIn</a></p><FaLinkedin size={30}/>
          </div>
          <div className='portfolio__navbar-socmed_links-two'>
              <p><a href='https://github.com/imanhssn'>GitHub</a></p><BsGithub size={30}/>
          </div>
          <div className='portfolio__navbar-socmed_links-three'>
              <p><a href='mailto: imanhssn@gmail.com'>Mail</a></p><SiGmail size={30}/>
          </div>
          <div className='portfolio__navbar-socmed_links-four'>
              <p><a href='https://docs.google.com/document/d/10UCrFF5Z9aXozCS_WcL2XfucBN5jWbLLlB77NW8L4PQ/edit?usp=sharing'>Resume</a></p><RiNewspaperLine size={30}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar;