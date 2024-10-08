import React from 'react';
import Card from './Card';

const CardSection = () => {
    return (
        <>
            <div className='mt-[1300px] mb-28 flex justify-end mr-14'>
                <img width={169.52} height={259.77} src="VerLine.svg" alt="" />
            </div>

            <div className='max-w-[1216px] mx-auto p-4'>
                <div className='mb-10'>
                    <div className='font-custom font-bold text-[26px] sm:text-[34.68px] text-[#212326] leading-[32px] sm:leading-[44.98px] text-center'>
                        Fully featured to buy, trade and invest
                    </div>
                </div>

                {/* Responsive Grid for Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[34.68px]'>
                    <Card img='RealTime.svg' title='Real-time trading' ShadowImg='RealTimeShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                    <Card img='integrated.svg' title='Integrated signals' ShadowImg='IntegratedShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                    <Card img='SafeSecure.svg' title='Safe & secure' ShadowImg='SafeSecureShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                    <Card img='Support.svg' title='Support 24/7' ShadowImg='SupportShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                    <Card img='SuperFast.svg' title='Super Fast KYC' ShadowImg='SuperFastShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                    <Card img='Reports.svg' title='Reports & analytics' ShadowImg='ReportsShadow.svg' SubTitle='Organically grow the holistic world view of disruptive innovati workplace diversity empowerment.' />
                </div>

                <div className='mt-10 flex justify-center'>
                    <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                        Get Started
                    </button>
                    <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 text-[14px] sm:text-[15.61px] bg-[#FFFFFF] focus:outline-none rounded-[77.17px] leading-[20.24px] text-[#2D2D2D] border-2 border-[#E0E0E0] font-inter font-medium">
                        View More
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardSection;
