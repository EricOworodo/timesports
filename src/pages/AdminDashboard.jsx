import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminNavBar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

export default function AdminDashboard() {
  return (
    <div class='bg-gray4'>
        <AdminHeader />
        <div class='flex flex-row'>
        {/* CONTENTS */}
        <div class='bg-white border-[2px] mx-[5px] mt-[2px] mb-[15px] border-gray2 border-style-solid py-[50px] px-[50px] w-[98%] mx-auto h-full'></div>
        </div>
    </div>
  )
}
