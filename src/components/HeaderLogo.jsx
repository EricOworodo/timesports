
import logo from '../logo.png'
import { NavLink } from "react-router-dom";
import { BiSolidUserCircle } from 'react-icons/bi';


import React from 'react'

export default function HeaderLogo() {
  return (
<div class=' flex flex-row bg-white h-[90px] my-auto lg:pb-[20px]  '>
  <div class='flex flex-row lg:w-[75%] my-auto '>   
    <div class='flex w-[80px] h-[60px] lg:w-[300px] lg:h-[70px] ml-[10px] my-auto  mt-[0px] lg:mt-[10px] lg:pl-[100px]' >
      <img src={logo} alt="logo" />
    </div>         
    <div class='text-[25px] font-bold text-deepBlue  mt-[10px] lg:mt-[20px] ml-[-10px] lg:ml-[-110px] '>
      TimeSports
    </div>
  </div>
</div>
    
  )
}

