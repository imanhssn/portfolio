import React from 'react';
import './NextButton.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const NextButton = ({pageUrl}) => {
  return (
    <div>
      <div className='porfolio__button'>
        <div className='portfolio__button-back'>
            <p><a href='/'><AiOutlineArrowLeft size={20}/>Back to Home</a></p>
        </div>
        <div className='portfolio__button-next'>
            <p><a href={pageUrl}>Next Project <AiOutlineArrowRight size={20} /></a></p>
        </div>
      </div>
      <div className='porfolio__small_button'>
        <div className='portfolio__button-back'>
            <p><a href='/'><AiOutlineArrowLeft size={20}/></a></p>
        </div>
        <div className='portfolio__button-next'>
            <p><a href={pageUrl}><AiOutlineArrowRight size={20} /></a></p>
        </div>
      </div>
    </div>
  )
}

export default NextButton