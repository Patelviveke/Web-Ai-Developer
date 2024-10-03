import './App.css';
import React, { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="relative w-full min-h-[944px] overflow-x-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src="BackGround.svg"
          alt="Background"
        />
        <div className="flex pt-10 pr-7 w-full h-7 justify-end gap-4 sm:gap-10">
          <div>
            <button type="button" className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
              Login/Register
            </button>

            <button type="button" className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
              Free trial
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-white justify-between px-5 sm:px-10 mt-28 mb-20 font-custom ">
          <div className="font-bold leading-[28px] text-[22px] sm:text-[28px]">Forex-Tradie</div>
          <ul className="flex flex-wrap gap-[16px] sm:gap-[32px] mt-4 md:mt-0">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Guidance</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Trusted Clients</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">What We Do</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Get Started</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer">Support</li>
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px]">Insta/YT</li>
          </ul> 
        </div>

        <div className="font-manage text-center">
          <div className="text-[#E6ECF7] font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[60px] sm:leading-[70px] lg:leading-[84px]">
            Discover endless possibilities in the world
          </div>
          <span className="text-[#D91222] font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[60px] sm:leading-[70px] lg:leading-[84px]">of Trading.</span>
        </div>

        <div className="text-[#A6AAB2] font-inter font-medium leading-[24px] text-[14px] sm:text-[18px] text-center mt-5 sm:mt-7">
          <div>Clients in over 200 countries and territories trade stocks, options, futures, currencies, bonds, funds,</div>
          <div>more on 150 global markets from a single unified platform. Explore all available products worldwide.</div>

          <div className="flex flex-wrap items-center mt-5 sm:mt-7 justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-1">
              <div className="relative">
                <div className="w-4 sm:w-6 h-1 bg-[#3EBA59] transform -rotate-45 shadow-[0_5px_10px_rgba(62,186,89,0.8),0_10px_20px_rgba(62,186,89,0.5),0_15px_30px_rgba(62,186,89,0.3)]"></div>
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Fast Trading</div>
            </div>

            <div className="flex items-center gap-1">
              <div className="relative">
              <img src="halfcir.svg" alt="" />
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Secure & Reliable</div>
            </div>

            <div className="flex items-center gap-1">
              <div className="relative">
              <img src="Round.svg" alt="" />
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Continuous Market Updates</div>
            </div>
          </div>

          <div className="flex pt-5 sm:pt-10 justify-center mt-5 sm:mt-7">
            <div>
              <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                Get Started
              </button>

              <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#FFFFFF] bg-opacity-[4%] text-white focus:outline-none rounded-[48px] border border-[#FF8811] border-opacity-20 font-custom font-bold">
                Try Demo
              </button>
            </div>
          </div>

          <div className="font-Montserrat font-medium text-[10px] sm:text-[12px] leading-[14.63px] text-white text-opacity-[74%] mt-[100px] sm:mt-[110px] flex flex-col items-center">
            <div className="mb-2">Discover more</div>
            <div
              className={`w-[20px] sm:w-[23px] h-[30px] sm:h-[36px] border-2 border-white rounded-3xl flex justify-center items-center mt-2 transition-transform duration-300 ease-in transform ${clicked ? 'scale-125' : 'scale-100'}`}
              onClick={handleClick}
            >
              |
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
