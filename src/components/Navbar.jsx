import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div className="flex pt-10 pr-7 w-full h-7 justify-end gap-4 sm:gap-10">
          <div>
            <button type="button" className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
              Login/Register
            </button>

            <button type="button" className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
              Free trial
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-white justify-between px-5 sm:px-10 mt-28 mb-20 font-custom ">
          <div className="font-bold leading-[28px] text-[22px] sm:text-[28px]">Forex-Tradie</div>
          <ul className="flex flex-wrap gap-[16px] sm:gap-[32px] mt-4 md:mt-0">
           <NavLink to="/guidance"> <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Guidance</li></NavLink>
           <NavLink to="/trustedclient"> <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Trusted Clients  </li></NavLink>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">What We Do</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Get Started</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Support</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px]">Insta/YT</li>
          </ul> 
        </div>
    </>
  )
}

export default Navbar
