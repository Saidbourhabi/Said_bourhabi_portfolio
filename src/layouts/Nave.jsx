import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nave = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible((prevScrollPos > currentScrollPos || currentScrollPos < 10) && !isMenuOpen);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setVisible(true);
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        
        <nav className={`fixed w-full bg-[#0b2042] border-b border-[#753ce8] transition-all duration-300 z-50 ${visible ? 'top-0' : '-top-full'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className='text-[#4ec9b0] hover:text-[#753ce8] transition-colors duration-200 font-mono text-lg'>
                            Said-Bourhabi
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center'>
                        <Link 
                            to="/" 
                            className={`px-4 py-2 relative group ${isActive('/') ? 'bg-[#162e4d]' : ''}`}
                        >
                            <span className='text-[#cccccc] hover:text-white transition-colors duration-200 font-mono'>_hello</span>
                            {isActive('/') && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#753ce8]'></span>
                            )}
                        </Link>
                        <Link 
                            to="/about" 
                            className={`px-4 py-2 relative group ${isActive('/about') ? 'bg-[#162e4d]' : ''}`}
                        >
                            <span className='text-[#cccccc] hover:text-white transition-colors duration-200 font-mono'>_about-me</span>
                            {isActive('/about') && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#753ce8]'></span>
                            )}
                        </Link>
                        <Link 
                            to="/projects" 
                            className={`px-4 py-2 relative group ${isActive('/projects') ? 'bg-[#162e4d]' : ''}`}
                        >
                            <span className='text-[#cccccc] hover:text-white transition-colors duration-200 font-mono'>_projects</span>
                            {isActive('/projects') && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#753ce8]'></span>
                            )}
                        </Link>
                    </div>

                    {/* Contact - Desktop */}
                    <div className='hidden md:block'>
                        <Link 
                            to="/contact" 
                            className={`px-4 py-2 relative group ${isActive('/contact') ? 'bg-[#162e4d]' : ''}`}
                        >
                            <span className='text-[#cccccc] hover:text-white transition-colors duration-200 font-mono'>_contact-me</span>
                            {isActive('/contact') && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#753ce8]'></span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#162e4d] focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[#753ce8]">
                        <Link 
                            to="/" 
                            className={`block px-3 py-2 text-[#cccccc] hover:text-white transition-colors duration-200 font-mono hover:bg-[#162e4d] rounded-md ${isActive('/') ? 'bg-[#162e4d] border-l-2 border-[#753ce8]' : ''}`}
                        >
                            _hello
                        </Link>
                        <Link 
                            to="/about" 
                            className={`block px-3 py-2 text-[#cccccc] hover:text-white transition-colors duration-200 font-mono hover:bg-[#162e4d] rounded-md ${isActive('/about') ? 'bg-[#162e4d] border-l-2 border-[#753ce8]' : ''}`}
                        >
                            _about-me
                        </Link>
                        <Link 
                            to="/projects" 
                            className={`block px-3 py-2 text-[#cccccc] hover:text-white transition-colors duration-200 font-mono hover:bg-[#162e4d] rounded-md ${isActive('/projects') ? 'bg-[#162e4d] border-l-2 border-[#753ce8]' : ''}`}
                        >
                            _projects
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`block px-3 py-2 text-[#cccccc] hover:text-white transition-colors duration-200 font-mono hover:bg-[#162e4d] rounded-md ${isActive('/contact') ? 'bg-[#162e4d] border-l-2 border-[#753ce8]' : ''}`}
                        >
                            _contact-me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nave;