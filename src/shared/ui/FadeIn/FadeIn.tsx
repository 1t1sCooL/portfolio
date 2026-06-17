"use client";
import { Reveal } from "@/shared/ui/Reveal";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
}

// Тонкая обёртка над Reveal (fade + сдвиг вверх) — сохраняет прежний API
// FadeIn, но без framer-motion.
export const FadeIn = ({ children, delay = 0, ...props }: FadeInProps) => (
  <Reveal variant="up" delay={delay} {...props}>
    {children}
  </Reveal>
);
