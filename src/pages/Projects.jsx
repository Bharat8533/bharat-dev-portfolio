import React, { useState, useRef } from 'react'
import '../components/projects.css'
import horeca from '../assets/projects/horeca.png'
import githubFinder from '../assets/projects/githubFinder.png'
import hotelRadham from '../assets/projects/hotelRadham.png'
import marketing from '../assets/projects/marketing.png'
import brajProperty from '../assets/projects/brajProperty.png'
import weatherApp from '../assets/projects/weatherApp.png'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom'


function Projects() {

  const projects = [
    {
      name: 'Hotel Shree Radham',
      desc: 'Developed a hotel booking website with real-time availability, seamless reservations, and secure payments. The responsive and user-friendly design enhances the booking experience and improves customer engagement.',
      skills: ['html', 'css', 'js', 'jquery', 'php', 'mysql', 'tailwind', 'VS Code', 'github'],
      url: 'https://hotelshreeradham.com/',
      image : hotelRadham,
    },
    {
      name: 'Marketing Moguls',
      desc: 'Developed a marketing website with a responsive design, compelling content, and integrated lead generation tools.',
      skills: ['html', 'css', 'js', 'jquery', 'php', 'mysql', 'tailwind', 'VS Code', 'github'],
      url: 'https://google.com',
      image : marketing,
    },
    {
      name: 'Braj Property',
      desc: 'Developed Braj Property, a real estate website tailored for the Braj Mathura region. The platform features an intuitive search and filter system, detailed property listings with high-quality images, and streamlined inquiry processes. Designed to enhance user experience, Braj Property effectively showcases local real estate opportunities and facilitates seamless property transactions.',
      skills: ['html', 'css', 'js', 'jquery', 'php', 'mysql', 'tailwind', 'VS Code', 'github'],
      url: 'https://www.brajproperty.in/',
      image : brajProperty,
    },
    {
      name: 'Climate',
      desc: 'Developed a weather app that provides real-time weather updates and forecasts. The app features a user-friendly interface, location-based weather information, and detailed forecasts, allowing users to easily check current conditions and plan ahead.',
      skills: ['html', 'css', 'js', 'figma', 'VS Code', 'github'],
      url: 'https://climatechecker.vercel.app/',
      image : weatherApp,
    },
    {
      name: 'Horeca Guardian',
      desc: 'Developed Horeca Guardian, an advanced hotel and restaurant management software that enhances operational efficiency in the hospitality industry. The platform integrates real-time room and table management, guest profiles, inventory tracking, and payment processing into a user-friendly interface with mobile compatibility. Horeca Guardian streamlines workflows and improves customer service, providing a seamless all-in-one solution.',
      skills: ['jquery', 'tailwind', 'codeigniter', 'VS Code', 'github'],
      url: 'https://horecaguardian.com/',
      image : horeca,
    },
    {
      name: 'Account Explorer',
      desc: 'Developed a Account Explorer tool that allows users to search for GitHub profiles by entering a username. The tool provides quick access to profile details and repositories, offering a streamlined way to discover and explore GitHub users.',
      skills: ['html', 'css', 'js', 'figma', 'VS Code', 'github'],
      url: 'https://git-finder-theta.vercel.app/',
      image : githubFinder,
    }
  ]
  return (
    <>
      <div className='w-full h-[calc(100dvh-7rem)] px-2 sm:px-28 py-4 '>
        <div className='content grid grid-cols-1 sm:grid-cols-3 h-full gap-2 sm:-ms-8'>
          {
            projects.map((project, index) => {
              return (<Card project={project} index={index} key={index} />)
            })
          }
        </div>
      </div>
    </>
  )
}

const Card = ({ project, index }) => {
  const [visibility, setVisibility] = useState(false);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { offsetWidth: width, offsetHeight: height } = containerRef.current;
      const { left, top } = containerRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (mouseX - centerX) / (width / 2);
      const deltaY = (mouseY - centerY) / (height / 2);

      const rotateX = -deltaY * 10; // Adjust rotation strength
      const rotateY = deltaX * 10; // Adjust rotation strength

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  };

  const bgColors = {
    html: 'bg-[#ff4b00]',
    css: 'bg-[#1a74ba]',
    js: 'bg-[#e4c023]',
    tailwind: 'bg-[#44a8b2]',
    bootstrap: 'bg-[#7712f6]',
    jquery: 'bg-[#1266a9]',
    react: 'bg-[#7be1fd]',
    php: 'bg-[#6b7eb8]',
    mysql: 'bg-[#f0920f]',
    figma: 'bg-[#1abcfd]',
    codeigniter: 'bg-[#ee4323]',
    github: 'bg-[#000000]',
    'VS Code': 'bg-[#2196f3]'
  }
  
  return (
    <div
      ref={containerRef}
      className='card relative p-1 h-fit mb-4 sm:mb-0 sm:h-full w-full border border-gray-900 parallax-container'
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform('rotateX(0deg) rotateY(0deg)')}
      
    >
      <div
        onMouseOver={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        className='flex flex-col gap-2 rounded-sm p-2 h-full parallax-content'
        style={{ transform }}
      >
        <h2 className='font-bold'><span>{index + 1}. </span>{project.name}</h2>
        <p className='text-xs text-gray-700 text-justify'>{project.desc}</p>
        <p className='text-xs'>
          <div className='flex gap-2 mt-2 flex-wrap'>
            {project.skills.map((skill, index) => {
                return <div key={index} className={`text-white uppercase px-2 rounded-sm text-[10px] ${bgColors[skill]}`}>{skill}</div>
              })}
          </div>
        </p>
        <div className='flex justify-end items-end h-full'>
          <Link to={project.url} className='w-6 h-6 border border-gray-800 rounded-full flex justify-center items-center'>
            <MdArrowOutward className='text-xs' />
          </Link>
        </div>
      </div>
      <div
        onMouseOver={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        className={`duration-500 absolute top-1 right-1 w-4/5 h-auto bg-slate-700 z-50 ${visibility ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={project.image} className='h-full w-full object-cover' alt={project.name} />
      </div>
    </div>
  );
};

export default Projects;