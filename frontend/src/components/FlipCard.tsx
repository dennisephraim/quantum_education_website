import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

interface FlipCardProps {
  frontImage: string;
  backTitle: string;
  backDescription: string;
  width?: string;
  height?: string;
}

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
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={frontImage}
            alt="Card image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-white p-4 shadow-lg flex flex-col items-center justify-center text-center"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
        </div>
      </div>
    </motion.div>
  );
}
