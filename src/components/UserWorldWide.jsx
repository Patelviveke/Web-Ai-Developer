import React, { useRef } from 'react';
import UserWideCard from './UserWideCard';

const UserWorldWide = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='absolute mt-96'>
                <img src="UserWorldBg.svg" alt="" />
            </div>
            <div className='relative top-1 h-auto mt-16 lg:mt-40 mx-auto max-w-screen-lg px-4'>
                <div className='text-center p-4'>
                    <div className='font-custom font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[47.21px] leading-tight'>
                        30 Million Users Worldwide
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    className='w-full h-auto mt-8 lg:mt-16 flex overflow-x-hidden gap-3'
                    ref={scrollContainerRef}
                >
                    {/* Cards */}
                    <UserWideCard />
                    <UserWideCard />
                    <UserWideCard />
                    <UserWideCard />
                    <UserWideCard />
                </div>

                <div className='mt-4 text-center text-[#455A64]'>
                    <span
                        className='mr-4 font-custom font-medium text-sm sm:text-base md:text-[13.49px] cursor-pointer'
                        onClick={scrollLeft}
                    >
                        ← Prev
                    </span>
                    <span
                        className='font-custom font-medium text-sm sm:text-base md:text-[13.49px] cursor-pointer'
                        onClick={scrollRight}
                    >
                        Next →
                    </span>
                </div>
            </div>
        </>
    );
};

export default UserWorldWide;
