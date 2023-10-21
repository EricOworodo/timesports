import React from 'react'
import AdminHeader from '../../components/admn/AdminHeader'
import Sidebar from '../../components/admn/Sidebar'
import CreateNewPost from '../../components/admn/CreateNewPost'

export default function CreatePost() {
  return (
    <div>
      <AdminHeader />
        <div class='flex flex-col lg:flex-row bg-gray4 '>
            <div class=' w-[25%] mx-[5px] my-[5px]'>
                <Sidebar />
            </div>
            <div class=' bg-white w-[75%] mx-[5px] my-[5px]'>
              <CreateNewPost />
            </div>
        </div>
    </div>
  )
}
