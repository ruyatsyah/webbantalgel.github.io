import React from 'react';
import SearchIcon from '../assets/img/search.png';
import IconCart from '../assets/img/icon_cart.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navlink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Product",
    link: "/",
  },
  {
    title: "Testimoni",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
]
const navregister = [
  {
    title: "Register",
    link: "/",
  },
]

const Navbar = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <nav class="container mx-auto flex items-center justify-between flex-wrap py-[31px] px-5  lg:px-[118px] ">
  <div class="flex items-center flex-shrink-0 text-white mr-[101px]">
    
    <span class="text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">Bantal Gel</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full ml-0 lg:ml-24 block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      {navlink.map((link, index) =>(
      <a onClick={() => navigate('/')} key={index} href={link.link} class="block mt-4 lg:inline-block lg:mt-0 text-[16px] font-normal mr-4 hover:decoration-sky-600">
        {link.title}
      </a>
      ))}
    </div>
    <div className='flex'>
        <button><img src={SearchIcon} className='h-[24px] w-[24px] mt-1 mr-4 lg:inline-block' alt='#' ></img></button>
        <button><img src={IconCart} className='h-[24px] w-[24px] mt-1 mr-4 lg:inline-block' alt='#' ></img></button>
        {navregister.map((link, index) =>(
        <button onClick={() => navigate('/Register')} key={index} href={link.link} className="px-8 py-[8px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
            {link.title}
        </button>
         ))}
    </div>
  </div>
</nav>
  )
}

export default Navbar
