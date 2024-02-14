'use client';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <div className="rounded-md flex flex-col space-y-10 justify-center items-center  h-svh w-full ">
      <YeetMe />
      <Line />
      <YeetMe />
    </div>
  );
}

export function Line() {
  return (
    <div
      style={{
        height: '100%',
        width: '1px',
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '1px',
          top: '0px',
          background: 'linear-gradient(rgb(130, 78, 220), rgb(130, 78, 220))',
          transition: 'height 2s ease-out 0s',
          height: '100%',
        }}
      ></div>
    </div>
  );
}

function YeetMe() {
  const initial = {
    opacity: 0,
    borderRadius: 0,
    scale: 0,
    rotate: 360,
  };
  const animate = {
    opacity: 1,
    width: 160,
    height: 70,
    borderRadius: 20,
    scale: 1,
    boxShadow: '10px 10px 0 rgba(255, 46, 199, 0.2)',
    rotate: 0,
  };
  const transition = {
    duration: 1,
    type: 'keyframes',
    ease: 'easeInOut',
  };
  const whileHover = {
    cursor: 'grab',
  };
  const whileDrag = {
    cursor: 'grabbing',
  };
  return (
    <motion.button
      layout
      className="flex justify-center items-center origin-center bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 w-80 h-80"
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      drag
      whileDrag={whileDrag}
      dragConstraints={{
        top: -10,
        left: -10,
        right: 10,
        bottom: 10,
      }}
      dragMomentum={true}
      dragPropagation
    >
      <motion.div
        layout
        className="flex justify-center items-center origin-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-80 h-80"
        initial={initial}
        animate={animate}
        transition={transition}
        whileHover={whileHover}
        whileDrag={whileDrag}
        drag
      >
        <span className=" font-bold">yeet me</span>
      </motion.div>
    </motion.button>
  );
}
