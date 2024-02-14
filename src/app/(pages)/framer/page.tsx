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
      className="origin-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-80 h-80 rounded-2xl"
      initial={{
        opacity: 0,
        y: -200,
        borderRadius: 100,
        scale: 0,
        rotate: 360,
      }}
      animate={{
        opacity: 1,
        y: 0,
        borderRadius: 20,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 1,
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
