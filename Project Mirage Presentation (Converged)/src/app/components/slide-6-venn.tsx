import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Slide6Venn() {
  const [showOverlap, setShowOverlap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlap(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 md:mb-16"
      >
        <h2
          className="text-white tracking-[0.15em] md:tracking-[0.2em] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "clamp(1.2rem, 4vw, 2.5rem)" }}
        >
          SOVEREIGN INNOVATION
        </h2>
        <p
          className="text-white/70 text-center mt-1 md:mt-2 tracking-[0.1em] md:tracking-[0.15em]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.75rem, 2.5vw, 1.2rem)" }}
        >
          Decoupling Utility from Privacy
        </p>
      </motion.div>

      {/* Venn Diagram - Desktop Horizontal Layout */}
      <div className="hidden md:block relative w-[800px] h-[500px] -mt-16" style={{ marginTop: "calc(-4rem - 7vh + 4vh)" }}>
        <svg width="800" height="500" viewBox="0 0 800 500" className="absolute inset-0">
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 229, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 229, 255, 0.05)" />
            </linearGradient>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(157, 78, 221, 0.3)" />
              <stop offset="100%" stopColor="rgba(157, 78, 221, 0.1)" />
            </linearGradient>
            <linearGradient id="overlapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(157, 78, 221, 0.6)" />
              <stop offset="50%" stopColor="rgba(157, 78, 221, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 229, 255, 0.3)" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left Circle - GDPR */}
          <motion.circle
            cx={showOverlap ? "310" : "400"}
            cy="215"
            r="171"
            fill="url(#blueGrad)"
            stroke="#00E5FF"
            strokeWidth="3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, cx: showOverlap ? 310 : 400 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            filter="url(#glow)"
          />

          {/* Right Circle - AI */}
          <motion.circle
            cx={showOverlap ? "490" : "400"}
            cy="215"
            r="171"
            fill="url(#redGrad)"
            stroke="#9D4EDD"
            strokeWidth="3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, cx: showOverlap ? 490 : 400 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            filter="url(#glow)"
          />
        </svg>

        {/* Labels */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={
            showOverlap
              ? { opacity: 1, x: 0, left: "-80px" }
              : { opacity: 1, x: 0, left: "calc(50% - 100px)" }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute text-center"
          style={{ width: "200px", top: "calc(50% - 7vh)", transform: "translateY(-30px)" }}
        >
          <p
            className="text-[#00E5FF] tracking-[0.1em] mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem" }}
          >
            Domestic Cybersecurity
          </p>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            European Data Sovereignty
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={
            showOverlap
              ? { opacity: 1, x: 0, right: "-80px" }
              : { opacity: 1, x: 0, right: "calc(50% - 100px)" }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute text-center"
          style={{ width: "200px", top: "calc(50% - 7vh)", transform: "translateY(-30px)" }}
        >
          <p
            className="text-[#00E5FF] tracking-[0.15em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem" }}
          >
            AI
          </p>
          <p
            className="text-[#00E5FF] tracking-[0.1em] mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem" }}
          >
            Acceleration
          </p>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Data Innovation & GDPR Compliance
          </p>
        </motion.div>

        {/* MIRAGE Label */}
        {showOverlap && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute transform -translate-x-1/2 text-center"
            style={{ left: "50.5%", top: "calc(215px - 3vh)", transform: "translate(-50%, -50%)", zIndex: 100, position: "relative" }}
          >
            <div className="relative" style={{ display: "inline-block", zIndex: 100 }}>
              {/* Cyan chromatic aberration layer - subtle */}
              <motion.p
                className="absolute tracking-[0.2em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "2rem",
                  color: "#00E5FF",
                  left: 0,
                  top: 0,
                  zIndex: 1,
                  opacity: 0.5,
                }}
                animate={{
                  x: [0.5, -0.5, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              >
                MIRAGE
              </motion.p>

              {/* Main white text layer */}
              <motion.p
                className="relative tracking-[0.2em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#FFFFFF",
                  zIndex: 3,
                  textShadow: "0 0 20px rgba(0, 229, 255, 0.8), 0 0 40px rgba(157, 78, 221, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)",
                  filter: "brightness(1.3) contrast(1.4)",
                  WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.3)",
                }}
              >
                MIRAGE
              </motion.p>

              {/* Small red glitch fragments */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: "10%",
                  top: "20%",
                  width: "8px",
                  height: "2px",
                  background: "#FF0055",
                  boxShadow: "0 0 4px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                  x: [0, 0, 0, 2, 0, 0, 0, -1, 0, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.1, 0.15, 0.16, 0.17, 0.4, 0.6, 0.61, 0.62, 1] }}
              />

              <motion.div
                className="absolute pointer-events-none"
                style={{
                  right: "15%",
                  top: "50%",
                  width: "12px",
                  height: "1px",
                  background: "#FF0055",
                  boxShadow: "0 0 4px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                  x: [0, 0, -3, 0, 0, 0, 2, 0, 0, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.11, 0.12, 0.3, 0.5, 0.51, 0.52, 0.8, 1] }}
              />

              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: "50%",
                  bottom: "10%",
                  width: "6px",
                  height: "2px",
                  background: "#FF0055",
                  boxShadow: "0 0 4px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                  y: [0, 0, 1, 0, 0, -1, 0, 0, 0, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.16, 0.17, 0.4, 0.41, 0.42, 0.6, 0.8, 1] }}
              />

              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: "30%",
                  top: "70%",
                  width: "10px",
                  height: "1px",
                  background: "#FF0055",
                  boxShadow: "0 0 4px #FF0055",
                }}
                animate={{
                  opacity: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                  x: [0, -2, 0, 0, 0, 1, 0, 0, 0, 0],
                }}
                transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.05, 0.06, 0.3, 0.5, 0.51, 0.52, 0.7, 0.9, 1] }}
              />

              <motion.div
                className="absolute pointer-events-none"
                style={{
                  right: "25%",
                  top: "15%",
                  width: "4px",
                  height: "3px",
                  background: "#FF0055",
                  boxShadow: "0 0 4px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                  y: [0, 0, 0, -1, 0, 0, 1, 0, 0, 0],
                }}
                transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.2, 0.25, 0.26, 0.27, 0.55, 0.56, 0.57, 0.8, 1] }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Venn Diagram - Mobile Vertical Layout */}
      <div className="md:hidden relative w-full max-w-[320px] h-[500px]">
        <svg width="320" height="500" viewBox="0 0 320 500" className="absolute inset-0">
          <defs>
            <linearGradient id="blueGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 229, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 229, 255, 0.05)" />
            </linearGradient>
            <linearGradient id="redGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(157, 78, 221, 0.3)" />
              <stop offset="100%" stopColor="rgba(157, 78, 221, 0.1)" />
            </linearGradient>
            <filter id="glowMobile" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Top Circle - GDPR */}
          <motion.circle
            cx="160"
            cy={showOverlap ? "180" : "250"}
            r="123"
            fill="url(#blueGradMobile)"
            stroke="#00E5FF"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, cy: showOverlap ? 180 : 250 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            filter="url(#glowMobile)"
          />

          {/* Bottom Circle - AI */}
          <motion.circle
            cx="160"
            cy={showOverlap ? "320" : "250"}
            r="123"
            fill="url(#redGradMobile)"
            stroke="#9D4EDD"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, cy: showOverlap ? 320 : 250 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            filter="url(#glowMobile)"
          />
        </svg>

        {/* Top Label - Cybersecurity */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={
            showOverlap
              ? { opacity: 1, y: 0, top: "5px" }
              : { opacity: 1, y: 0, top: "calc(50% - 80px)" }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute text-center left-1/2 transform -translate-x-1/2"
          style={{ width: "200px" }}
        >
          <p
            className="text-[#00E5FF] tracking-[0.1em] mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}
          >
            Domestic Cybersecurity
          </p>
          <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            European Data Sovereignty
          </p>
        </motion.div>

        {/* Bottom Label - AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            showOverlap
              ? { opacity: 1, y: 0, bottom: "-40px" }
              : { opacity: 1, y: 0, bottom: "calc(50% - 80px)" }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute text-center left-1/2 transform -translate-x-1/2"
          style={{ width: "200px" }}
        >
          <p
            className="text-[#00E5FF] tracking-[0.15em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem" }}
          >
            AI
          </p>
          <p
            className="text-[#00E5FF] tracking-[0.1em] mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}
          >
            Acceleration
          </p>
          <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            Data Innovation & GDPR Compliance
          </p>
        </motion.div>

        {/* MIRAGE Label - Mobile */}
        {showOverlap && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{ top: "235px", zIndex: 100 }}
          >
            <div className="relative" style={{ display: "inline-block", zIndex: 100 }}>
              {/* Cyan chromatic aberration layer - subtle */}
              <motion.p
                className="absolute tracking-[0.15em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  color: "#00E5FF",
                  left: 0,
                  top: 0,
                  zIndex: 1,
                  opacity: 0.5,
                }}
                animate={{
                  x: [0.5, -0.5, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              >
                MIRAGE
              </motion.p>

              {/* Main white text layer */}
              <motion.p
                className="relative tracking-[0.15em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  zIndex: 3,
                  textShadow: "0 0 15px rgba(0, 229, 255, 0.8), 0 0 30px rgba(157, 78, 221, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)",
                  filter: "brightness(1.3) contrast(1.4)",
                  WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.3)",
                }}
              >
                MIRAGE
              </motion.p>

              {/* Small red glitch fragments - scaled for mobile */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: "10%",
                  top: "20%",
                  width: "6px",
                  height: "1.5px",
                  background: "#FF0055",
                  boxShadow: "0 0 3px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                  x: [0, 0, 0, 1.5, 0, 0, 0, -0.5, 0, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.1, 0.15, 0.16, 0.17, 0.4, 0.6, 0.61, 0.62, 1] }}
              />

              <motion.div
                className="absolute pointer-events-none"
                style={{
                  right: "15%",
                  top: "50%",
                  width: "8px",
                  height: "1px",
                  background: "#FF0055",
                  boxShadow: "0 0 3px #FF0055",
                }}
                animate={{
                  opacity: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                  x: [0, 0, -2, 0, 0, 0, 1.5, 0, 0, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.11, 0.12, 0.3, 0.5, 0.51, 0.52, 0.8, 1] }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
