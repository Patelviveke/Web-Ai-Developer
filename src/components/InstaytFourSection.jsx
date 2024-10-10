import React from 'react'

const InstaytFourSection = () => {
  return (
    <>
       <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 py-12 bg-white">
                {/* Left Section: Mobile Screenshots */}
                <div className="lg:w-[44%] w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <img
                        src="Laptop.svg" // Replace with actual image path
                        alt="Instagram Screenshot 1"
                    />
                </div>

                {/* Right Section: Text Content */}
                <div className="lg:w-[50%] w-full text-center lg:text-left">
                <h2 className="text-[#181D26] font-medium text-[32px] leading-[44px] text-left mb-10 lg:text-[40px]">
                    <span className="text-[#D91222]">Educational</span> Content:
                    </h2>
                  
                    <ul className="text-left text-gray-700">
                        <li className="flex items-start mb-3 gap-2">
                            <img src="GreenTick.svg" alt="" />
                            <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">
                            Infographics and Quick Tips: </span> Learn through visually engaging infographics and quick tips designed to simplify complex trading concepts.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <img src="GreenTick.svg" alt="" />
                            <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Mini-Tutorials: </span> Watch short video tutorials on key trading topics directly on your feed.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default InstaytFourSection
