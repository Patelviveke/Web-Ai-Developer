import React from 'react';

const Card = ({ img, title, ShadowImg, SubTitle }) => {
  return (
    <div className='w-[377.17px] h-[306.93px] bg-[#F3F3F3] rounded-[17.34px] relative'>
      <div className='w-[299.13px] h-[203.35px] mx-auto mt-[52.02px]'>
        {/* Card Image */}
        <div className='mb-6'>
          <img src={img} alt={`${title} icon`} />
        </div>
        
        {/* Card Title */}
        <div className='w-[258px] h-[34px]'>
          <div className='font-manage font-medium text-[26.01px] leading-[34.74px] text-[#212326]'>
            {title}
          </div>
        </div>

        {/* Card Subtitle */}
        <div className='w-[299.13px] h-[75px] mt-4'>
          <div className='font-inter font-normal text-[15.61px] leading-[24.97px] text-[#797979]'>
            {SubTitle}
          </div>
        </div>

        {/* Shadow Image */}
        <div className='absolute top-0 right-0'>
          <img src={ShadowImg} alt={`${title} shadow`} />
        </div>
      </div>
    </div>
  );
}

export default Card;
