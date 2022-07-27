import React from 'react';
import './Dreams.css';
import {HeroDreams, DreamsPersona, DreamsWF1, DreamsWF2, DreamsWFPC1, DreamsWFPC2, DreamsMockup1, DreamsMockup2, DreamsMockup3, DreamsMockup4, DreamsMockup5, DreamsMockup6 } from './imports'
import { motion } from 'framer-motion';
import NextButton from '../../components/button/NextButton';


export const Dreams = () => {
  return (
    <motion.div initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}} transition={{duration: 0.5}} className='portfolio__dreams'>
       <div className='portfolio__dreams-header gradient__dreams'>
        <div className='portolio__dreams-header_content'>
          <h1>Dreams: A Donation Site for Underprivileged Students</h1>
        </div>
        <div className='portfolio__dreams-header_image'>
          <img src={HeroDreams} alt="dreams" />
        </div>
       </div>
       <div className='portfolio__dreams-info'>
          <div className='portfolio__dreams-info_content'>
            <div className='portfolio__dreams-info_about'>
              <h2>The Project</h2>
              <p>Dreams is a donation site aim to financially help underprivileged children get through school and university. The site collects donations from users and offers scholarship, loans and mentorship for students.</p>
            </div>
            <div className='portfolio__dreams-info_problem'>
              <h2>The Problem</h2>
              <p>The main objective of any donation site is to attract donors and collect donations to aid more people in need. However, in this day and age, with the rise viral internet scams and the sensationalisation of conmen (see: Tinder Swindler), potential donors are a lot more risk averse and have set higher standards when looking for trustworthy charities. That process can be incredibly time-consuming. On top of that, donors tend to hesitate when they suspect a lack of transparency on charity sites. </p>
            </div>
            <div className='portfolio__dreams-info_solution'>
              <h2>The Solution</h2>
              <p>Dreams is a site that aims to make giving to charity convenient and effortless. It provides a seamless. user-friendly and intuitive process of donating money. The interface aims to allow more transparency and ease of access to all the information provided by the charity.</p>
            </div>
            <div className='portfolio__dreams-info_empathy'>
              <h2>Understanding the Users</h2>
              <h3>Persona</h3>
              <div className='portfolio__dreams-info_empathy-image'>
                <img src={DreamsPersona} alt="persona" />
              </div>
              <p>To create reliable and realistic representations of our users, we created a persona. Her name is Mary. She is a successful entrepreneur who was a victim of internet scam. She is very wary of giving money to websites. However, she still wants to give back to charity and help out underprivileged children.</p>
            </div>
            <div className='portfolio__dreams-info_design'>
              <h2>Starting the Design</h2>
              <h3>Wireframe</h3>
              <div className='portfolio__dreams-info_design-image'>
                <img src={DreamsWF1} alt="wireframe 1" />
                <img src={DreamsWF2} alt="wireframe 2" />
                <img src={DreamsWFPC1} alt="wireframe 3" />
                <img src={DreamsWFPC2} alt="wireframe 4" />
              </div>
              <p>These were the digital wireframes (for both mobile and PC) created on Figma to provide a the skeletal framework of the application.</p>
            </div>
            <div className='portfolio__dreams-info_test'>
              <h3>Testing The Wireframe</h3>
              <p>A usability test was conducted to further correct the designs and to ensure the designs were intuitive and user-friendly. Here are the insights found:</p>
               <div className='portfolio__dreams-info-insights'>
                <div className='portfolio__dreams_info_insights1'>
                    <h4>Information</h4>
                    <p>Based on the theme that for most users, it’s difficult for users to find information regarding the charity, an insight is; users need a more accessible view of the charity's information.</p>
                  </div>
                  <div className='portfolio__dreams_info_insights2'>
                    <h4>Confirmation</h4>
                    <p>Based on the theme that: for most users, it’s difficult to confirm their financial transaction, an insight is users need a confirmation page to make sure details of their transaction is correct.</p>
                  </div>
                  <div className='portfolio__dreams_info_insights3'>
                    <h4>Convenience</h4>
                    <p>Based on the theme that for most users, it’s difficult to transfer the donation, an insight is; users need a more convenient way to make transactions.</p>
                  </div>
               </div>
            </div>
            <div className='portfolio__dreams-info_mockup'>
              <h2>Refining the Design</h2>
              <h3>Mockups</h3>
              <h4>Desktop</h4>
              <div className='portfolio__dreams-info_mockup-image'>
                <img src={DreamsMockup1} alt="mockup 1" />
                <img src={DreamsMockup2} alt="mockup 2" />
                <img src={DreamsMockup3} alt="mockup 3" />
                <img src={DreamsMockup4} alt="mockup 4" />
              </div>
              <p>These were the mockups designed for PC.</p>
              <h4>Mobile</h4>
              <div className='portfolio__dreams-info_mobile-image'>
                <img src={DreamsMockup5} alt="mockup 5" />
                <img src={DreamsMockup6} alt="mockup 6" />
                <p>These were the mockups designed for mobile.</p>
              </div>
            </div>
            <div className='portfolio__dreams-info_about'>
              <h2>Going Forward</h2>
              <p>Giving money to charity can be daunting, especially in today's world where Internet scams are rampant. Creating a user friendly, visually pleasing site can increase the credibility of the donation site and subsequently, invite more people to become donors. </p>
            </div>
          </div>
       </div>
       <NextButton pageUrl='/jadual'/>
    </motion.div> 
  )
}

export default Dreams;