import React from 'react'

const GetStartedLast = () => {
  return (
    <>
      <div className="relative mb-[300px] sm:mb-[400px] lg:mb-[500px]">
                {/* Last image underneath the blue image */}
                <img
                    src="GetstartedLastBg.svg"
                    alt="Last Background"
                    className="relative w-full h-[468px] sm:h-auto z-0"
                />

                {/* Text on top of the last image */}
                <div className="absolute top-[18%] sm:top-1/3 w-full z-20">
                    <div className='flex flex-col items-center justify-center'>
                        <div className="font-manage text-[22px] sm:text-[36px] lg:text-[50px] w-full mb-1 sm:mb-6 lg:mb-5 font-bold leading-[40px] sm:leading-[64.85px] text-[#212326] text-center">
                        Start Trading with <span className='text-[#D91222]'>Forex-Tradie Today!</span>
                        </div>
                        <p className='text-[#797979]  w-full sm:w-[90%] lg:w-1/2 p-2 sm:p-6 text-center'>
                            Join Forex-Tradie today and take your trading to the next level. Whether you're a beginner or an experienced trader, we have everything you need to succeed in the financial markets.
                        </p>

                        <div className="flex justify-center mx-auto mt-4 pl-0 lg:pl-10 w-[90%] sm:mx-0">
                            <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-full border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-[16px] sm:text-[20px] lg:text-[32px] p-4 sm:p-6 leading-7 sm:leading-[54.94px] mt-6 sm:mt-8 text-black items-start lg:items-center h-screen z-20">
                        <div>
                            <span className='text-[#D91222]'>Contact Us:</span> Have any questions or need assistance? <a href="#" className='underline text-[#3EBA59]'>Contact our support</a> team and we'll be happy to help you.
                        </div>
                    </div>
                </div>
            </div> 
    </>
  )
}

export default GetStartedLast
