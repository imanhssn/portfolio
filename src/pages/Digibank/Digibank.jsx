import React from 'react';
import './Digibank.css';
import {Digibank, DigibankPersona, DigibankW1, DigibankW2, DigibankW3, DigibankW4, DigibankW5, DigibankM1, DigibankM2, DigibankM3, DigibankM4, DigibankM5 } from './imports'
import { motion } from 'framer-motion';
import NextButton from '../../components/button/NextButton';


export const Dreams = () => {
  return (
    <motion.div initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}} transition={{duration: 0.5}} className='portfolio__digibank'>
       <div className='portfolio__digibank-header gradient__digibank'>
        <div className='portolio__digibank-header_content'>
          <h1>Digibank: Financial services at the tip of your finger</h1>
        </div>
        <div className='portfolio__digibank-header_image'>
          <img src={Digibank} alt="digibank" />
        </div>
       </div>
       <div className='portfolio__digibank-info'>
          <div className='portfolio__digibank-info_content'>
            <div className='portfolio__digibank-info_about'>
              <h2>The Project</h2>
              <p>As we move into the fourth Industrial Revolution, most financial institution are moving their services online to make it more convenient for their customers. Digibank is a 100% online banking platform that is meant to challenge the traditional financial management system. It is a platform that allows users to access all financial services (from creating a new account all the way to applying for loans) on a single powerful application.</p>
            </div>
            <div className='portfolio__digibank-info_problem'>
              <h2>The Problem</h2>
              <p>While many financial services already have incredible online banking applications, many of their services still require customers to head over to a physical bank. Services such as opening a new bank account, applying for a loan, cancelling your insurance policy. This can be incredibly inconvenient as banks are only open during working hours when people are - well, working. Even if individuals are able to set aside some time for a quick visit, most of the time, the visit is unfortunately not very quick. Customers have to deal with traffic, look for parking and wait a terribly long queue just to speak to a Bank teller. Digibank aims to save all that time and hassle and make all banking services 100% online.</p>
            </div>
            <div className='portfolio__digibank-info_solution'>
              <h2>The Solution</h2>
              <p>Digibank aims to make financial services quick and easy to aid the underserved community. It provides a user-friendly and intuitive process of creating a bank account and accessing all the services of a bank online. The interface aims to allow secure financial transactions and ease of access to all individuals from different walks of life, including those who are not very tech savvy.</p>
            </div>
            <div className='portfolio__digibank-info_empathy'>
              <h2>Understanding the Users</h2>
              <h3>Persona</h3>
              <div className='portfolio__digibank-info_empathy-image'>
                <img src={DigibankPersona} alt="persona" />
              </div>
              <p>To create reliable and realistic representations of our users, we created a persona. Jack is an engineer, married with three kids and working two jobs to support his family. He wants to apply for a loan to buy a house but he doesn't have any time to head to the bank.</p>
            </div>
            <div className='portfolio__digibank-info_design'>
              <h2>Starting the Design</h2>
              <h3>Wireframe</h3>
              <div className='portfolio__digibank-info_design-image'>
                <img src={DigibankW1} alt="wireframe 1" />
                <img src={DigibankW2} alt="wireframe 2" />
                <img src={DigibankW3} alt="wireframe 3" />
                <img src={DigibankW4} alt="wireframe 4" />
                <img src={DigibankW5} alt="wireframe 5" />
              </div>
              <p>These were the digital wireframes created on Figma to provide a the skeletal framework of the application.</p>
            </div>
            <div className='portfolio__digibank-info_test'>
              <h3>Testing The Wireframe</h3>
              <p>A usability test was conducted to further correct the designs and to ensure the designs were intuitive and user-friendly. Here are the insights found:</p>
               <div className='portfolio__digibank-info-insights'>
                <div className='portfolio__digibank_info_insights1'>
                    <h4>Information</h4>
                    <p>Based on the theme that for most users, it’s difficult to look for their account details, an insight is; users need more information on the homepage</p>
                  </div>
                  <div className='portfolio__digibank_info_insights2'>
                    <h4>Confirmation</h4>
                    <p>Based on the theme that: for most users, it’s difficult to confirm their financial transaction, an insight is users need a confirmation page to make sure details of their transaction is correct.</p>
                  </div>
                  <div className='portfolio__digibank_info_insights3'>
                    <h4>Login</h4>
                    <p>Based on the theme that: for most users, it’s inconvenient to log in, an insight is users need an easier method to log into their account</p>
                  </div>
               </div>
            </div>
            <div className='portfolio__digibank-info_mockup'>
              <h2>Refining the Design</h2>
              <h3>Mockups</h3>
              <div className='portfolio__digibank-info_mockup-image'>
                <img src={DigibankM1} alt="mockup 1" />
                <img src={DigibankM2} alt="mockup 2" />
                <img src={DigibankM3} alt="mockup 3" />
                <img src={DigibankM4} alt="mockup 4" />
                <img src={DigibankM5} alt="mockup 5" />
              </div>
              <p>These were the mockups designed for application.</p>
            </div>
            <div className='portfolio__digibank-info_about'>
              <h2>Going Forward</h2>
              <p>The idea of a fully online bank can be daunting but it is time for Malaysia to also technologically evolve alongside countries like Germany, the United Kingdom, Netherlands and many more who have adopted a fully digital bank. This will be so convenient for users and allow them to access the financial services they otherwise wouldn't have been able to.</p>
            </div>
          </div>
       </div>
       <NextButton pageUrl='/cafebook'/>
    </motion.div> 
  )
}

export default Dreams;