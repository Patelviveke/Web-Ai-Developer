import React from 'react'

const WhatRightImg = () => {
    return (
        <>
        <div className='relative'>
            <div className=" flex flex-col lg:flex-row items-center justify-between p-8  rounded-lg max-w-7xl mx-auto mb-20">
                {/* Left Side: Text Section */}
                <div className="lg:w-[44%] mb-6 lg:mb-0">
                    <h1 className="text-[40px] font-[700] leading-[51.88px] text-left font-manage text-[#212326]">
                        Real-Time Trading <span className="text-[#D91222]"><br />Knowledge</span>
                    </h1>
                    <p className="font-inter text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                    Stay up-to-date with real-time market data and live price feeds. Our platform ensures you have the latest information at your fingertips.
                    </p>
                    <p className="font-inter mb-4 text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                    As the world’Leverage our automated trading capabilities to execute trades based on predefined criteria. Save time and reduce emotional trading decisions with our reliable automation tools.s first cryptocurrency, Bitcoin has come a long way in terms of its value. However.
                    </p>
                    <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                        Get Started
                    </button>
                </div>

                {/* Right Side: Chart Section */}
                <div className="lg:w-[56%] flex items-center justify-center relative">
                    <img src="Quatox.svg" alt="" />
                    {/* <div className="relative bg-indigo-900 p-6 rounded-lg">
                        Card
                        <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-xs">
                            <h2 className="text-center text-lg font-bold mb-4">QUOTEX</h2>
                            <div className="h-48">
                                Chart Placeholder
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Chart"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        Decorative Line
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 h-0.5 w-1/2"></div>
                    </div> */}
                </div>
            </div>
            <div className='absolute top-[60%]'>
                <img src="WhatwedoBg02.svg" alt="" />
            </div>
            </div>
            
        </>
    )
}

export default WhatRightImg
