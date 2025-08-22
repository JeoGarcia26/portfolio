import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Recent Work', href: '#recent-work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const NavBar: React.FC = () => (
    <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 items-center bg-[#1b1b1b] text-white z-[9999] ">
        <ul className="flex gap-16 list-none m-0 p-0">
            {menuItems.map(item => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        className="text-1xl font-mono font-bold no-underline transition-colors duration-200 text-[#bbb] hover:text-cyan-400"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        <ul className='flex gap-10 list-none m-0 p-0 ml-16'>
            <li>
                <a href="https://github.com/JeoGarcia26" className="text-2xl font-bold no-underline transition-colors duration-200 text-[#bbb] hover:text-cyan-400 flex items-center" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jeovany-afonso-137791278/" className="text-2xl font-bold no-underline transition-colors duration-200 text-[#bbb] hover:text-cyan-400 flex items-center" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="mailto:geovanisassinda@gmail.com" className="text-2xl font-bold no-underline transition-colors duration-200 text-[#bbb] hover:text-cyan-400 flex items-center" aria-label="Email">
                    <FaEnvelope />
                </a>
            </li>
        </ul>
    </nav>

);

export default NavBar;
