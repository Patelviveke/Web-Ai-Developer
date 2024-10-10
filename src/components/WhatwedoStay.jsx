import React from 'react'
import CardStay from './CardStay'

const WhatwedoStay = () => {
    return (
        <>
            {/* Divider */}
            <div className='w-[90%] h-[2px] bg-[#E0E0E0] mx-auto mb-20 lg:mb-40'></div>

            {/* Content Container */}
            <div className="relative">
                <div className='w-full lg:w-[90%] mx-auto lg:h-auto'>
                    {/* Heading and Subtitle */}
                    <div className='w-full lg:w-[1030px] flex flex-col gap-4 lg:gap-[22px] mx-auto items-center text-center px-4'>
                        <h1 className="font-manage text-[28px] md:text-[36px] lg:text-[46px] font-bold leading-[36px] md:leading-[46px] lg:leading-[59.66px] text-[#212326]">
                            Stay Ahead with Real-Time <span className="text-[#D91222]">Market Insights</span>
                        </h1>
                        <p className="font-custom text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28.53px] text-[#797979]">
                            “Up-to-Date Information and Analysis at Your Fingertips"
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className='w-full lg:w-[1075.44px] mx-auto mt-10 lg:mt-40 px-4'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            <div className='flex flex-col gap-10 lg:mt-20 mt-0'>
                                <CardStay
                                    title="Interactive Courses"
                                    description="Enroll in our interactive courses designed by industry professionals. These courses cover a wide range of topics and are suitable for traders of all experience levels. Follow our step-by-step guides to master essential trading skills and concepts."
                                />
                                <CardStay
                                    title="Market Analysis"
                                    description="Market analysis in Forex trading involves evaluating the market to make informed trading decisions. It’s an essential aspect for traders to understand price movements, trends, and potential future actions."
                                />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <CardStay
                                    title="Mentorship Programs"
                                    description="Take advantage of our mentorship programs to receive personalized guidance from experienced traders. Improve your trading skills and gain valuable insights from your mentors."
                                />
                                <CardStay
                                    title="Back Testing in Forex"
                                    description="Backtesting in Forex trading is the process of testing a trading strategy on historical data to see how it would have performed in the past. It allows traders to simulate their strategies using real-world market conditions."
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center items-center mt-10 lg:mt-20'>
                            <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Image */}
                <div className='absolute top-[50%] left-0 right-0'>
                    <img src="StayBg2.svg" alt="Background" className="w-full h-auto" />
                </div>
            </div>
        </>
    )
}

export default WhatwedoStay
