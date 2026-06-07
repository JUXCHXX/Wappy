"use client";
import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  const getZIndex = () => {
    if (position === "front") return 30;
    if (position === "middle") return 20;
    return 10;
  };

  const getTransform = () => {
    if (position === "front") return { y: 0, scale: 1 };
    if (position === "middle") return { y: 12, scale: 0.95 };
    return { y: 24, scale: 0.9 };
  };

  return (
    <motion.div
      drag={isFront}
      dragElastic={0.2}
      onDragStart={(e) => { dragRef.current = e.clientX; }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) { handleShuffle(); }
        dragRef.current = 0;
      }}
      animate={getTransform()}
      transition={{ duration: 0.35 }}
      style={{ zIndex: getZIndex() }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-blue/30 bg-night/80 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
    >
      <p className="text-xl text-white leading-relaxed">"{testimonial}"</p>
      <p className="text-sm text-sky font-medium">{author}</p>
    </motion.div>
  );
}
