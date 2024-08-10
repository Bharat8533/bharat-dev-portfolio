import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

function Header() {

  const links = [
    {
      link: 'Home',
      url : '/'
    },
    {
      link: 'About',
      url : '/about'
    },
    {
      link: 'Services',
      url : '/services'
    },
    {
      link: 'Projects',
      url : '/projects'
    }
  ]

  return (
    <nav className="bg-white w-full border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-16">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="logo self-center text-2xl font-semibold whitespace-nowrap tracking-tighter">Bharat</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white w-10 h-10 bg-purple-900 hover:bg-purple-800 focus:outline-none font-medium rounded-full flex items-center justify-center text-2xl ">
            <FaWhatsapp />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full h-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col items-center
           md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white h-full">
            {
              links.map((link, index) => {
                return (
                  <li key={index} className={({ isActive }) => `h-full flex justify-center items-center ${isActive ? 'md:border-b border-purple-900' : ''}`}>
                    <NavLink
                      to={link.url}
                      className={({ isActive }) => `block py-2 px-3 md:p-0 ${isActive ? 'text-white md:text-purple-900' : 'text-gray-900 md:hover:text-purple-900'}`}
                      aria-current="page"
                    >
                      {link.link}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
