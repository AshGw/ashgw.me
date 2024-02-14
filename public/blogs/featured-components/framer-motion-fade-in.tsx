'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FramerMotionFadeInComponent: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center items-center py-2"
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <FadingText />
    </motion.div>
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
