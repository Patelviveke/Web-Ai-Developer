import React from 'react';

const Bitcoin = () => {
    return (
        <><div className='px-4 lg:px-0'>
            <div className='w-full lg:w-[1131.21px] h-auto lg:h-[559.2px] bg-white border border-[#CACACA] rounded-[20px] lg:rounded-[39.6px] mb-10 shadow-xl'>

                <div className='flex justify-between pt-4 px-4 md:px-8'>
                    <div className='font-manage font-medium text-[16px] md:text-[18.59px] leading-[20px] md:leading-[24.11px] text-[#212326]'>
                        Token information
                    </div>
                    <div className='flex gap-2'>
                        <div className="bg-[#3EBA59] w-[16px] md:w-[21.01px] h-[16px] md:h-[21.01px] rounded-full"></div>
                        <div className="bg-[#FFB039] w-[16px] md:w-[21.01px] h-[16px] md:h-[21.01px] rounded-full"></div>
                        <div className="bg-[#D91222] w-[16px] md:w-[21.01px] h-[16px] md:h-[21.01px] rounded-full"></div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className='w-full h-[1px] bg-[#CACACA] mt-2'></div>
                <img src="Chart.svg" alt="" className='py-6 px-3 sm:px-7 sm:py-8' />
            </div>
            {/* Content Section */}
            <div className='w-full hidden lg:w-[1110.66px] h-auto lg:h-[413.74px] mt-8 mx-auto px-4 md:px-10'>
                <div className='flex flex-col lg:flex-row w-full h-full'>
                    {/* USD and Price List */}
                    <div className='h-full lg:h-[396.34px] flex flex-col mb-8 lg:mb-0'>
                        <div className='font-inter font-bold text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px] ml-8 lg:ml-14'>
                            USD
                        </div>
                        <ul className='font-custom font-normal text-[#FF3444] text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px]'>
                            <li className='m-4 md:m-7'>50.60 k</li>
                            <li className='m-4 md:m-7'>40.60 k</li>
                            <li className='m-4 md:m-7'>30.60 k</li>
                            <li className='m-4 md:m-7'>20.60 k</li>
                            <li className='m-4 md:m-7'>10.60 k</li>
                            <li className='m-4 md:m-7'>5.60 k</li>
                        </ul>
                    </div>

                    {/* Border Section Beside the List */}
                    <div className="w-full lg:w-[669.91px] h-full lg:h-[353.94px] flex items-start relative mb-8 lg:mb-0">
                        <div className="w-full lg:w-[669.91px] h-full border-l-2 border-b-2 border-[#DCDCDC] rounded-[9.7px]">
                            <div className=''>
                                <hr className='mt-4 md:mt-5' />
                                <hr className='mt-8 md:mt-10' />
                                <hr className='mt-8 md:mt-12' />
                                <hr className='mt-12 md:mt-[56px]' />
                                <hr className='mt-12 md:mt-[50px]' />
                                <hr className='mt-12 md:mt-[50px]' />
                                <hr className='mt-12 md:mt-[50px]' />
                            </div>
                            <div className="bg-gradient-to-b from-[#469B59] via-[#C2FFCF] to-[#FFFFFF] w-full lg:w-[669.91px] h-[200px] lg:h-[286.06px] absolute gap-0 rounded-tl-[9.7px] border-[2.42px] border-[#3EBA59] transform rotate-0 top-10 lg:top-16">
                            </div>
                            <div className='flex mt-4 lg:mt-8 justify-evenly'>
                                <div className='font-inter font-normal text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px] text-center text-[#797979]'>2:04 Am</div>
                                <div className='font-inter font-normal text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px] text-center text-[#797979]'>2:45 Am</div>
                                <div className='font-inter font-normal text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px] text-center text-[#797979]'>3:04 Am</div>
                                <div className='font-inter font-normal text-[12px] md:text-[14.55px] leading-[20px] md:leading-[23.27px] text-center text-[#797979]'>5:04 Am</div>
                            </div>
                        </div>
                    </div>

                    {/* Best Crypto Exchanges Section */}
                    <div className='w-full lg:w-[291.72px] h-[85.66px] rounded-[16.16px] bg-[#1367C2] flex mb-8 lg:mb-0'>
                        <div className="text-white p-4 font-inter text-[14px] md:text-[17.78px] font-bold leading-[21.51px]">
                            Best Crypto Exchanges
                        </div>
                        <div className="">
                            <img className='rounded-[16.16px]' width={100} height={70} src="Currency.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Data Image Section */}
                <div
                    className='w-full lg:w-[394.34px] top-40 lg:top-52 rounded-[24.24px] absolute left-10 lg:left-[800px] bg-[#FAFAFA] h-[200px] lg:h-[308.69px] ml-10'
                    style={{
                        boxShadow: '-8.89px 21.01px 12.12px 0px rgba(198, 198, 198, 0.25)',
                    }}
                >
                    <img className='w-full h-full object-cover rounded-[24.24px] p-2' src="data.svg" alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Bitcoin;
