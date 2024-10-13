import React from 'react';
import Bitcoin from './Bitcoin';

const Imgsection = () => {
    return (
        <>
            <div className="relative w-full h-full overflow-x-hidden">
                <img
                    src="bg02.svg"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover z-0 pt-20"
                />

                {/* Adjusted Container Sizes for Responsiveness */}
                <div className='relative w-full max-w-[1216px] h-auto flex flex-col mt-20 mb-20 mx-auto z-10 p-6 sm:p-2'>
                    <div className="flex flex-wrap justify-between py-2 gap-y-6 gap-x-8 md:gap-x-[110px]">
                        <img src="Coinxy.svg" alt="Coinxy" className="w-[120px] h-auto md:w-auto" />
                        <img src="GreenBox.svg" alt="GreenBox" className="w-[120px] h-auto md:w-auto" />
                        <img src="vs.svg" alt="vs" className="w-[120px] h-auto md:w-auto" />
                        <img src="Brand.svg" alt="Brand" className="w-[120px] h-auto md:w-auto" />
                        <img src="currency.svg" alt="currency" className="w-[120px] h-auto md:w-auto" />
                    </div>
                    <div className="flex flex-wrap justify-between py-2 gap-y-6 gap-x-8 mt-4 md:gap-x-[150px] p-2">
                        <img src="Bit.svg" alt="Bit" className="w-[120px] h-auto md:w-auto" />
                        <img src="Target.svg" alt="Target" className="w-[120px] h-auto md:w-auto" />
                        <img src="Modern.svg" alt="Modern" className="w-[120px] h-auto md:w-auto" />
                        <img src="classic.svg" alt="classic" className="w-[120px] h-auto md:w-auto" />
                        <img src="upshort.svg" alt="upshort" className="w-[120px] h-auto md:w-auto" />
                    </div>
                </div>

                {/* Bitcoin Price Section */}
                <div className="relative w-full max-w-[1168.21px] mx-auto z-10">
                    <div className='w-full max-w-[670px] mx-auto pt-10'>
                        <div className='flex flex-wrap justify-center items-end'>
                            <div><img src="BitCoin.svg" alt="Bitcoin" /></div>
                            <div className="font-manage text-[40px] md:text-[80px] font-bold text-[#212326]">
                                BitCoin
                            </div>
                            <div className="font-manage text-[20px] md:text-[30px] font-normal text-[#797979] m-3">
                                (BTC)
                            </div>
                        </div>

                        <div className='text-center font-inter text-[14px] md:text-[18px] text-[#797979] mt-3 px-4 sm:px-0'>
                            Free equity investments and flat ₹20 intraday and F&O trades even higher earning rates and our lowest borrowing rates.
                        </div>

                        {/* Bitcoin Price Info */}
                        <div className='flex justify-center items-center mx-auto mt-4 font-manage text-center'>
                            <div className='font-bold text-[25px] md:text-[35px]'>$ 30,484.71</div>
                            <div className='font-medium text-[#3EBA59] text-[20px] md:text-[30px]'>&nbsp;+2.6% </div>
                            <div className='font-normal text-[#212326] text-[20px] md:text-[30px]'>&nbsp;(1D)</div>
                        </div>
                    </div>

                    {/* Bitcoin Graph Section */}
                    <div className='mt-20 md:mt-40 relative'>
                        <Bitcoin />
                    </div>

                    {/* Date & Time Section */}
                    <div className="absolute hidden md:block top-[80%] md:top-[65%] left-[15%] md:left-[30%]">
                        <div className='border bg-[#E0E0E0] w-[200px] md:w-[255px] h-[60px] md:h-[78px] rounded-[10px]'>
                            <div className='p-3 flex justify-between'>
                                <div className='font-inter text-[12px] md:text-[14px]'>6/6/2024</div>
                                <div className='font-inter text-[12px] md:text-[14px]'>2:34Pm</div>
                            </div>
                            <div className='font-manage font-medium text-[14px] md:text-[16px] pl-4'>
                                <span className='text-[#212326]'>$ 30,484.71</span>
                                <span className='text-[#FF3444]'> +2.26%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Imgsection;
