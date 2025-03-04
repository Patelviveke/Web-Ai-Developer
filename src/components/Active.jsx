import React from 'react';
import Contact from './Contact';

const Active = () => {
    return (
        <>
            <div className='w-full sm:max-w-[409.32px] max-w-[285.32px] h-auto mx-auto m-8'>
                {/* Button group */}
                <div className='w-full max-w-[226.96px] h-[28.67px] flex gap-2 justify-between'>
                    <button>
                        <div className="w-full max-w-[66.89px] h-[27.87px] rounded-[9.56px] bg-[#D6D8F8] flex justify-center items-center">
                            <div className='font-inter font-medium text-[12.74px] leading-[20.39px] text-[#35527E]'>
                                Active
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className="w-full max-w-[66.89px] h-[27.87px] rounded-[9.56px] bg-[#F4F4F4] flex justify-center items-center">
                            <div className='font-inter font-medium text-[12.74px] leading-[20.39px] text-[#35527E]'>
                                Active
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className="w-full max-w-[66.89px] h-[27.87px] rounded-[9.56px] bg-[#F4F4F4] flex justify-center items-center">
                            <div className='font-inter font-medium text-[12.74px] leading-[20.39px] text-[#35527E]'>
                                Active
                            </div>
                        </div>
                    </button>
                </div>

                {/* Contact cards */}
                <div className='w-full mt-[32px] space-y-4'>
                    <Contact letter='A' name='AMD*' subtitle='Advanced Micro Tech' number1='98.5' number2='+6.58%' number3='+3.10' />
                    <hr className='mt-2 mb-2' />
                    <Contact letter='N' name='NVDA*' subtitle='NVDA Corporation' number1='125.6' number2='+6.56%' number3='+7.10' />
                    <hr className='mt-2 mb-2' />
                    <Contact letter='A' name='APL*' subtitle='Applee INC Company' number1='120.3' number2='+4.68%' number3='+6.10' />
                    <hr className='mt-2 mb-2' />
                    <Contact letter='P' name='PLYSTR*' subtitle='Online market' number1='56.5' number2='+7.58%' number3='+9.10' />
                    <hr className='mt-2 mb-2' />
                </div>
            </div>
        </>
    );
}

export default Active;
