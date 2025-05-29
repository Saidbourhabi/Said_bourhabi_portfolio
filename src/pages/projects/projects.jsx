import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "VSCode Portfolio",
            description: "A unique portfolio website inspired by Visual Studio Code's interface, featuring dark theme and interactive elements",
            tech: ["React", "TailwindCSS", "Framer Motion"],
            github: "https://github.com/yourusername/vscode-portfolio",
            live: "https://your-portfolio.com",
            category: "Frontend"
        },
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with admin dashboard, user authentication, and payment integration",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/ecommerce",
            live: "https://ecommerce-demo.com",
            category: "Full Stack"
        },
        {
            title: "AI Image Generator",
            description: "Web application that generates images using AI, with custom prompt engineering and image manipulation",
            tech: ["React", "OpenAI API", "TailwindCSS"],
            github: "https://github.com/yourusername/ai-image-gen",
            live: "https://ai-image-gen.com",
            category: "AI/ML"
        },
        {
            title: "Real-time Chat App",
            description: "Modern chat application with real-time messaging, file sharing, and voice calls",
            tech: ["React", "Socket.io", "WebRTC", "Firebase"],
            github: "https://github.com/yourusername/chat-app",
            live: "https://chat-app-demo.com",
            category: "Full Stack"
        },
        {
            title: "Task Management System",
            description: "Collaborative task management tool with drag-and-drop interface and team features",
            tech: ["React", "Redux", "Node.js", "PostgreSQL"],
            github: "https://github.com/yourusername/task-manager",
            live: "https://task-manager-demo.com",
            category: "Full Stack"
        },
        {
            title: "Weather Dashboard",
            description: "Beautiful weather application with 7-day forecast, location search, and weather alerts",
            tech: ["React", "Weather API", "ChartJS"],
            github: "https://github.com/yourusername/weather-app",
            live: "https://weather-dashboard.com",
            category: "Frontend"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 50,
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-br from-[#0b2042] via-[#0b2042] to-[#162e4d] p-4 sm:p-6 md:p-10 font-mono"
        >
            <div className="max-w-6xl mx-auto pt-20">
                <motion.div 
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-[#4ec9b0] mb-4 tracking-tight">
                        Projects
                    </h1>
                    <p className="text-[#8b5cf6] text-lg">
                        A collection of my recent work and experiments
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-[#0b2042]/60 backdrop-blur-md border border-[#753ce8]/30 rounded-lg p-6 hover:border-[#753ce8] transition-all duration-300"
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 0 20px rgba(117, 60, 232, 0.2)",
                                y: -5
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold text-[#4ec9b0] tracking-tight">
                                    {project.title}
                                </h2>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#753ce8] hover:text-[#8b5cf6] transition-colors"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaGithub size={24} />
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#753ce8] hover:text-[#8b5cf6] transition-colors"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </motion.a>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <motion.div 
                                className="flex flex-wrap gap-2"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs font-medium bg-[#753ce8]/20 text-[#4ec9b0] rounded-full border border-[#753ce8]/30"
                                        whileHover={{ 
                                            backgroundColor: "rgba(117, 60, 232, 0.3)",
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0],
                                            transition: {
                                                rotate: {
                                                    duration: 0.3,
                                                    repeat: 0
                                                }
                                            }
                                        }}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div 
                                className="mt-4 text-xs text-[#8b5cf6] font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {project.category}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;