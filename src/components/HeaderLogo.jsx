
import logo from '../logo.png'
import { NavLink } from "react-router-dom";


import React from 'react'

export default function HeaderLogo() {
  return (
<div class=' flex flex-row justify-between content-center lg:pt-[20px] lg:pb-[20px] '>
    <li class='flex w-[400px] lg:pl-[100px]' >
        <NavLink
          to={"/home"}
          onClick={() => setIsHamburgerClicked(false)}
        >
          <img src={logo} alt="logo" />
        </NavLink>
      </li>
    
</div>
  )
}

