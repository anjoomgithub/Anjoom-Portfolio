import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <React.Fragment>
            <motion.div
                className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
            <motion.div
                className="custom-cursor-dot"
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 1000, damping: 28 }}
            />
        </React.Fragment>
    );
};

export default Cursor;
