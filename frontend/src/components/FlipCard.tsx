import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { FlipCardProps } from '@/types/components';

export default function FlipCard({
  frontImage,
  width = '170px', 
  height = '200px', 
}: FlipCardProps) {
  return (
    <motion.div
      className="relative"
      style={{
        width,
        height,
        perspective: 1000,
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={frontImage}
            alt="Card image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
    </motion.div>
  );
}
