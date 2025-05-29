import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0b2042] border-t border-[#753ce8] text-[#cccccc] h-8 flex items-center justify-between px-2 sm:px-4 md:px-6 font-mono text-xs sm:text-sm z-50 backdrop-blur-md bg-opacity-80">
            {/* Left section with responsive spacing and overflow handling */}
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 text-[#4ec9b0] whitespace-nowrap">
                    <BiGitBranch className="text-[#753ce8] text-sm sm:text-base" />
                    <span className="hidden xs:inline">main</span>
                </div>
                <span className="text-[#666666] hidden xs:inline">|</span>
                <div className="flex items-center space-x-1 truncate">
                    <span className="text-[#4ec9b0] truncate">
                        <span className="hidden xs:inline">🚀</span> 
                        <span className="truncate">Portfolio v1.0.0</span>
                    </span>
                </div>
            </div>

            {/* Right section - Social Media with responsive visibility */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#753ce8] transition-colors duration-200 flex items-center space-x-1 group"
                    aria-label="GitHub"
                >
                    <FaGithub className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
                    <span className="hidden sm:inline text-xs">GitHub</span>
                </a>
                <span className="text-[#666666] hidden xs:inline">|</span>
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#753ce8] transition-colors duration-200 flex items-center space-x-1 group"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
                    <span className="hidden sm:inline text-xs">LinkedIn</span>
                </a>
                <span className="text-[#666666] hidden xs:inline">|</span>
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#753ce8] transition-colors duration-200 flex items-center space-x-1 group"
                    aria-label="Behance"
                >
                    <FaBehance className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200" />
                    <span className="hidden sm:inline text-xs">Behance</span>
                </a>
            </div>
        </div>
    );
};

export default BottomNav; 