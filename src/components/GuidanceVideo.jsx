import React from 'react'
import GuidanceCard from './GuidanceCard'

const GuidanceVideo = () => {
    return (
        <>
            <div className='mt-10 mb-10 relative'>
                {/* Title */}
                <div className='mx-auto text-center sm:text-left sm:ml-[118px] ml-0'>
                    <h2 className='font-manage font-bold text-[32px] sm:text-[40px] leading-[40px] sm:leading-[51.88px] text-[#212326]'>
                        Browse our latest <span className='text-[#D91222]'>video lessons</span>
                    </h2>
                </div>
                {/* Card Container */}
                <div className='lg:w-[1208.5px] w-3/4  mx-auto mt-10 flex flex-col lg:flex-row gap-7 justify-center'>
                    <GuidanceCard />
                    <GuidanceCard />
                </div>
                <div className='hidden lg:block'>
                <div className='absolute top-1/2 left-8'>
                    <div className='w-[74px] h-[74px] rounded-full bg-[#3EBA59]'></div>
                </div>
                <div className='absolute top-1/2 right-8'>
                    <div className='w-[74px] h-[74px] rounded-full bg-[#3EBA59]'></div>
                </div>
                </div>
            </div>
        </>
    )
}

export default GuidanceVideo
