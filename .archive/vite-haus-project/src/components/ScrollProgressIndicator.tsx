import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-foreground/20 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressIndicator;
