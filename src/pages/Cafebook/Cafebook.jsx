import React from 'react';
import './Cafebook.css';
import {Cafebook1, CafebookPersona, CafebookPW1, CafebookPW2, CafebookPW3, CafebookW1, CafebookW2, CafebookW3, CafebookW4, CafebookW5, CafebookUJ, CafebookM1, CafebookM2, CafebookM3, CafebookM4, CafebookM5, CafebookM6, CafebookM7, CafebookM8, CafebookM9, CafebookM10 } from './imports'
import { motion } from 'framer-motion';
import NextButton from '../../components/button/NextButton';


export const Dreams = () => {
  return (
    <motion.div initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}} transition={{duration: 0.5}} className='portfolio__cafebook'>
       <div className='portfolio__cafebook-header gradient__cafebook'>
        <div className='portolio__cafebook-header_content'>
          <h1>Cafebook: An Online Reservation System for a Cafe</h1>
        </div>
        <div className='portfolio__cafebook-header_image'>
          <img src={Cafebook1} alt="cafebook" />
        </div>
       </div>
       <div className='portfolio__cafebook-info'>
          <div className='portfolio__cafebook-info_content'>
            <div className='portfolio__cafebook-info_about'>
              <h2>The Project</h2>
              <p>The culture surrounding Coffee and Cafes has dated back to the 16th Century and it is still prominent until this day. Cafes are not only seen as social hubs but also places to work, share ideas and a centre for Art. Cafebook is a Cafe Reservation Application, aimed to help Cafe-hoppers book their favourite table at a Cafe and pre-order their drinks and food.</p>
            </div>
            <div className='portfolio__cafebook-info_problem'>
              <h2>The Problem</h2>
              <p>The rise of this culture also comes with a downside. Often, people head to their favourite Cafes and are disappointed to see a long queue, or that their favourite table has been taken. They either have wait for another hour or sit at a non-Instagramable spot with little sunlight next to the Toilet entrance. Some people have accesibility needs (i.e. individuals in wheelchairs) and would like to be seated in the more accessible area of the Cafe and find that their favourite cannot fulfill their accessibility needs. Customers are then deterred to ever come to the Cafe again, even if the cafe makes the best Espresso. Cafebook is an Cafe Reservation application, designed to allow customers to avoid this kind of problem.</p>
            </div>
            <div className='portfolio__cafebook-info_solution'>
              <h2>The Solution</h2>
              <p>Cafebook is an app that aims to make Cafe-hopping easier and convenient. It provides a seamless and intuitive journey for users to book their dates, pick their seats and order food ahead of time.</p>
            </div>
            <div className='portfolio__cafebook-info_empathy'>
              <h2>Understanding the Users</h2>
              <h3>Persona</h3>
              <div className='portfolio__cafebook-info_empathy-image'>
                <img src={CafebookPersona} alt="persona" />
              </div>
              <p>To create reliable and realistic representations of our users, we created a persona. Her name is Emily. Emily is a fresh graduate who just started her first job and is now overwhelmed by how busy and demanding her new occupation is. She loves coffee and pastries. During the weekends, she and her friends love to hang out at the local coffee shop and catch up!</p>
              <h3>User Journey</h3>
              <div className='portfolio__cafebook-info_empathy-image'>
                <img src={CafebookUJ} alt="persona" />
              </div>
              <p>A User Journey was created to see the complete pathway of how a user would complete their reservation.</p>
            </div>
            <div className='portfolio__cafebook-info_design'>
              <h2>Starting the Design</h2>
              <h3>Paper Wireframe</h3>
              <div className='portfolio__cafebook-info_design-image'>
                <img src={CafebookPW1} alt="paper wireframe 1" />
                <img src={CafebookPW2} alt="paper wireframe 2" />
                <img src={CafebookPW3} alt="paper wireframe 3" />
              </div>
              <p>These were the paper wireframes hand-drawn to provide a basic idea of the application.</p>
              <h3>Digital Wireframe</h3>
              <div className='portfolio__cafebook-info_wireframe-image'>
                <img src={CafebookW1} alt="wireframe 1" />
                <img src={CafebookW2} alt="wireframe 2" />
                <img src={CafebookW3} alt="wireframe 3" />
                <img src={CafebookW4} alt="wireframe 4" />
                <img src={CafebookW5} alt="wireframe 5" />
              </div>
              <p>These were the digital wireframes created on Figma to provide a the skeletal framework of the application.</p>
            </div>
            <div className='portfolio__cafebook-info_test'>
              <h3>Testing The Wireframe</h3>
              <p>A usability test was conducted to further correct the designs and to ensure the designs were intuitive and user-friendly. Here are the insights found:</p>
               <div className='portfolio__cafebook-info-insights'>
                <div className='portfolio__cafebook_info_insights1'>
                    <h4>Time & Date</h4>
                    <p>Based on the theme that for most users, it’s difficult for users to choose a time and date, an insight is; users need a simpler way to pick and choose the date and time of visit.</p>
                  </div>
                  <div className='portfolio__cafebook_info_insights2'>
                    <h4>Order</h4>
                    <p>Based on the theme that: for most users, it’s difficult to create their own personalised order, an insight is users need an easier way to customize and add more orders.</p>
                  </div>
                  <div className='portfolio__cafebook_info_insights3'>
                    <h4>Information</h4>
                    <p>Based on the theme that for most users, it’s difficult to find information about the cafe, an insight is; users need more information about the cafes that they are visiting.</p>
                  </div>
               </div>
            </div>
            <div className='portfolio__cafebook-info_mockup'>
              <h2>Refining the Design</h2>
              <h3>Mockups</h3>
              <h4>Desktop</h4>
              <div className='portfolio__cafebook-info_mockup-image'>
                <img src={CafebookM1} alt="wireframe 1" />
                <img src={CafebookM2} alt="wireframe 2" />
                <img src={CafebookM3} alt="wireframe 3" />
                <img src={CafebookM4} alt="wireframe 4" />
                <img src={CafebookM5} alt="wireframe 5" />
                <img src={CafebookM6} alt="wireframe 6" />
                <img src={CafebookM7} alt="wireframe 7" />
                <img src={CafebookM8} alt="wireframe 8" />
                <img src={CafebookM9} alt="wireframe 9" />
                <img src={CafebookM10} alt="wireframe 10" />
              </div>
              <p>These were the mockups designed after the usability test.</p>
            </div>
            <div className='portfolio__cafebook-info_about'>
              <h2>Going Forward</h2>
              <p>There are lots of reasons why people love Cafes - the socialising, the Coffee, the perfect ambiance to to do work. Cafebook aims to make the most out of your experience drinking your favourite coffee and allow you to book the quiet corner in the Cafe, or the Instagramable seat near the windows.</p>
            </div>
          </div>
       </div>
       <NextButton pageUrl='/dreams'/>
    </motion.div> 
  )
}

export default Dreams;