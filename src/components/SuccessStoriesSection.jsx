import React from 'react';

const SuccessStoriesSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 py-12 bg-white">
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-[#181D26] text-[32px] mb-10 font-medium leading-[44px] text-left font-manage">
                    User <span className="text-[#D91222]">Success Stories:</span>
                </h2>
                <ul className="text-left text-gray-700">
                    <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                        <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Trader Spotlights:</span> Get inspired by our 'Trader Spotlights' where we feature success stories from our community. Learn from their experiences and apply their strategies to your own trading.
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
    );
};

export default SuccessStoriesSection;
