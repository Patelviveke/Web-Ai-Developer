import React from 'react'

const InstaytEightSec = () => {
  return (
    <>
       <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 py-12 bg-white">
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-[#181D26] text-[32px] mb-10 font-medium leading-[44px] text-left font-manage">
                Weekly <span className="text-[#D91222]">Webinars:</span>
                </h2>
                <ul className="text-left text-gray-700">
                    <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                        <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Expert-Led Sessions: </span> Join our weekly webinars led by experienced traders and market analysts. These sessions cover current market trends, trading strategies, and live Q&A.
                        </div>
                    </li>
                     <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                       <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Testimonials:</span> Read testimonials from traders who have transformed their trading journey with Forex-Tradie.
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right Section: Placeholder Boxes */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <img src="InstaytRightImg.svg" alt="" />
                {/* <div className="grid grid-cols-2 gap-4">
          Placeholder boxes
          <div className="bg-gray-200 h-40 w-40 mt-14 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="bg-gray-200 h-40 w-40 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="bg-gray-200 h-40 w-40 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="bg-gray-200 h-40 w-40 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
        </div> */}
            </div>
        </div>
    </>
  )
}

export default InstaytEightSec
