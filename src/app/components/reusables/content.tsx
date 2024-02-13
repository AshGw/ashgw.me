'use client';
import { motion } from 'framer-motion';

export function TextContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="p-2 mx-2 font-normal dimmed-3"
    >
      {children}
    </motion.p>
  );
}
