import { motion } from "framer-motion";
import styled from "styled-components";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.25;
    return {
      pathLength: 0.64,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export function ProgressCircle() {
  return (
    <>
      <motion.svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        initial="hidden"
        animate="visible"
      >
       <motion.circle
          cx="65"
          cy="65"
          r="45"
          stroke="#AEB9FF"
          fill = 'transparent'
          strokeWidth='10'
        />
        <motion.circle
          cx="65"
          cy="65"
          r="45"
          stroke="#7E6DE7"
          variants={draw}
          custom={1}
          fill = 'transparent'
          strokeLinecap='round'
          strokeWidth='10'
          transform='matrix(0,-1,1,0,0,130)'
        />
      </motion.svg>
    </>
  );
}
