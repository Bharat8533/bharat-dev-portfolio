import React, { createElement, useEffect } from 'react';
import CircleAnimation from './HomePageIcons/CircleAnimation';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Resume from '../assets/BharatResume.pdf'
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

function HomeHomeSection() {
  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '#get-in-touch',
          popover: {
            title: 'Get in Touch',
            description: 'Click here to contact me directly.',
            side: "left",
            align: 'start'
          }
        },
        {
          element: '#download-resume',
          popover: {
            title: 'Download My Resume',
            description: 'Click here to download my latest resume and learn more about my skills and experience.',
            side: "bottom",
            align: 'start'
          }
        }
      ]
    });


    driverObj.drive();
  }, []);

  function handleResumeDownload(){
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'BharatSharma_Resume.pdf';
    link.click();
  }

  function handleCall(){
    const link = document.createElement('a');
    link.href = 'tel:7417-216-376';
    link.click();
  }

  return (
    <div className='relative w-full h-[calc(100dvh-5rem)] pt-4 sm:pt-16'>
      <div className='max-w-screen-xl mx-auto h-full'>
        <div className='flex flex-wrap'>
          <div className='basis-full sm:basis-2/3 order-2 sm:order-1 flex justify-center sm:justify-start flex-col items-center sm:items-start'>
            <h4 className='font-semibold text-sm sm:text-xl text-gray-800' id='name'>Hey, I'm Bharat Sharma</h4>
            <h1 className='text-3xl sm:text-7xl mt-4 font-bold uppercase leading-8 sm:leading-12' style={{ fontFamily: "DM Serif Display" }}>
              <Typewriter className=""
                options={{
                  strings: ['Front-end', 'Back-end', 'Web'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50
                }}
              /> Developer
            </h1>
            <p className='mt-4 w-2/3 text-gray-800 text-center sm:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas placeat veritatis pariatur est blanditiis quos neque nihil officiis maiores facilis?</p>
            <div className='w-full flex flex-wrap justify-center sm:justify-start items-center sm:items-start gap-4 mt-8 sm:mt-16'>
              <button type='button' onClick={handleCall} className='w-2/3 sm:w-auto px-4 py-2 bg-gray-800 hover:bg-gray-900 duration-200 text-white rounded-lg font-bold shadow-xl text-center' id='get-in-touch'>Get in Touch</button>
              <button type='button' onClick={handleResumeDownload} className='w-2/3 sm:w-auto px-8 py-2 bg-purple-900 hover:bg-purple-950 duration-200 text-white rounded-lg font-bold shadow-xl text-center' id='download-resume' download={'BharatSharma_Resume  '}>Download Resume</button>
            </div>
          </div>
          <div className='basis-full sm:basis-1/3 order-1 sm:order-2'>
            <CircleAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHomeSection;
