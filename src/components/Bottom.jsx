import React from 'react'
import Bottom_Quick_Link from './Bottom_Quick_Link'
import Bottom_Contact from './Bottom_Contact'
import Bottom_Sports_Link from './Bottom_Sports_Links'

export default function Bottom() {
  return (
    <div class='flex flex-col lg:flex-row bg-deepBlue text-white lg:column-3 justify-left py-[50px] px-[25px] mx-auto'>
      <div class='flex lg:flex-row lg:w-[75%] w-[100%] gap-[75px]  mx-auto'>
        <div class='flex flex-col'>
          <Bottom_Quick_Link />
        </div>
          
        <div class='flex flex-col'>
          <Bottom_Sports_Link />
        </div>
      </div>
          

    </div>
  )
}
