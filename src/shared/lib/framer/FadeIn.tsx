"use client";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn = ({ children, delay = 0, ...props }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    {...props}
  >
    {children}
  </motion.div>
);
