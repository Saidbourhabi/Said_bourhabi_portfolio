import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaSass, FaWindows, FaLinux, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiTailwindcss, SiAdobecreativecloud, SiFigma } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BiLogoVuejs } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
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

    const skillsData = [
        { icon: <FaHtml5 className="text-xl" />, name: "HTML" },
        { icon: <FaCss3 className="text-xl" />, name: "CSS" },
        { icon: <IoLogoJavascript className="text-xl" />, name: "JavaScript" },
        { icon: <FaReact className="text-xl" />, name: "React" },
        { icon: <SiTypescript className="text-xl" />, name: "TypeScript" },
        { icon: <BiLogoVuejs className="text-xl" />, name: "Vue.js" },
        { icon: <SiTailwindcss className="text-xl" />, name: "Tailwind" },
        { icon: <FaSass className="text-xl" />, name: "SASS" },
        { icon: <FaGit className="text-xl" />, name: "Git" }
    ];

    const toolsData = [
        { icon: <FaWindows className="text-xl" />, name: "Windows" },
        { icon: <FaLinux className="text-xl" />, name: "Linux" },
        { icon: <SiAdobecreativecloud className="text-xl" />, name: "Adobe Suite" },
        { icon: <SiFigma className="text-xl" />, name: "Figma" }
    ];

    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-[calc(100vh-2rem)] bg-gradient-to-br from-[#0b2042] via-[#0b2042] to-[#162e4d] p-4 sm:p-6 md:p-10 pt-10"
            >
                <motion.div 
                    className="flex-1 flex flex-col max-w-5xl mx-auto mt-10 w-full font-mono"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Main Content Area */}
                    <motion.div 
                        className="flex-1 bg-[#0b2042]/60 backdrop-blur-md rounded-lg border border-[#753ce8]/30 shadow-xl overflow-hidden"
                        whileHover={{ boxShadow: "0 0 20px rgba(117, 60, 232, 0.3)" }}
                    >
                        {/* File Header */}
                        <motion.div 
                            className="border-b border-[#753ce8]/30  p-2 text-[#4ec9b0] flex items-center"
                            variants={itemVariants}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <VscVscode className="mr-2" />
                            </motion.div>
                            <span>about.jsx</span>
                        </motion.div>

                        {/* Code Content */}
                        <div className="p-6 text-[#cccccc]">
                            <motion.div className="space-y-4" variants={containerVariants}>
                                {/* Comment Header */}
                                <motion.div 
                                    className="text-[#6A9955]"
                                    variants={itemVariants}
                                >
                                    /**
                                    <br /> * About Said Bourhabi
                                    <br /> * Front-end Developer & Web Designer
                                    <br /> */
                                </motion.div>

                                {/* Bio Section */}
                                <motion.div 
                                    className="space-y-2"
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-[#C586C0]">const</div>
                                    <div>
                                        <span className="text-[#4FC1FF]">bio</span> = {"{"}
                                    </div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">name:</span> <span className="text-[#CE9178]">"Said_Bourhabi"</span>,
                                    </motion.div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">role:</span> <span className="text-[#CE9178]">"Front-end_Developer"</span>,
                                    </motion.div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">location:</span> <span className="text-[#CE9178]">"Morocco & Türkiye"</span>,
                                    </motion.div>
                                    <div>{"}"}</div>
                                </motion.div>

                                {/* Education Section */}
                                <motion.div 
                                    className="space-y-2 mt-6"
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-[#C586C0]">const</div>
                                    <div>
                                        <span className="text-[#4FC1FF]">education</span> = {"{"}
                                    </div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">degree:</span> <span className="text-[#CE9178]">"Bachelor's in Computer Science"</span>,
                                    </motion.div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">university:</span> <span className="text-[#CE9178]">"University Hassan II"</span>,
                                    </motion.div>
                                    <motion.div 
                                        className="pl-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-[#9CDCFE]">year:</span> <span className="text-[#B5CEA8]">2019</span>
                                    </motion.div>
                                    <div>{"}"}</div>
                                </motion.div>

                                {/* Skills Section */}
                                <motion.div 
                                    className="mt-8"
                                    variants={itemVariants}
                                >
                                    <motion.div 
                                        className="text-[#6A9955]"
                                        whileHover={{ x: 5 }}
                                    >
                                        // Programming languages and tools I work with
                                    </motion.div>
                                    <motion.div 
                                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
                                        variants={containerVariants}
                                    >
                                        {skillsData.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center space-x-2 text-[#4ec9b0] p-2 rounded-md hover:bg-[#753ce8]/10"
                                                variants={itemVariants}
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(117, 60, 232, 0.1)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {skill.icon}
                                                </motion.div>
                                                <span>{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Operating Systems & Tools */}
                                    <motion.div className="mt-8" variants={itemVariants}>
                                        <motion.div 
                                            className="text-[#6A9955]"
                                            whileHover={{ x: 5 }}
                                        >
                                            // Operating Systems and Design Tools
                                        </motion.div>
                                        <motion.div 
                                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
                                            variants={containerVariants}
                                        >
                                            {toolsData.map((tool, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-center space-x-2 text-[#4ec9b0] p-2 rounded-md hover:bg-[#753ce8]/10"
                                                    variants={itemVariants}
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        backgroundColor: "rgba(117, 60, 232, 0.1)"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {tool.icon}
                                                    </motion.div>
                                                    <span>{tool.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                {/* Personal Note */}
                                <motion.div 
                                    className="mt-8"
                                    variants={itemVariants}
                                >
                                    <motion.div 
                                        className="text-[#6A9955]"
                                        whileHover={{ x: 5 }}
                                    >
                                        // A bit more about me
                                    </motion.div>
                                    <motion.div 
                                        className="mt-2 text-[#cccccc] p-4 rounded-md"
                                        whileHover={{ 
                                            x: 10,
                                            backgroundColor: "rgba(117, 60, 232, 0.05)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        I'm passionate about creating beautiful and functional web experiences. 
                                        I enjoy working in team environments and am always looking for ways to optimize 
                                        and improve solutions. Currently focusing on expanding my knowledge in modern 
                                        web technologies and best practices.
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default About;