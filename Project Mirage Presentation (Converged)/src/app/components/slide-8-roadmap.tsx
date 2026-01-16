import { motion } from "motion/react";
import { GlassCard } from "@/app/components/glass-card";
import { useEffect, useState } from "react";

export function Slide8Roadmap() {
  const [drawLine, setDrawLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDrawLine(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const milestones = [
    {
      date: "Q1 2026",
      title: "Validation",
      description: "Establishing Market Validation & Interest",
      delay: 1,
    },
    {
      date: "Q2 2026",
      title: "Funding",
      description: "Product Development - Compliance & Strategic Partnerships",
      delay: 1.5,
    },
    {
      date: "Q3 2026",
      title: "Deployment",
      description: "Enterprise Beta with French Institutions",
      delay: 2,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden p-4 md:p-16 pt-24 md:pt-16">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center mt-4 md:mt-0">
        {/* Left - Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full md:w-auto"
        >
          <h2
            className="text-white tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-8 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "clamp(1.3rem, 4.5vw, 2.5rem)" }}
          >
            FROM PARALYSIS<br />TO SOVEREIGNTY
          </h2>

          <div className="w-24 md:w-32 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mb-4 md:mb-8" />

          <p
            className="text-white/70 tracking-[0.08em] md:tracking-[0.1em] leading-relaxed mb-6 md:mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.85rem, 2.2vw, 1.1rem)" }}
          >
            The future of data sovereignty isn't a choice between security and innovation—it's the synthesis of both.
          </p>
        </motion.div>

        {/* Right - Timeline */}
        <div className="flex-1 relative w-full overflow-y-auto md:overflow-y-visible pb-8 md:pb-0 max-h-[calc(100vh-380px)] md:max-h-none">
          {/* Laser Beam Line */}
          <svg className="absolute left-8 md:left-8 top-0 h-[125%] md:h-full" width="4">
            <defs>
              <linearGradient id="laserGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 229, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 229, 255, 1)" />
                <stop offset="100%" stopColor="rgba(157, 78, 221, 1)" />
              </linearGradient>
              <filter id="laserGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {drawLine && (
              <motion.rect
                x="0"
                y="0"
                width="4"
                height="100%"
                fill="url(#laserGradient)"
                filter="url(#laserGlow)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </svg>

          {/* Milestones */}
          <div className="space-y-12 pl-20 md:pl-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: milestone.delay }}
              >
                <GlassCard className="p-6 relative" delay={milestone.delay}>
                  {/* Node on Timeline - Enhanced with Glassmorphism */}
                  <div className="absolute -left-[62px] md:-left-[46px] top-1/2 transform -translate-y-1/2 md:-translate-x-1/2">
                    {/* Outer Pulsing Ring */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 0.2, 0.6]
                      }}
                      transition={{
                        duration: 2.5,
                        delay: milestone.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 w-[40px] h-[40px] rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(0, 229, 255, 0.2) 100%)",
                        filter: "blur(4px)",
                        transform: "translate(-50%, -50%)",
                        top: "50%",
                        left: "50%",
                      }}
                    />

                    {/* Glassmorphic Ring */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: milestone.delay }}
                      className="relative w-[32px] h-[32px] rounded-full backdrop-blur-sm"
                      style={{
                        background: "linear-gradient(135deg, rgba(157, 78, 221, 0.3) 0%, rgba(0, 229, 255, 0.2) 100%)",
                        border: "1.5px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 0 25px rgba(157, 78, 221, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {/* Inner Glowing Core */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: milestone.delay + 0.2 }}
                        className="absolute inset-[6px] rounded-full"
                        style={{
                          background: "radial-gradient(circle, #9D4EDD 0%, #7B3CB8 100%)",
                          boxShadow: "0 0 15px rgba(157, 78, 221, 0.9), inset 0 0 8px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {/* Highlight Dot */}
                        <motion.div
                          animate={{
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute top-[3px] left-[3px] w-[6px] h-[6px] rounded-full bg-white/80"
                          style={{
                            filter: "blur(1px)",
                          }}
                        />
                      </motion.div>

                      {/* Rotating Accent Ring */}
                      <motion.div
                        initial={{ rotate: 0, opacity: 0 }}
                        animate={{
                          rotate: 360,
                          opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          delay: milestone.delay
                        }}
                        className="absolute -inset-[4px] rounded-full"
                        style={{
                          background: "conic-gradient(from 0deg, transparent 0%, rgba(0, 229, 255, 0.6) 10%, transparent 20%, transparent 100%)",
                          filter: "blur(2px)",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p
                        className="text-[#00E5FF] tracking-[0.15em] mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}
                      >
                        {milestone.date}
                      </p>
                      <h3
                        className="text-white tracking-[0.1em] mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem" }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="text-white/70"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Constellation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() * 0.8 + 0.2 }}
            transition={{
              duration: 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 5px rgba(0, 229, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Contact Email - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-6 left-6"
      >
        <p
          className="text-white/60 tracking-[0.1em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}
        >
          info@nexusdefense.fr
        </p>
      </motion.div>
    </div>
  );
}
