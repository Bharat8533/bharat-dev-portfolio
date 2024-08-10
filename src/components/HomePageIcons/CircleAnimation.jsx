import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine, RiFacebookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CircleAnimation = () => {
  return (
    <div>
      <div className='relative h-80 w-80 border-4 border-purple-900 rounded-full flex items-center justify-center'>
        hello
      </div>
      <div className='w-full flex justify-around mt-4'>
        <Link to={'#'} className='w-12 h-12 flex justify-center text-2xl rounded-lg shadow-lg items-center bg-purple-900 hover:bg-purple-950 text-white'>
          <FaInstagram />
        </Link>
        <Link to={'#'} className='w-12 h-12 flex justify-center text-2xl rounded-lg shadow-lg items-center bg-purple-900 hover:bg-purple-950 text-white'>
          <FaWhatsapp />
        </Link>
        <Link to={'#'} className='w-12 h-12 flex justify-center text-2xl rounded-lg shadow-lg items-center bg-purple-900 hover:bg-purple-950 text-white'>
          <RiLinkedinLine />
        </Link>
        <Link to={'#'} className='w-12 h-12 flex justify-center text-2xl rounded-lg shadow-lg items-center bg-purple-900 hover:bg-purple-950 text-white'>
          <RiFacebookLine />
        </Link>
      </div>
    </div>
  );
};

export default CircleAnimation;
