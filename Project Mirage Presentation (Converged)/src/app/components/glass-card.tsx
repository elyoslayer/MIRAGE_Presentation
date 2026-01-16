import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${className}`}
      style={{
        backdropFilter: 'blur(40px)',
      }}
    >
      {children}
    </motion.div>
  );
}
