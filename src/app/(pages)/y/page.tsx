'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FramerMotionFadeInComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-lvh w-full">
      <motion.div
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
      >
        <FadingText />
      </motion.div>
      <div className="max-h-max max-w-max overflow-y h-[10000px]">aze</div>
    </div>
  );
};

export default FramerMotionFadeInComponent;

const FadingText: React.FC = () => {
  return (
    <h1 className=" text-4xl font-bold bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text ">
      I&apos;m Fading in
    </h1>
  );
};
