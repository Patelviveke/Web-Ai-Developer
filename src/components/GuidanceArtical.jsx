import React from 'react';
import GuidanceCard from './GuidanceCard';

const GuidanceArtical = () => {
    return (
        <>
            <div className='w-full max-w-[1300px] h-auto mx-auto mb-20 mt-20 px-4'>
                <div className='w-full max-w-[487px] h-auto mx-auto'>
                    <div className="font-manage text-[#212326] text-[32px] md:text-[40px] font-normal leading-tight md:leading-[51.88px] text-center">
                        Recent <span className="font-semibold text-[#D91222]">Articles & Lessons</span>
                    </div>
                </div>
                <div className="w-full max-w-[1212px] h-auto mx-auto mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-2 justify-items-center">
        <GuidanceCard />
        <GuidanceCard />
        <GuidanceCard />
        <GuidanceCard />
        <GuidanceCard />
        <GuidanceCard />
    </div>
</div>

            </div>
        </>
    );
};

export default GuidanceArtical;
