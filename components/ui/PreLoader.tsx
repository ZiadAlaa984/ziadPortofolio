'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from '@/lib/data';

const words: string[] = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "مرحبا"];

interface Dimension {
    width: number;
    height: number;
}

export default function PreLoader() {
    const [index, setIndex] = useState<number>(0);
    const [dimension, setDimension] = useState<Dimension>({width: 0, height: 0});

    useEffect(() => {
        const handleResize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight});
        };

        // Initial dimension setup
        handleResize();

        // Update dimension on window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Add no-scroll class when the preloader is active
        document.body.classList.add('no-scroll');

        // Remove no-scroll class when the preloader is not active
        return () => document.body.classList.remove('no-scroll');
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="fixed inset-0 flex items-center justify-center bg-black z-50">
            {dimension.width > 0 && (
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter" className="absolute text-white text-5xl flex items-center z-10">
                        <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full overflow-hidden h-[calc(100%+300px)]">
                        <motion.path variants={curve} initial="initial" exit="exit" fill="#0c0a09"></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
}
