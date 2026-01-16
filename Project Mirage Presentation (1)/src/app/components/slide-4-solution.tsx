import { motion } from "motion/react";
import { GlassCard } from "@/app/components/glass-card";
import { useEffect, useState } from "react";

export function Slide4Solution() {
  const [flowStarted, setFlowStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFlowStarted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden p-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2
          className="text-white tracking-[0.2em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "2.5rem" }}
        >
          NEXUS ARCHITECTURE
        </h2>
      </motion.div>

      {/* Flow Chart */}
      <div className="relative w-full max-w-6xl flex items-center justify-between">
        {/* Input */}
        <GlassCard className="p-8 w-48 text-center" delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
              {/* Data Cube - Main Structure */}
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Front Face */}
                <motion.path
                  d="M 50 25 L 75 40 L 75 65 L 50 80 L 25 65 L 25 40 Z"
                  fill="rgba(0, 229, 255, 0.05)"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
                
                {/* Top Face */}
                <motion.path
                  d="M 50 25 L 75 40 L 50 55 L 25 40 Z"
                  fill="rgba(0, 229, 255, 0.15)"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
                
                {/* Right Face */}
                <motion.path
                  d="M 50 55 L 75 40 L 75 65 L 50 80 Z"
                  fill="rgba(0, 229, 255, 0.1)"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </motion.g>
              
              {/* Data Layers - Horizontal Lines */}
              {[0, 1, 2].map((i) => (
                <motion.line
                  key={`layer-${i}`}
                  x1={25 + i * 3}
                  y1={45 + i * 8}
                  x2={75 - i * 3}
                  y2={45 + i * 8}
                  stroke="#00E5FF"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.2, 0.6, 0.2] 
                  }}
                  transition={{
                    pathLength: { duration: 0.8, delay: 0.8 + i * 0.1 },
                    opacity: { duration: 2, delay: 1, repeat: Infinity }
                  }}
                />
              ))}
              
              {/* Lock Icon Overlay */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                {/* Lock Body */}
                <rect
                  x="42"
                  y="48"
                  width="16"
                  height="12"
                  rx="2"
                  fill="rgba(11, 16, 33, 0.9)"
                  stroke="#FF5252"
                  strokeWidth="1.5"
                />
                {/* Lock Shackle */}
                <path
                  d="M 45 48 L 45 43 Q 45 38 50 38 Q 55 38 55 43 L 55 48"
                  fill="none"
                  stroke="#FF5252"
                  strokeWidth="1.5"
                />
                {/* Keyhole */}
                <circle cx="50" cy="54" r="1.5" fill="#FF5252" />
              </motion.g>
              
              {/* Pulsing Corner Nodes */}
              {[
                { x: 50, y: 25 },
                { x: 75, y: 40 },
                { x: 25, y: 40 },
                { x: 50, y: 80 },
              ].map((node, i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={node.x}
                  cy={node.y}
                  r="2"
                  fill="#00E5FF"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1.3, 1],
                    opacity: [0, 1, 0.7]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + i * 0.1,
                  }}
                />
              ))}
              
              {/* Scanning Beam */}
              <motion.line
                x1="25"
                y1="40"
                x2="75"
                y2="65"
                stroke="#00E5FF"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2.5,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              
              {/* Binary Data Particles */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const radius = 40;
                const cx = 50 + Math.cos(angle) * radius;
                const cy = 52.5 + Math.sin(angle) * radius * 0.6;
                
                return (
                  <motion.text
                    key={`binary-${i}`}
                    x={cx}
                    y={cy}
                    fill="#00E5FF"
                    fontSize="4"
                    opacity="0.3"
                    fontFamily="'JetBrains Mono', monospace"
                    textAnchor="middle"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 1.8 + i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.text>
                );
              })}
            </svg>
            <p className="text-white tracking-[0.1em]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              STRUCTURED DATA
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              (Locked)
            </p>
          </div>
        </GlassCard>

        {/* Flow Line 1 */}
        {flowStarted && (
          <motion.div className="relative flex-1 h-1 mx-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="h-full origin-left bg-gradient-to-r from-[#00E5FF] to-[#9D4EDD]"
            />
            {/* Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ left: 0, opacity: 0 }}
                animate={{ left: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#00E5FF] rounded-full"
                style={{
                  boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                }}
              />
            ))}
          </motion.div>
        )}

        {/* TEE Engine */}
        <GlassCard className="p-8 w-64 text-center relative z-10" delay={0.4}>
          <div className="flex flex-col items-center gap-4">
            {/* Pulsating Circuit */}
            <svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
              fill="none"
            >
              {/* Circuit Board Base */}
              <rect x="10" y="10" width="80" height="80" fill="rgba(157, 78, 221, 0.05)" rx="4" />
              
              {/* Circuit Paths - Horizontal */}
              <motion.path
                d="M 20 30 L 40 30"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 60 30 L 80 30"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Circuit Paths - Vertical */}
              <motion.path
                d="M 30 20 L 30 40"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 70 60 L 70 80"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Circuit Paths to Center */}
              <motion.path
                d="M 30 40 L 40 50"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 70 60 L 60 50"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 40 30 L 50 40"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 60 30 L 50 40"
                stroke="#9D4EDD"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Circuit Nodes */}
              <motion.circle
                cx="30"
                cy="30"
                r="3"
                fill="#9D4EDD"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="70"
                cy="70"
                r="3"
                fill="#9D4EDD"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="40"
                cy="30"
                r="3"
                fill="#9D4EDD"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="30"
                r="3"
                fill="#9D4EDD"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Center Processing Core */}
              <motion.circle
                cx="50"
                cy="50"
                r="8"
                stroke="#9D4EDD"
                strokeWidth="2"
                fill="rgba(157, 78, 221, 0.2)"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="4"
                fill="#9D4EDD"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Outer Pulsating Ring */}
              <motion.circle
                cx="50"
                cy="50"
                r="15"
                stroke="#9D4EDD"
                strokeWidth="1.5"
                fill="none"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.9, 1.2, 0.9], opacity: [0, 0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Data Flow Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="1.5"
                  fill="#00E5FF"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                    path={i % 2 === 0 ? "M 30 30 L 50 50" : "M 70 70 L 50 50"}
                  />
                </motion.circle>
              ))}
              
              <defs>
                <filter id="circuitGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <p className="text-white tracking-[0.1em] text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              GenAI Engine
            </p>
            <p className="text-[#9D4EDD] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Security & Compliance by Design
            </p>
          </div>

          {/* Processing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={flowStarted ? { opacity: [0.3, 1, 0.3] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-lg border border-[#9D4EDD]"
            style={{
              boxShadow: "0 0 20px rgba(157, 78, 221, 0.5)",
            }}
          />
        </GlassCard>

        {/* Split Flow Container */}
        <div className="relative flex-1 flex flex-col gap-16 ml-8">
          {/* Output A - R&D */}
          <div className="flex items-center gap-4">
            {flowStarted && (
              <motion.div className="relative h-1 flex-1 origin-left">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-full bg-[#9D4EDD]"
                />
                {/* Purple Pulsating Dots */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8 + i * 0.5,
                      repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#C77DFF] rounded-full"
                    style={{
                      boxShadow: "0 0 10px rgba(199, 125, 255, 0.8)",
                    }}
                  />
                ))}
              </motion.div>
            )}
            <GlassCard className="p-6 w-56 text-center" delay={1}>
              <svg width="50" height="50" viewBox="0 0 60 60" fill="none" className="mx-auto mb-3">
                {/* Binary Waves */}
                <defs>
                  <style>
                    {`
                      .binary-text {
                        font-family: 'JetBrains Mono', monospace;
                        font-size: 7px;
                        font-weight: 700;
                        fill: #C77DFF;
                      }
                    `}
                  </style>
                  <filter id="binaryGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Wave 1 */}
                {['1', '0', '1', '1', '0', '1', '0', '1', '1'].map((bit, i) => (
                  <motion.text
                    key={`wave1-${i}`}
                    x={2 + i * 6.5}
                    y="8"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [8, 6, 6, 4, 2]
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 2 */}
                {['0', '1', '0', '1', '1', '0', '1', '0', '1'].map((bit, i) => (
                  <motion.text
                    key={`wave2-${i}`}
                    x={2 + i * 6.5}
                    y="15"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [15, 13, 13, 11, 9]
                    }}
                    transition={{
                      duration: 4,
                      delay: 0.3 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 3 */}
                {['1', '1', '0', '0', '1', '0', '1', '1', '0'].map((bit, i) => (
                  <motion.text
                    key={`wave3-${i}`}
                    x={2 + i * 6.5}
                    y="22"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [22, 20, 20, 18, 16]
                    }}
                    transition={{
                      duration: 4,
                      delay: 0.6 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 4 */}
                {['0', '1', '1', '0', '1', '1', '0', '0', '1'].map((bit, i) => (
                  <motion.text
                    key={`wave4-${i}`}
                    x={2 + i * 6.5}
                    y="29"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 29 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [29, 27, 27, 25, 23]
                    }}
                    transition={{
                      duration: 4,
                      delay: 0.9 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 5 */}
                {['1', '0', '0', '1', '0', '1', '1', '0', '0'].map((bit, i) => (
                  <motion.text
                    key={`wave5-${i}`}
                    x={2 + i * 6.5}
                    y="36"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [36, 34, 34, 32, 30]
                    }}
                    transition={{
                      duration: 4,
                      delay: 1.2 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 6 */}
                {['0', '1', '1', '1', '0', '0', '1', '0', '1'].map((bit, i) => (
                  <motion.text
                    key={`wave6-${i}`}
                    x={2 + i * 6.5}
                    y="43"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 43 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [43, 41, 41, 39, 37]
                    }}
                    transition={{
                      duration: 4,
                      delay: 1.5 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 7 */}
                {['1', '1', '0', '1', '0', '0', '1', '1', '0'].map((bit, i) => (
                  <motion.text
                    key={`wave7-${i}`}
                    x={2 + i * 6.5}
                    y="50"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [50, 48, 48, 46, 44]
                    }}
                    transition={{
                      duration: 4,
                      delay: 1.8 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Wave 8 */}
                {['0', '1', '0', '0', '1', '1', '0', '1', '1'].map((bit, i) => (
                  <motion.text
                    key={`wave8-${i}`}
                    x={2 + i * 6.5}
                    y="57"
                    className="binary-text"
                    filter="url(#binaryGlow)"
                    initial={{ opacity: 0, y: 57 }}
                    animate={{ 
                      opacity: [0, 0.9, 1, 0.9, 0],
                      y: [57, 55, 55, 53, 51]
                    }}
                    transition={{
                      duration: 4,
                      delay: 2.1 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {bit}
                  </motion.text>
                ))}
                
                {/* Flowing particles - brighter and more prominent */}
                {[...Array(10)].map((_, i) => (
                  <motion.circle
                    key={`particle-${i}`}
                    r="1.2"
                    fill="#C77DFF"
                    filter="url(#binaryGlow)"
                    initial={{ cx: 2, cy: 8 + (i % 8) * 7 }}
                    animate={{ 
                      cx: [2, 60],
                      opacity: [0, 1, 0.8, 0]
                    }}
                    transition={{
                      duration: 5,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </svg>
              <p className="text-white tracking-[0.1em] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                SYNTHETIC DATA
              </p>
              <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                for R&D
              </p>
            </GlassCard>
          </div>

          {/* Output B - Honey Data */}
          <div className="flex items-center gap-4">
            {flowStarted && (
              <motion.div className="relative h-1 flex-1 origin-left">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(157, 78, 221, 0.3) 0%, rgba(157, 78, 221, 0.1) 100%)",
                  }}
                />
                {/* Red Pulsating Dots */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2 + i * 0.5,
                      repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF5252] rounded-full"
                    style={{
                      boxShadow: "0 0 10px rgba(255, 82, 82, 0.8)",
                    }}
                  />
                ))}
              </motion.div>
            )}
            <GlassCard className="p-6 w-56 text-center opacity-60" delay={1.4}>
              <svg width="50" height="50" viewBox="0 0 60 60" fill="none" className="mx-auto mb-3">
                {/* Laser Emitters */}
                <rect x="2" y="15" width="6" height="6" fill="#FF5252" rx="1" />
                <rect x="2" y="28" width="6" height="6" fill="#FF5252" rx="1" />
                <rect x="2" y="41" width="6" height="6" fill="#FF5252" rx="1" />
                <rect x="52" y="15" width="6" height="6" fill="#FF5252" rx="1" />
                <rect x="52" y="28" width="6" height="6" fill="#FF5252" rx="1" />
                <rect x="52" y="41" width="6" height="6" fill="#FF5252" rx="1" />
                
                {/* Laser Beams */}
                <line x1="8" y1="18" x2="52" y2="18" stroke="#FF5252" strokeWidth="1.5" opacity="0.4" filter="url(#laserTripwireGlow)" />
                <line x1="8" y1="31" x2="52" y2="31" stroke="#FF5252" strokeWidth="1.5" opacity="0.4" filter="url(#laserTripwireGlow)" />
                <line x1="8" y1="44" x2="52" y2="44" stroke="#FF5252" strokeWidth="1.5" opacity="0.4" filter="url(#laserTripwireGlow)" />
                
                {/* Moving Laser Particles - Beam 1 */}
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={`beam1-${i}`}
                    cy="18"
                    r="2"
                    fill="#FF5252"
                    initial={{ cx: 8 }}
                    animate={{ cx: [8, 52, 8] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.7,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    filter="url(#laserTripwireGlow)"
                  />
                ))}
                
                {/* Moving Laser Particles - Beam 2 */}
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={`beam2-${i}`}
                    cy="31"
                    r="2"
                    fill="#FF5252"
                    initial={{ cx: 8 }}
                    animate={{ cx: [8, 52, 8] }}
                    transition={{
                      duration: 2,
                      delay: 0.3 + i * 0.7,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    filter="url(#laserTripwireGlow)"
                  />
                ))}
                
                {/* Moving Laser Particles - Beam 3 */}
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={`beam3-${i}`}
                    cy="44"
                    r="2"
                    fill="#FF5252"
                    initial={{ cx: 8 }}
                    animate={{ cx: [8, 52, 8] }}
                    transition={{
                      duration: 2,
                      delay: 0.6 + i * 0.7,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    filter="url(#laserTripwireGlow)"
                  />
                ))}
                
                {/* Laser Glow Dots at Emitters */}
                <motion.circle
                  cx="5"
                  cy="18"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                <motion.circle
                  cx="55"
                  cy="18"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                <motion.circle
                  cx="5"
                  cy="31"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                <motion.circle
                  cx="55"
                  cy="31"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                <motion.circle
                  cx="5"
                  cy="44"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                <motion.circle
                  cx="55"
                  cy="44"
                  r="2"
                  fill="#FF5252"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#laserTripwireGlow)"
                />
                
                <defs>
                  <filter id="laserTripwireGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              <p className="text-white tracking-[0.1em] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                HONEY-DATA
              </p>
              <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Trap
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}