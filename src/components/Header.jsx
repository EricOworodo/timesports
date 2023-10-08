import React from 'react'
import NavBar from './NavBar'
import logo from '../logo.png'
import { BiSolidUserCircle } from 'react-icons/bi';


export default function Header() {
  return (
    <div class='flex flex-row bg-white border-[2px] border-style-solid border-gray2 text-deepBlue h-[70px]'>
      <div class='flex w-[200px] h-[50px] lg:w-[300px] lg:h-[50px] mt-[10px] lg:mt-[10px] ml-[10px] my-auto  mt-[0px]  lg:pl-[100px]' >
      <img src={logo} alt="logo" />
    </div>   
      <div class='flex flex-row justify-center mx-auto lg:w-[75%] lg:mt-[10px]'>
        <NavBar />       
      </div>
    </div>
  )
}
