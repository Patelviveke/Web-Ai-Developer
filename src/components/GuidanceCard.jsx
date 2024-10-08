import React from 'react';

const GuidanceCard = () => {
    return (
        <>
            <div className='w-[95%] sm:w-[589.58px] h-auto px-5 py-6 rounded-[17.26px] bg-[#F3F3F3]'>
                <div className='w-full sm:w-[504.98px] h-auto mx-auto'>
                    <div className='w-full sm:w-[504.98px] h-auto rounded-[17.26px] bg-white'>
                        <img className="w-full h-auto rounded-[17.26px]" src="CardImg.svg" alt="" />
                    </div>
                    <div className="w-full sm:w-[226px] h-[25px] mt-4 ml-2 mb-4">
                        <div className="font-inter text-sm sm:text-[15.54px] font-normal leading-6 text-left text-[#797979]">
                            John Carter | June 18, 2022
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className="font-manage text-lg sm:text-[25.9px] font-medium leading-8 sm:leading-[33.59px] text-left text-[#212326]">
                            To Crypto or Not to Crypto that is the Question that leads to happy
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className="font-inter text-sm sm:text-[15.54px] font-normal leading-6 sm:leading-[24.86px] text-left text-[#797979]">
                            Organically grow the holistic world view of disruptive innovation, workplace diversity, and empowerment.
                        </div>
                    </div>
                    <div className="font-custom text-[#D91222] text-sm sm:text-[15.54px] font-semibold leading-6 sm:leading-[24.86px] text-left">
                        Start Learning
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuidanceCard;
