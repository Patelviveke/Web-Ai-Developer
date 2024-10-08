import React from 'react'
import NavbarAll from './NavbarAll'
import Footer from './Footer'
import TradeNo from './TradeNo'
import TradeMamber from './TradeMamber'
import TradeService from './TradeService'
import CostumerRating from './CostumerRating'
import TradeUser from './TradeUser'

const TraderCommunity = () => {
    return (
        <>
            <NavbarAll />
            <div className='relative mb-20'>
                <img className="w-full object-cover" src="TradeCommunityBg.svg" alt="Trade Community Background" />
                <div className='absolute inset-0 flex flex-col items-center text-white'>
                    <div className='w-full max-w-[1240px] h-auto px-4 sm:px-10 md:px-20 lg:px-0 mx-auto mt-0 sm:mt-10 flex flex-col justify-center items-center'>
                        <div className="font-manage text-[36px] sm:text-[48px] md:text-[60px] text-[#E6ECF7] font-bold leading-tight sm:leading-[64px] md:leading-[84px] text-center">
                            Welcome to Our forex-tradie community
                        </div>
                        <div className="font-custom mt-2 text-[14px] sm:text-[16px] md:text-[18px] text-[#A6AAB2] font-medium leading-tight sm:leading-[20px] md:leading-[24px] text-center">
                            Explore various trading strategies tailored to different market conditions
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='absolute top-40 left-0 hidden lg:block'>
                        <img src="TradeCommunityBL.svg" alt="Left Decoration" />
                    </div>
                    <div className='absolute top-40 right-0 hidden lg:block'>
                        <img src="TradeCommunityBR.svg" alt="Right Decoration" />
                    </div>
                    <div className='absolute top-[27%] right-[57%] hidden lg:block'>
                        <img src="TradeCommunityArrow.svg" alt="Arrow Decoration" />
                    </div>
                </div>
            </div>
            <TradeNo/>
            <TradeMamber/>
            <TradeService/>
            <CostumerRating/>
            <TradeUser/>
            <Footer />
        </>
    )
}

export default TraderCommunity
