import React from 'react'
import AdminNavbar from './AdminNavbar'
import logo from '../logo.png'


export default function AdminHeader() {
  return (
    
    <div class='flex flex-row  bg-white border-[2px] border-style-solid border-gray2  h-[60px] mt-[15px] mb-[15px] lg:my-[15px] '>
      <div class='flex flex-row lg:justify-center mx-auto lg:w-[75%]'>
        <AdminNavbar />
      </div>
      
    </div>
    
  )
}
