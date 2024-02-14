'use client';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <div className="rounded-md flex flex-col space-y-10 justify-center items-center  h-svh w-full ">
      <DraggableNoParent />
      <WhileInViewOnce />
      <DraggableNoParent />
    </div>
  );
}

function DraggableNoParent() {
  return (
    <motion.div
      layout
      className="origin-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-80 h-80"
      initial={{
        opacity: 0,
        y: -200,
        borderRadius: 0,
        scale: 0,
        rotate: 360,
      }}
      animate={{
        opacity: 1,
        y: 0,
        borderRadius: 20,
        scale: 1,
        boxShadow: '10px 10px 0 rgba(255, 46, 199, 0.2)',
        rotate: 0,
      }}
      transition={{
        duration: 1,
        type: 'spring',
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
        mass: 300,
        ease: 'easeInOut',
      }}
      drag
      whileHover={{
        cursor: 'grab',
      }}
      whileDrag={{
        cursor: 'grabbing',
      }}
      dragMomentum={true}
      dragPropagation
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
  );
}

function WhileInViewOnce() {
  return (
    <motion.div
      className=" font-bold text-3xl"
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
      Big smoka
    </motion.div>
  );
}
