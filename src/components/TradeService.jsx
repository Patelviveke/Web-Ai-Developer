import React from 'react'

const TradeService = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:w-[1216.3px] lg:h-[507.61px] mx-auto mb-20 space-y-8 lg:space-y-0 lg:space-x-8 p-8 bg-white rounded-lg">
                {/* Image */}
                <img src="BussinessWomen.svg" alt="A businesswoman shaking hands with a client" className="rounded-lg w-full lg:w-auto" />
                
                {/* Text Content */}
                <div className="lg:w-[613.68px] w-full h-auto lg:h-[447px] flex flex-col justify-center">
                    <h2 className="font-ubuntu text-[32px] md:text-[40px] lg:text-[51.69px] font-bold leading-tight md:leading-snug lg:leading-[56.82px] tracking-[-0.02em] text-gray-900 text-left">
                        What our client says about <span className="text-red-600">our services.</span>
                    </h2>
                    
                    {/* Testimonial Section */}
                    <div className='flex items-start lg:items-center gap-4 mt-4'>
                        <div className='w-[5px] h-[80px] md:h-[100px] lg:h-[125px] bg-[#0b63E5]'></div>
                        <div className='flex flex-col'>
                            <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                                I appreciate the customizable alerts. They help me stay on top of market movements without being glued to the screen, and the platform's security features give me peace of mind knowing my investments are safe.
                            </p>
                            <div className="flex items-center mt-4">
                                <img src="Comma.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex space-x-4 mt-10">
                        <button className="flex items-center justify-center bg-gray-100 rounded-lg shadow ">
                            <img src="LeftSquare.svg" alt="Previous" />
                        </button>
                        <button className="flex items-center justify-center bg-gray-100 rounded-lg shadow ">
                            <img src="RightSquare.svg" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeService
