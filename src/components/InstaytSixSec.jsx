import React from 'react'

const InstaytSixSec = () => {
    return (
        <>
            {/* Main Section */}
            <div className='w-full max-w-[1216px] h-auto mx-auto px-4 md:px-8'>
                <h1 className="font-manage text-[32px] md:text-[48px] lg:text-[58px] font-bold leading-tight md:leading-[70px] lg:leading-[80px] tracking-[-0.72px] text-left">
                    <span className="text-[#D91222]">
                        YouTube:
                    </span>
                    <span className="text-[#190041]">
                        Forex-Tradie Official
                    </span>
                </h1>
                <p className="font-custom text-[16px] md:text-[20px] lg:text-[25px] font-normal leading-[28px] md:leading-[40px] lg:leading-[49px] tracking-[-0.72px] text-[#212326] text-left mt-4">
                    Our YouTube channel is packed with in-depth tutorials, webinars, market analysis videos, and interviews with industry experts. Subscribe to stay informed and elevate your trading skills.
                </p>
            </div>

            {/* Button, Text, and Image Section */}
            <div className="flex flex-col items-center py-10 relative mb-32">
                {/* Button */}
                <div className="relative z-30 mt-6 md:mt-10">
                    <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-[14px] md:text-[16px] font-bold leading-[20.83px] tracking-[0.1em] text-center">
                        PREVIEW
                    </button>
                </div>

                {/* Text */}
                <p className="text-[#263238] px-4 md:px-20 lg:px-80 text-center mt-4 text-[20px] md:text-[28px] lg:text-[32px] font-medium leading-[30px] md:leading-[38px] lg:leading-[44px] relative z-30" style={{ fontFamily: 'DM Sans' }}>
                    Subscribe to Our YouTube Channel: Never miss an update. Subscribe to Forex-Tradie Official
                </p>

                {/* Image with colored buttons */}
                <div className="relative z-30 mt-6 md:mt-10 w-full max-w-[900px]">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="bg-gray-200 px-4 py-2 flex items-center">
                            <div className="w-5 h-5 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                        </div>
                        <img src="YoutubeImg.svg" alt="YouTube Channel Preview" className="w-full h-auto" />
                    </div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 z-10">
                    <img src="YoutubeBg.svg" alt="YouTube Background" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default InstaytSixSec
