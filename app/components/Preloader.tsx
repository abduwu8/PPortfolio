import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
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
