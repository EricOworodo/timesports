import React, {useState} from 'react'
import AdminHeader from '../../components/admn/AdminHeader'
import Sidebar from '../../components/admn/Sidebar'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoIosCreate } from 'react-icons/io';
import { LiaListSolid, LiaThListSolid } from 'react-icons/lia';
import { FaUserPlus } from 'react-icons/fa';


export default function AdminDashboard() {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    
      const handleClickedHamburger = () => {
        setIsHamburgerClicked((preValue) => !preValue);
      };

      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

  return (
    <div>
        <AdminHeader />
        <div class='flex flex-col lg:flex-row bg-gray4 '>
            <div className=' w-[25%] mx-[5px] my-[5px] '>
                <Sidebar />
            </div>
            <div class='flex flex-col lg:flex-row w-[75%] bg-white mx-[25px] gap-6 my-[5px] px-[50px] py-[50px] '>
                <div class='flex flex-row gap-2 px-[20px] h-[50px] pt-[10px] pb-[20px] border-[1px] border-style-solid- border-lightGray rounded-[5px] '>
                    <IoIosCreate class='text-[25px]  ' />
                    <NavLink
                        to="/createpost"
                        onClick={() => setIsHamburgerClicked(false)}
                        className=""
                    >
                        Create New Post
                    </NavLink>
                </div>
                <div class='flex flex-row gap-2 px-[20px] h-[50px] pt-[10px] pb-[20px] border-[1px] border-style-solid- border-lightGray rounded-[5px] '>
                    <LiaThListSolid class='text-[25px]  ' />
                    <NavLink
                    to="/preauthorisedposts"
                    onClick={() => setIsHamburgerClicked(false)}
                    className=""
                >
                    Pre-Authorised Posts
                </NavLink>
                </div>
                <div class='flex flex-row gap-2 px-[20px] h-[50px] pt-[10px] pb-[20px] border-[1px] border-style-solid- border-lightGray rounded-[5px] '>
                    <LiaListSolid class='text-[25px]  ' />
                    <NavLink
                    to="/posts"
                    onClick={() => setIsHamburgerClicked(false)}
                    className=""
                >
                    Posts
                </NavLink>
                </div>
                <div class='flex flex-row gap-2 px-[20px] h-[50px] pt-[10px] pb-[20px] border-[1px] border-style-solid- border-lightGray rounded-[5px] '>
                    <FaUserPlus class='text-[25px]  ' />
                    <NavLink
                    to="/createuser"
                    onClick={() => setIsHamburgerClicked(false)}
                    className=""
                >
                    Create New User
                </NavLink>
                </div>
               
            </div>
        </div>
       

    </div>
  )
}
