import React from 'react'

const UserWideCard = () => {
    return (
        <>
            <div className=' h-[426.33px] bg-[#334155] mx-auto rounded-[16.86px] border border-[#475569]'>
                <div className='w-[269.78px] h-[53.96px] flex p-4 gap-2  items-center'>
                    <div><img src="Sheels.svg" alt="" /></div>
                    <div className='font-custom text-[#94A3BB] text-[20.23px] font-bold leading-[22.26px] text-left'>
                        SHELLS
                    </div>
                </div>
                <div className='w-[269.78px] h-[224px]'>
                    <div className='font-roboto text-[20.23px] font-normal leading-[32.37px] p-4 text-white text-left'>
                        The platform's educational videos and articles have significantly improved my trading knowledge. The real-time news feed keeps me updated on market trends and important events.
                    </div>
                </div>
                <div className='w-[269.78px] h-[67.44px] pt-24 pl-7 flex items-center gap-3'>
                    <div>
                        <img className='rounded-full' src="Image.svg" alt="" />
                    </div>

                    <div>
                        <div className="font-custom text-[15.18px] font-normal leading-[24.28px] text-left text-white">
                            Hellena John
                        </div>

                        <div className="font-custom text-[13.49px] font-normal leading-[18.88px] text-left text-[#94A3B8]">
                            Co-founder
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserWideCard
