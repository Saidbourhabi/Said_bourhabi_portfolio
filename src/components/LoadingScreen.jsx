import React from 'react';
import { motion } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b2042] before:absolute before:inset-0 before:bg-[#0b2042]"
        >
            <div className="absolute inset-0 bg-[#0b2042]" />
            <motion.div
                className="flex flex-col items-center z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        rotate: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="text-[#753ce8] text-6xl mb-6 filter drop-shadow-lg"
                >
                    <VscVscode />
                </motion.div>
                <motion.div
                    className="w-48 h-1 bg-[#0b2042] rounded-full overflow-hidden relative"
                >
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#753ce8] to-transparent"
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mt-4 text-[#4ec9b0] text-sm font-mono tracking-wider"
                >
                    Loading<motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >...</motion.span>
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen; 