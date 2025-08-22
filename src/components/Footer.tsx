import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Footer: React.FC = () => (
    <footer className="bg-green-700 text-[#1b1b1b] py-2 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm font-semibold">&copy; {new Date().getFullYear()} Jeovany Afonso. All rights reserved.</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a
                    href="https://wa.me/244940386888" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <FaWhatsapp className="text-2xl text-[#1b1b1b] hover:text-white transition-colors" />
                </a>
                
            </div>
        </div>
    </footer>
);

export default Footer;