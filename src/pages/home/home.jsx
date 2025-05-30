import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiArrowRightSFill, RiInstagramFill, RiTerminalBoxFill } from 'react-icons/ri';
import { FaSquareThreads, FaSquareXTwitter } from 'react-icons/fa6';
import { SiGumroad } from 'react-icons/si';
import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscAccount, VscSettingsGear, VscClose } from 'react-icons/vsc';
import BottomNav from '../../layouts/BottomNav';

const Home = () => {
    const sidebarIcons = [
        { icon: VscFiles, active: true },
        { icon: VscSearch, active: false },
        { icon: VscSourceControl, active: false },
        { icon: VscExtensions, active: false },
        { icon: VscAccount, active: false },
        { icon: VscSettingsGear, active: false }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[calc(100vh-2rem)] bg-[#0b2042] text-gray-300 font-mono overflow-hidden flex flex-col md:flex-row mt-16"
        >
            {/* VSCode Sidebar */}
            <motion.div 
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="w-full md:w-12 h-12 md:h-auto bg-[#0b2042] border-b md:border-b-0 md:border-r border-[#753ce8]/20 flex flex-row md:flex-col items-center justify-around md:justify-start md:py-4"
            >
                {sidebarIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`p-2 cursor-pointer relative ${
                            item.active ? 'text-white' : 'text-gray-500'
                        }`}
                        whileHover={{ scale: 1.1 }}
                    >
                        <item.icon className="text-xl" />
                        {item.active && (
                            <motion.div 
                                layoutId="sidebar-active"
                                className="absolute left-0 top-0 w-0.5 h-full bg-white"
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* File Explorer */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-48 border-r border-[#753ce8]/20 py-4 hidden md:block"
            >
                <div className="px-4 text-sm text-gray-400 mb-2">EXPLORER</div>
                <div className="px-4 py-2 bg-[#753ce8]/10 text-white cursor-pointer">
                    portfolio/
                </div>
                <div className="px-6 py-1 text-gray-400 cursor-pointer hover:bg-[#753ce8]/10">
                    profile.js
                </div>
                <div className="px-6 py-1 text-gray-400 cursor-pointer hover:bg-[#753ce8]/10">
                    contact.js
                </div>
            </motion.div>

            {/* Main Editor Area */}
            <motion.div className="flex-1 flex flex-col overflow-hidden">
                {/* Tabs */}
                <div className="flex items-center border-b border-[#753ce8]/20 overflow-x-auto">
                    <motion.div 
                        className="flex items-center px-4 py-2 bg-[#0b2042] border-r border-[#753ce8]/20 space-x-2 whitespace-nowrap"
                        whileHover={{ backgroundColor: 'rgba(117, 60, 232, 0.1)' }}
                    >
                        <span className="text-[#4ec9b0]">profile.js</span>
                        <VscClose className="text-gray-500 hover:text-white cursor-pointer" />
                    </motion.div>
                </div>

                {/* Code Area */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 p-2 sm:p-4 overflow-auto"
                >
                    <pre className="text-xs sm:text-sm">
                        <code>
                            {`class Developer {
    constructor() {
        this.name = "Said Bourhabi";
        this.role = "Frontend Developer";
        this.location = "Morocco";
        this.skills = [
            "React",
            "Next.js",
            "TailwindCSS",
            "TypeScript"
        ];
    }

    contact() {
        return {
            email: "abousaid11araqi@gmail.com",
            phone: "+212 619 005 822"
        };
    }

    social() {
        return [
            "github.com/saidbourhabi",
            "twitter.com/saidbourhabi",
            "instagram.com/saidbourhabi",
            "threads.com/saidbourhabi"
        ];
    }
}`.split('\n').map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#753ce8]/10 px-2 rounded whitespace-pre-wrap sm:whitespace-pre overflow-x-auto"
                                >
                                    <span className="text-gray-500 mr-4">{i + 1}</span>
                                    {line}
                                </motion.div>
                            ))}
                        </code>
                    </pre>
                </motion.div>

                {/* Terminal */}
                <motion.div 
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="h-24 sm:h-32 border-t border-[#753ce8]/20"
                >
                    <div className="flex items-center px-4 py-2 border-b border-[#753ce8]/20 bg-[#0b2042]">
                        <RiTerminalBoxFill className="text-[#753ce8] mr-2" />
                        <span className="text-sm">Terminal</span>
                    </div>
                    <div className="p-2 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center space-x-2 whitespace-nowrap">
                            <span className="text-[#753ce8]">→</span>
                            <span>const developer = new Developer();</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#4ec9b0] whitespace-nowrap">
                            <span>←</span>
                            <span>Ready to collaborate!</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <BottomNav />
        </motion.div>
    );
};

export default Home;