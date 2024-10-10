import React from 'react'

const InstaytFiveSec = () => {
  return (
    <>
       <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 py-12 bg-white">
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-[#181D26] text-[32px] mb-10 font-medium leading-[44px] text-left font-manage">
                <span className="text-[#D91222]">Interactive Stories </span> and Q&A Sessions:
                </h2>
                <ul className="text-left text-gray-700">
                    <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                        <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Polls and Quizzes: </span> Participate in our interactive stories with polls and quizzes to test your market knowledge.
                        </div>
                    </li>
                     <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                       <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Live Q&A Sessions:</span> Join our live Q&A sessions where our experts answer your questions in real-time..
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right Section: Placeholder Boxes */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <img src="GetstartedRightImg.svg" alt="" />
            </div>
        </div>
    </>
  )
}

export default InstaytFiveSec
