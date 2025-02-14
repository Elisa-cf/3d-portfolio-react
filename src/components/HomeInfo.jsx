import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'> {text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I'm <span className='font-semibold'>Elisa</span> 👋 <br />A Frontend
      Engineer from Spain
    </h1>
  ),
  2: (
    <InfoBox
      text='3 years of experience creating fast and user-friendly interfaces for international companies'
      link='/about'
      btnText='learn more'
    />
  ),
  3: (
    <InfoBox
      text='Contributed to successful projects for companies and personal ventures. Curious about the impact?'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text='Need a project done or looking for a dev? I’m just a few keystrokes away'
      link='/contanct'
      btnText='Let’s talk!'
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
