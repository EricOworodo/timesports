import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoIosCreate } from 'react-icons/io';
import { LiaListSolid, LiaThListSolid } from 'react-icons/lia';
import { FaUserPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div class='bg-darkPurple text-white px-[30px] py-[100px] w-[100%] h-screen '>
        <div class='flex flex-row gap-2 mb-[5px]'>
          <IoIosCreate class='text-[20px]  ' />
          <NavLink
            to="/createpost"
            onClick={() => setIsHamburgerClicked(false)}
            className=" hover:text-orange"
        >
            Create New Item
          </NavLink>
        </div>

        <div class='flex flex-row gap-2 mb-[5px]'>
          <LiaThListSolid class='text-[20px]  ' />
          <NavLink
            to="/preauthorisedposts"
            onClick={() => setIsHamburgerClicked(false)}
            className=" hover:text-orange"
        >
            Pre-Authorised Posts
          </NavLink>
        </div>

        <div class='flex flex-row gap-2 mb-[5px]'>
          <LiaListSolid class='text-[20px]  ' />
          <NavLink
            to="/posts"
            onClick={() => setIsHamburgerClicked(false)}
            className=" hover:text-orange"
        >
            Posts
          </NavLink>
        </div>

        <div class='flex flex-row gap-2 mb-[5px]'>
          <FaUserPlus class='text-[20px]  ' />
          <NavLink
            to="/createuser"
            onClick={() => setIsHamburgerClicked(false)}
            className=" hover:text-orange"
        >
            Create New User
          </NavLink>
        </div>
        
    </div>
  )
}
