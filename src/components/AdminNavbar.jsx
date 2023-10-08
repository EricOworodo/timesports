import logo from '../logo.png'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { BiSolidUserCircle } from 'react-icons/bi';
import { reverseList } from "../helpers/helper";
import { useSelector } from 'react-redux'


export default function AdminNavBar() {
  
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
    //   const { accessToken } = useSelector((state) => state.user);
    //   const [userData, setUserData] = useState();
    //   const username = useSelector((state)=> state.user.user.username)
    //   const setData = useSelector((state)=> state.data)
    //   console.log(username)
    //   console.log(setData)
    //   console.log(accessToken)
      //const phone = useSelector((state) => state.member.member.phone)


      return (
        <div class='flex flex-row justify-between'>
            <nav>
                <div
                    className={`flex transition-all duration-500 flex-col-reverse lg:py-[10px]  lg:flex lg:bg-transparent lg:static lg:text-[16px] ${
                    isHamburgerClicked
                        ? "z-10 justify-center text-left bg-white top-0 overflow-y-auto w-[75%] h-[75%] pl-[30px] fixed right-[0%] "
                        : "hidden right-[-100%]"
                    } `}
                >
                    

                    {/* pages navigation */}
                    <ul className="flex-col lg:flex-row flex gap-[10px] lg:gap-[40px] text-deepBlue py-auto lg:text-[16px] ">
                    <li>
                        <NavLink
                        to={"/home"}
                        onClick={() => setIsHamburgerClicked(false)}
                        className="hover:text-sandyYellow"
                        >
                        Homepage
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to={"/admindashboard"}
                        onClick={() => setIsHamburgerClicked(false)}
                        className="hover:text-sandyYellow"
                        >
                        Admin Dashboard
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                        to="/adminpost"
                        onClick={() => setIsHamburgerClicked(false)}
                        className="hover:text-sandyYellow"
                        >
                        Create Post
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to={"/posts"}
                        onClick={() => setIsHamburgerClicked(false)}
                        className="hover:text-sandyYellow"
                        >
                        Posts
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to={"/preauthorisedposts"}
                        onClick={() => setIsHamburgerClicked(false)}
                        className="hover:text-sandyYellow"
                        >
                        Pre-Authorized Posts
                        </NavLink>
                    </li>

                    </ul>

                </div>

                {/* hamburger menu icon */}
                <div
                onClick={handleClickedHamburger}
                className={`mt-[30px] ml-8 cursor-pointer top-0 lg:hidden ${
                    isHamburgerClicked ? "z-20 fixed" : "absolute"
                }`}
                >
                <div
                    className={`h-1 w-[27px] bg-deepBlue  duration-500 ${
                    isHamburgerClicked
                        ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] "
                        : ""
                    } `}
                ></div>
                <div
                    className={`h-1 w-[27px] bg-deepBlue mt-2 duration-500 ${
                    isHamburgerClicked
                        ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
                        : ""
                    }`}
                ></div>
                <div
                    className={`h-1 w-[27px] bg-deepBlue mt-2 duration-500 ${
                    isHamburgerClicked
                        ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
                        : ""
                    }`}
                ></div>
            </div>
        </nav>
        <div class='flex flex-row text-white pt-[10px] ml-[30px]'>
                    <h1 class='text-[30px] mr-[10px]'><BiSolidUserCircle /></h1>
                   {/* {username} */}
                </div>
    </div>
        
    
      );
    };
