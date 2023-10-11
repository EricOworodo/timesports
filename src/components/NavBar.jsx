import logo from '../logo.png'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react'




export default function NavBar() {
  
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

        <nav>
          <div
            className={`flex transition-all duration-500 flex-col-reverse lg:py-[10px]  lg:flex lg:bg-transparent lg:static lg:text-[16px] ${
              isHamburgerClicked
                ? "z-10 justify-center text-left bg-white top-[0px]  w-[75%] h-[100%] pl-[30px] fixed right-[0%] "
                : "hidden right-[-100%]"
            } `}
          >
            

            {/* pages navigation */}
            <ul className="flex-col lg:flex-row flex gap-[10px] lg:gap-0 py-auto lg:text-[15px] lg:w-[100%] ">
              <li>
                <NavLink
                  to={"/"}
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white active:bg-red px-[30px] py-[10px] active:text-white "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white"
                >
                  Football
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white "
                > 
                  Basketball
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red  px-[30px] py-[10px] hover:text-white"
                >
                  Tennis
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white"
                >
                  Boxing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white "
                >
                  Wrestling
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white"
                >
                  Athletics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white"
                >
                  Golf
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsHamburgerClicked(false)}
                  className="hover:bg-red px-[30px] py-[10px] hover:text-white"
                >
                  Life Style
                </NavLink>
              </li>
            </ul>
          </div>

        {/* hamburger menu icon */}
        <div
          onClick={handleClickedHamburger}
          className={`mt-[20px] ml-[0px] cursor-pointer top-0 lg:hidden ${
            isHamburgerClicked ? "z-20 fixed" : "absolute"
          }`}
        >
          <div
            className={`h-1 w-[35px] bg-deepBlue mt-2 duration-500 ${
              isHamburgerClicked
                ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] "
                : ""
            } `}
          ></div>
          <div
            className={`h-1 w-[35px] bg-deepBlue mt-2 duration-500 ${
              isHamburgerClicked
                ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
                : ""
            }`}
          ></div>
           <div
            className={`h-1 w-[35px] bg-deepBlue mt-2 duration-500 ${
              isHamburgerClicked
                ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
                : ""
            }`}
          ></div>
         
        </div>
    </nav>
    
      );
    };
