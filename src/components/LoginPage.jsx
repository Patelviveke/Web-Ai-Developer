import React from 'react';
import { useState } from 'react';
import SignIn from './SignIn';


const LoginPage = ({ isOpen, onClose }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
            <div className="relative w-[90%] max-w-[900px] h-[90%] max-h-[555px] bg-[#FAFBFC] rounded-lg p-8 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <img src="Close.svg" alt="" />
                </button>

                {/* Forexxy -Tradie Logo */}
                <div className='flex mt-2 mb-[10px] md:mb-0 md:mt-4 justify-between'>
                    <h1 className="text-[24px] md:text-[28px] font-custom leading-[28px] font-bold text-[#190041]">Forexxy -Tradie</h1>
                    <div>
                        <button onClick={() => setModalOpen(true)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-[#7B68EE]">
                            Log In
                        </button>
                        <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    </div>
                </div>
                <div className='absolute bottom-0 left-0'><img src="LoginBg.svg" alt="Background" className="hidden md:block" /></div>

                {/* Sign Up Header */}
                <div className='w-full md:w-[384px] h-[400.6px] py-2 relative px-5 rounded-lg bg-white shadow-lg mx-auto '>
                    <h2 className="text-[#292D34] font-custom text-[20px] md:text-[25.6px] font-bold leading-[36.8px] text-center mb-4">
                        SIGN UP
                    </h2>

                    {/* Google Sign Up Button */}
                    <button className="relative flex items-center justify-center w-full p-3 border bg-white border-gray-300 rounded-lg mb-4 hover:bg-gray-100">
                        <img className="absolute left-4 w-6 h-6" src="GoogleImg.svg" alt="Google" />
                        <div className="text-[#3C4043] text-[14.2px] font-normal leading-[12.88px] tracking-[0.2px] text-center">
                            Sign up with Google
                        </div>
                    </button>

                    <div className="flex items-center mb-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-500">OR</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Email Input */}


                    {/* Trader ID Input */}
                    <div className="mb-6">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <img src="Email.svg" alt="" className='w-6 h-6' />
                            </span>
                            <input
                                className="shadow text-[14px] appearance-none border rounded w-full py-3 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="traderId"
                                type="text"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <img src="Tracker.svg" alt="" className='w-6 h-6' />
                            </span>
                            <input
                                className="shadow text-[14px] appearance-none border rounded w-full py-3 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="traderId"
                                type="text"
                                placeholder="Enter trader id"
                            />
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button className="w-full p-3 bg-[#D91222] text-white rounded-lg hover:bg-red-600 mb-4">
                        Sign Up
                    </button>

                    {/* Switch to Sign In */}
                    <p className="text-center text-black font-custom text-[9.6px] font-normal leading-[9.6px]">
                        Don't have a trader ID?{' '}
                        <span onClick={() => setModalOpen(true)} className="text-indigo-500 hover:underline cursor-pointer font-semibold">
                            Sign in
                        </span>
                        <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    </p>

                    <button className='absolute bottom-0 -right-8 md:-right-16'><img src="Help.svg" alt="Help" /></button>
                </div>

                <div className="font-custom absolute bottom-7 left-[2%] md:left-[21%] lg:left-[27%] text-[10px] font-normal md:text-white text-gray-600 text-opacity-80 leading-[14px] text-center">
                    This site is protected by reCAPTCHA and the Google
                    <span className="font-custom text-gray-700 md:text-white text-[9.84px] font-medium leading-[14px] text-center underline"> Privacy Policy </span>
                    and
                    <span className="font-custom text-gray-700 md:text-white text-[9.84px] underline font-medium leading-[14px] text-center"> Terms of Service </span>
                    apply.
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
