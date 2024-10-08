import React from 'react';

const Contact = ({ letter, name, subtitle, number1, number2, number3 }) => {
    return (
        <div className='flex flex-wrap gap-2 sm:gap-4 justify-between items-center'>
            {/* Circle with letter */}
            <div className='w-[40px] h-[40px] sm:w-[52.56px] sm:h-[52.56px] bg-[#3EBA59] rounded-full flex justify-center items-center'>
                <div className='text-white font-inter font-bold text-[18px] sm:text-[23.89px] leading-[28px] sm:leading-[38.22px]'>{letter}</div>
            </div>

            {/* Name and subtitle */}
            <div className='flex flex-col gap-1 flex-grow'>
                <div className='font-inter font-bold text-[10px] sm:text-[12.74px] leading-[16px] sm:leading-[20.39px] text-[#35527E]'>{name}</div>
                <div className='font-inter font-medium text-[10px] sm:text-[12.74px] leading-[16px] sm:leading-[20.39px] text-[#35527E]'>{subtitle}</div>
            </div>

            {/* Numbers */}
            <div className='font-inter font-medium text-[10px] sm:text-[12.74px] leading-[16px] sm:leading-[20.39px] text-[#212326] ml-4 sm:ml-8'>
                {number1}
            </div>
            <div className='font-custom font-medium text-[10px] sm:text-[12.74px] leading-[16px] sm:leading-[20.39px] text-[#FF3444] ml-4 sm:ml-6'>
                <div>{number2}</div>
                <div>{number3}</div>
            </div>
        </div>
    );
}

export default Contact;
