import logo from '../logo.png'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import DropDown from '../components/DropDown'
import { menuItems } from '../menuItems';
import './navbar.css' 



export default function AdminNavbar() {
  
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
        <div className='flex justify-center '>
          <div class="topnav" id="myTopnav">
              <a href="/home" class="active">Home</a>
              <div class="dropdown1">
                <button class="dropbtn1">football
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content1">
                  <a href="#home">Europe</a>
                  <a href="#">African Leagues</a>
                  <a href="#">NWPL</a>
                  <a href="#">Caf CC</a>
                  <a href="#">Caf CL</a>
                  <a href="#">NPFL</a>
                </div>
              </div>
              <a href="#">Basketball</a>
              <a href="#">Tennis</a>
              <a href="#">Boxing</a>
              <a href="#">Wrestling</a>
              <a href="#">Athletics</a>
              <a href="#">Golf</a>
              <div class="dropdown1">
                <button class="dropbtn1">Life Style
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content1">
                  <a href="#home">Transfers</a>
                  <a href="#">Grass Roots</a>
                  <a href="#">Other News</a>
                  
                </div>                
              </div>
              <span class='bg-white'>
                <a href="/AdminPost">Create Post</a>
              </span>
              <a href="javascript:void(0);" class="icon" onclick={myFunction}>&#9776;</a>
            </div>
          
        </div>
      );
    };
