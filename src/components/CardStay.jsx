import React from 'react'

const CardStay = ({ title, description }) => {
    return (
        <>
            <div className="bg-[#1A1A48] w-full lg:w-[512.24px] h-[350px] lg:h-[492.17px] gap-5 text-white p-4 lg:p-6 rounded-md shadow-lg flex flex-col justify-center mb-10">
                {/* Card Content */}
                <div>
                    {/* Icon */}
                    <div className="mb-4">
                        <img src="Hash.svg" alt="icon" className="inline-block mr-2" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#3EBA59] font-manage text-[22px] md:text-[28px] lg:text-[32.49px] font-bold leading-[28px] md:leading-[34px] lg:leading-[37.33px] text-left">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="font-custom text-[16px] md:text-[20px] lg:text-[23.13px] font-normal leading-[22px] md:leading-[26px] lg:leading-[27.11px] text-left mt-2">
                        {description}
                    </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end mt-4 lg:mt-0">
                    <img src="Triangle.svg" alt="arrow icon" />
                </div>
            </div>
        </>
    )
}

export default CardStay
