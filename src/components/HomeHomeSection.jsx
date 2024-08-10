import React from 'react'
import CircleAnimation from './HomePageIcons/CircleAnimation';
import { Link } from 'react-router-dom';

function HomeHomeSection() {
  return (
    <div className='bg-white w-full h-[calc(100dvh-25rem)] pt-4'>
      <div className='max-w-screen-xl mx-auto h-full mt-12'>
        <div className='flex'>
          <div className='basis-2/3'>
            <h4 className='font-semibold text-xl text-gray-800'>Hey, I'm Bharat Sharma</h4>
            <h1 className='text-7xl mt-4 font-bold uppercase' style={{ fontFamily: "DM Serif Display" }}>Front-end <br /> Developer</h1>
            <p className='mt-4 w-2/3 text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas placeat veritatis pariatur est blanditiis quos neque nihil officiis maiores facilis?</p>
            <div className='w-full flex gap-4 mt-16'>
              <Link to={'#'} className='px-4 py-2 bg-gray-800 hover:bg-gray-900 duration-200 text-white rounded-lg font-bold shadow-xl'>Get in Touch</Link>
              <Link to={'#'} className='px-8 py-2 bg-purple-900 hover:bg-purple-950 duration-200 text-white rounded-lg font-bold shadow-xl'>Projects</Link>
            </div>
          </div>
          <div className='basis-1/3'>
            <CircleAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHomeSection
