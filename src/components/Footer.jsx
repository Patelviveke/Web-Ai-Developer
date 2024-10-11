import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0A0F25] py-40 text-white overflow-x-hidden h-auto">
            <div className="container mx-auto px-4 lg:px-20">
                {/* Top Row: Logo and Button */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold text-[#26CC57]">Forexxy -Tradie</h2>
                    <button className="bg-[#D01222] text-white px-6 py-3 mt-4 lg:mt-0 rounded-full text-sm font-medium">
                        Get Started
                    </button>
                </div>
               <div className='w-full h-[1px] bg-[#E0E0E0]'></div>

                {/* Navigation, Contact Us, and Social Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-7">
                    {/* Navigation Links */}
                    <div className="flex flex-col">
                    <h3 className="font-custom text-[18px] font-normal leading-[27px] text-left mb-4">Navigation</h3>

                        <div className="flex space-x-8 overflow-x-auto">
                            <ul className="flex flex-col text-sm text-[#A6A6A6]">
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Guidance</li>
                                <li className="mb-2">Community</li>
                                <li className="mb-2">Support</li>
                            </ul>
                            <ul className="flex flex-col text-sm text-[#A6A6A6]">
                                <li className="mb-2">What We Do</li>
                                <li className="mb-2">Get Started</li>
                                <li className="mb-2">News</li>
                                <li className="mb-2">Contacts</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact us</h3>
                        <p className="text-sm text-[#A6A6A6]">
                            +1 (406) 555-0120<br />
                            +1 (480) 555-0103<br />
                            <a href="mailto:help@Forexxy -tradie.com" className="text-white">help@Forexxy -tradie.com</a>
                        </p>
                    </div>

                    {/* Social Media and Location */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-lg mb-4">Follow us</h3>
                        <div className="flex justify-center lg:justify-start mb-6 space-x-4">
                            <a href="#"><img src="Facebook.svg" alt="Facebook" /></a>
                            <a href="#"><img src="Google.svg" alt="Google" /></a>
                            <a href="#"><img src="Instagram.svg" alt="Instagram" /></a>
                            <a href="#"><img src="Youtube.svg" alt="YouTube" /></a>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">Let’s chat</h3>
                        <div className="flex justify-center lg:justify-start mb-6 space-x-4">
                            <a href="#"><img src="chat.svg" alt="WhatsApp" /></a>
                            <a href="#"><img src="telegram.svg" alt="Telegram" /></a>
                            <a href="#"><img src="whatsapp.svg" alt="WhatsApp" /></a>
                        </div>


                        <h3 className="font-semibold text-lg mb-4">Location</h3>
                        <p className="text-sm text-[#A6A6A6]">
                            2972 Westheimer Rd.<br />
                            Santa Ana, Illinois 85486
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-[#334155] pt-6 text-center text-sm text-[#A6A6A6]">
                    Copyright © Forexxy -Tradie
                </div>
            </div>
        </footer>
    );
};

export default Footer;
