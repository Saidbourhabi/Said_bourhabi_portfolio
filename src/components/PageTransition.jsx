import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.98
        },
        enter: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.645, 0.045, 0.355, 1],
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.98,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="w-full min-h-screen"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition; 