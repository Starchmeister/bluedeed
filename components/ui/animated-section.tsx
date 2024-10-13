"use client";

import React, { useEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

interface SquareProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: Readonly<SquareProps>) {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      {children}
    </motion.div>
  );
}
