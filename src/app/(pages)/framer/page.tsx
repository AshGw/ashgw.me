'use client';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <div className="rounded-md flex flex-col space-y-10 justify-center items-center  h-svh w-full ">
      <DraggableNoParent />
    </div>
  );
}

function DraggableNoParent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
        y: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-80 h-80 rounded-2xl"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
  );
}
