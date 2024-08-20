import React, { useEffect } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine, RiFacebookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import profileImage from '../../assets/profile-image4.png'


const CircleAnimation = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-8 sm:mb-0'>
      <div className='relative w-40 h-40 sm:h-80 sm:w-80 border-2 border-gray-800 rounded-full flex items-center justify-center overflow-hidden' style={{borderRadius : '55% 40% 59% 41% / 53% 39% 61% 47%' }}>
        <img src={profileImage} className='select-none object-fill translate-y-0' alt="" />
      </div>
      <div className='links w-full flex justify-evenly sm:justify-around mt-4'>
        <Link to={'https://www.instagram.com/imbharat001/'} id='insta' className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center text-xl sm:text-2xl rounded-full shadow-lg items-center bg-gray-800 hover:bg-purple-900 text-white'>
          <FaInstagram />
        </Link>
        <Link to={'https://github.com/Bharat8533'} id="whatsapp" className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center text-xl sm:text-2xl rounded-full shadow-lg items-center bg-gray-800 hover:bg-purple-900 text-white'>
        <FiGithub />
        </Link>
        <Link to={'www.linkedin.com/in/bharat-s8533'} className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center text-xl sm:text-2xl rounded-full shadow-lg items-center bg-gray-800 hover:bg-purple-900 text-white'>
          <RiLinkedinLine />
        </Link>
        <Link to={'https://www.facebook.com/profile.php?id=100028008606694'} className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center text-xl sm:text-2xl rounded-full shadow-lg items-center bg-gray-800 hover:bg-purple-900 text-white'>
          <RiFacebookLine />
        </Link>
      </div>
    </div>
  );
};

export default CircleAnimation;
