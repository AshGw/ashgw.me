'use client';
import React from 'react';
import { motion } from 'framer-motion';

export type HeadingProps = {
  children: React.ReactNode;
  id?: string;
};
export function Heading1({ children, id }: HeadingProps) {
  return (
    <motion.h1 id={id} className="font-extrabold my-2 text-[2.5rem]">
      {children}
    </motion.h1>
  );
}
export function Heading2({ children, id }: HeadingProps) {
  return (
    <h2 id={id} className="text-3xl font-bold dimmed-4">
      {children}
    </h2>
  );
}
export function Heading3({ children, id }: HeadingProps) {
  return (
    <h3 id={id} className="text-2xl font-bold dimmed-4">
      {children}
    </h3>
  );
}
