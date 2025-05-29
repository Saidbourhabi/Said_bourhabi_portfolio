import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';
import { RiArrowRightSFill, RiInstagramFill } from 'react-icons/ri';
import { FaSquareThreads, FaSquareXTwitter } from 'react-icons/fa6';
import { SiGumroad } from 'react-icons/si';
import BottomNav from '../../layouts/BottomNav';

const Home = () => {
    useEffect(() => {
        const handleResize = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[calc(100vh-2rem)] bg-gradient-to-br from-[#0b2042] via-[#0b2042] to-[#162e4d] px-4 sm:px-6 md:px-10 py-16 sm:py-20 relative overflow-hidden font-mono"
        >
            {/* Animated background elements */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className="absolute top-20 left-10 w-64 h-64 bg-[#753ce8]/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-64 h-64 bg-[#4ec9b0]/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.div 
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Introduction section */}
                <motion.div className="space-y-6 mb-10" variants={itemVariants}>
                    <motion.div 
                        className="text-gray-400 text-sm sm:text-base md:text-lg inline-block"
                        whileHover={{ scale: 1.05, x: 10 }}
                    >
                        Hi all. I am
                    </motion.div>
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold bg-gradient-to-r from-white via-[#753ce8] to-[#1100fc] bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        Said Bourhabi
                    </motion.h1>
                    <motion.div 
                        className="text-[#753ce8] text-xl sm:text-2xl md:text-3xl flex items-center group"
                        whileHover={{ x: 10 }}
                    >
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <RiArrowRightSFill className="text-2xl sm:text-3xl md:text-4xl" />
                        </motion.span>
                        <span className="ml-2">Front-end developer</span>
                    </motion.div>
                </motion.div>

                {/* Info card */}
                <motion.div 
                    className="space-y-8 bg-[#0b2042]/60 backdrop-blur-md p-8 rounded-lg border border-[#753ce8]/30 shadow-2xl"
                    variants={itemVariants}
                    whileHover={{ boxShadow: "0 0 30px rgba(117, 60, 232, 0.2)" }}
                >
                    {/* Contact Information */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <motion.div 
                            className="flex flex-col sm:flex-row sm:items-center gap-2 hover:bg-[#162e4d]/50 p-4 rounded-lg transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            <span className="text-[#753ce8] font-medium">const</span>
                            <span className="text-[#4ec9b0]">telephoneNum</span>
                            <span className="hidden sm:inline mx-2">=</span>
                            <motion.span 
                                className="text-[#ce9178] break-all select-all cursor-pointer"
                                whileHover={{ color: "#ffffff" }}
                            >
                                "+212 619 005 822"
                            </motion.span>
                            <span>;</span>
                        </motion.div>

                        <motion.div 
                            className="flex flex-col sm:flex-row sm:items-center gap-2 hover:bg-[#162e4d]/50 p-4 rounded-lg transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            <span className="text-[#753ce8] font-medium">const</span>
                            <span className="text-[#4ec9b0]">email</span>
                            <span className="hidden sm:inline mx-2">=</span>
                            <motion.span 
                                className="text-[#ce9178] break-all select-all cursor-pointer"
                                whileHover={{ color: "#ffffff" }}
                            >
                                "said.bourhabi@gmail.com"
                            </motion.span>
                            <span>;</span>
                        </motion.div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div 
                            className="text-gray-500 text-sm sm:text-base pl-4 border-l-2 border-[#753ce8]/30"
                            whileHover={{ x: 10, borderColor: "#753ce8" }}
                        >
                            // my social profiles
                        </motion.div>
                        
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <SiGumroad />, link: "gumroad.com/saidbourhabi" },
                                { icon: <RiInstagramFill />, link: "instagram.com/saidbourhabi" },
                                { icon: <FaSquareThreads />, link: "threads.com/saidbourhabi" },
                                { icon: <FaSquareXTwitter />, link: "twitter.com/saidbourhabi" }
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 group hover:bg-[#162e4d]/50 p-4 rounded-lg"
                                    whileHover={{ 
                                        scale: 1.02,
                                        x: 10,
                                        backgroundColor: "rgba(22, 46, 77, 0.5)"
                                    }}
                                >
                                    <motion.div
                                        className="text-[#753ce8] text-xl sm:text-2xl"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {social.icon}
                                    </motion.div>
                                    <motion.a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ce9178] hover:text-[#753ce8] transition-colors duration-200 text-sm sm:text-base truncate"
                                        whileHover={{ color: "#753ce8" }}
                                    >
                                        {social.link}
                                    </motion.a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <BottomNav />
        </motion.div>
    );
};

export default Home;