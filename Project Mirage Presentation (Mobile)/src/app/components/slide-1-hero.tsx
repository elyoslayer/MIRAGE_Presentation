import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Slide1Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute flex flex-col items-center gap-4 md:gap-6 z-10 max-w-full"
      >
        <h1
          className="tracking-[0.3em] text-white text-center px-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "clamp(2rem, 8vw, 5rem)" }}
        >
          PROJECT MIRAGE
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: "min(400px, 80vw)" } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
        />
        <p
          className="text-[#00E5FF] tracking-[0.2em] text-center"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
        >
          Ending Data Paralysis
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 0.7 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-white/70 tracking-[0.15em] mt-2 md:mt-4 text-center px-4"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(0.8rem, 3vw, 1rem)" }}
        >
          Data protection into a pathway for AI innovation
        </motion.p>
      </motion.div>

      {/* Constellation Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() * 0.8 + 0.2 }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
            }}
          />
        ))}
      </div>
    </div>
  );
}