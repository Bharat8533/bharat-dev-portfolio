import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';


function About() {

  const skills = [
    {
      name: 'HTML',
      image: 'https://i.pinimg.com/564x/c5/73/ff/c573ff5552d6da9a1d28ec4e27cd1445.jpg'
    },
    {
      name: 'CSS',
      image: 'https://i.pinimg.com/564x/ee/b3/5d/eeb35df1a6739f4cea43ed1cba70bc25.jpg'
    },
    {
      name: 'JavaScript',
      image: 'https://i.pinimg.com/564x/12/ba/c6/12bac607c472dfee8483d057e8515ec2.jpg'
    },
    {
      name: 'Tailwind',
      image: 'https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg'
    },
    {
      name: 'Bootstrap',
      image: 'https://i.pinimg.com/564x/29/37/2a/29372aa493607af0848468d30223ccc6.jpg'
    },
    {
      name: 'jQuery',
      image: 'https://cdn.worldvectorlogo.com/logos/jquery-4.svg'
    },
    {
      name: 'React',
      image: 'https://i.pinimg.com/564x/8e/f5/af/8ef5af1cacebb410d490cbcad4ea85f3.jpg'
    },
    {
      name: 'PHP',
      image: 'https://i.pinimg.com/564x/cd/e1/24/cde124ad6037a985f4cd9b6538c894eb.jpg'
    },
    {
      name: 'MySQL',
      image: 'https://i.pinimg.com/564x/b6/de/7d/b6de7d5e806cb2763f0395867374cae9.jpg'
    },
    {
      name: 'Figma',
      image: 'https://i.pinimg.com/564x/eb/e8/80/ebe880ba05add588e0518ad30d6fe1de.jpg'
    },
    {
      name: 'CodeIgniter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIckH0Gw0_JkB3uaKz68sRoy81bvWu1cn8AQ&s'
    },
    {
      name: 'GitHub',
      image: 'https://i.pinimg.com/564x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg'
    },
    {
      name: 'VSCode',
      image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png'
    }
  ];

  return <>
    <div className='relative w-full h-full sm:h-[calc(100dvh-4.6rem)] pt-4 pb-4'>
      <div className='max-w-screen-xl mx-auto h-full mt-6 flex flex-col justify-center sm:justify-start items-center sm:items-start'>
        <h1 className='text-3xl sm:text-7xl mt-4 font-bold uppercase leading-10 tracking-wide' style={{ fontFamily: "DM Serif Display" }}>About me</h1>
        <p className='mt-4 sm:mt-8 w-full sm:w-4/5 text-justify px-4 sm:px-0 sm:ps-4 sm:border-s-8 sm:border-purple-900 py-2'>    Hi, I'm Bharat Sharma. With over a year of experience as a software developer, I specialize in crafting dynamic and responsive web applications. My expertise spans both front-end and back-end development, enabling me to create seamless user experiences and tackle complex problems. I am passionate about continuous learning and thrive in collaborative environments to turn innovative ideas into reality.
        </p>
        <h2 className='mt-12 text-2xl font-semibold'>Skills</h2>
        <div className='w-full flex flex-wrap gap-4 mt-4 px-4 sm:px-0'>
          {
            skills.map((skill, index) => {
              return (
                <div className='flex justify-center items-center flex-col gap-1 mb-2'>
                  <div key={index} className='h-8 sm:h-12'>
                    <img src={skill.image} className='h-full object-cover' alt={skill.name} />
                  </div>
                  <h2 className='text-xs'>{skill.name}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </>
}

export default About
