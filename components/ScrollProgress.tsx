"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999] pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3B4BDB 0%, #00B4D8 50%, #C9F700 100%)",
      }}
    />
  );
}
