import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500); // Delay to show 100% briefly
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        className="text-white text-2xl font-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        kindly view it in desktop mode only <br />(i&apos;m still working on mobile view and <br /> you might face some issues.) 
      </motion.div>
    </div>
  );
};

export default Preloader;
