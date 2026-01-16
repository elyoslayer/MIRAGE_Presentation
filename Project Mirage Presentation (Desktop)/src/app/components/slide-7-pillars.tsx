import { motion } from "motion/react";
import { GlassCard } from "@/app/components/glass-card";

export function Slide7Pillars() {
  const pillars = [
    {
      title: "Security by Design",
      icon: "shield",
      description: ["Gradient Stand-ins", "Trusted Execution Environment", "Federated Learning"],
      color: "#00E5FF",
      delay: 0.2,
    },
    {
      title: "Proprietary Models",
      icon: "neurons",
      description: ["SOTA Tabular Models", "Hosted Domestically", "Mathematical & Empirical Data Auditing"],
      color: "#9D4EDD",
      delay: 0.4,
    },
    {
      title: "Oracle Native",
      icon: "database",
      description: ["Kernel-level Auditing", "Utilizing Existing Tools", "Without Added Latency"],
      color: "#00E5FF",
      delay: 0.6,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden p-16 pt-32">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2
          className="text-white tracking-[0.2em] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "2.5rem" }}
        >
          TECHNICAL FEATURES
        </h2>
      </motion.div>

      {/* Pillars */}
      <div className="flex gap-8 w-full max-w-6xl">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: pillar.delay }}
            className="flex-1"
          >
            <GlassCard className="p-8 h-[450px] flex flex-col items-center" delay={pillar.delay} hover={true}>
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-8"
              >
                {pillar.icon === "shield" && (
                  <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
                    {/* Outer Shield Frame */}
                    <motion.path
                      d="M50 10 L20 25 L20 45 C20 68 35 87 50 92 C65 87 80 68 80 45 L80 25 Z"
                      stroke={pillar.color}
                      strokeWidth="2"
                      fill={`${pillar.color}08`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: pillar.delay + 0.2 }}
                    />
                    
                    {/* Inner Shield Hexagon */}
                    <motion.path
                      d="M50 25 L35 33 L35 50 L50 58 L65 50 L65 33 Z"
                      stroke={pillar.color}
                      strokeWidth="1.5"
                      fill={`${pillar.color}15`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.5 }}
                      style={{ transformOrigin: "50px 41.5px" }}
                    />
                    
                    {/* Geometric Lock Pattern in Center */}
                    <motion.g
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.7 }}
                      style={{ transformOrigin: "50px 41.5px" }}
                    >
                      {/* Lock Body */}
                      <rect
                        x="43"
                        y="40"
                        width="14"
                        height="10"
                        rx="1.5"
                        fill="rgba(11, 16, 33, 0.9)"
                        stroke={pillar.color}
                        strokeWidth="1.5"
                      />
                      {/* Lock Shackle */}
                      <path
                        d="M 45 40 L 45 35 Q 45 30 50 30 Q 55 30 55 35 L 55 40"
                        fill="none"
                        stroke={pillar.color}
                        strokeWidth="1.5"
                      />
                      {/* Keyhole Glow */}
                      <circle cx="50" cy="45" r="1.5" fill={pillar.color}>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </motion.g>
                    
                    {/* Circuit Traces - Top Left */}
                    <motion.path
                      d="M 30 28 L 30 22 L 36 22"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.8 }}
                    />
                    
                    {/* Circuit Traces - Top Right */}
                    <motion.path
                      d="M 70 28 L 70 22 L 64 22"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.85 }}
                    />
                    
                    {/* Circuit Traces - Bottom Left */}
                    <motion.path
                      d="M 30 62 L 30 70 L 36 70"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.9 }}
                    />
                    
                    {/* Circuit Traces - Bottom Right */}
                    <motion.path
                      d="M 70 62 L 70 70 L 64 70"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.95 }}
                    />
                    
                    {/* Corner Nodes */}
                    {[
                      { x: 30, y: 28 },
                      { x: 70, y: 28 },
                      { x: 30, y: 62 },
                      { x: 70, y: 62 },
                    ].map((node, i) => (
                      <motion.circle
                        key={`corner-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r="2"
                        fill={pillar.color}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity, delay: pillar.delay + 1 + i * 0.2 },
                          opacity: { duration: 2, repeat: Infinity, delay: pillar.delay + 1 + i * 0.2 }
                        }}
                      />
                    ))}
                    
                    {/* Hexagon Corner Nodes */}
                    {[
                      { x: 50, y: 25 },
                      { x: 65, y: 33 },
                      { x: 65, y: 50 },
                      { x: 50, y: 58 },
                      { x: 35, y: 50 },
                      { x: 35, y: 33 },
                    ].map((node, i) => (
                      <motion.circle
                        key={`hex-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r="1.5"
                        fill={pillar.color}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: pillar.delay + 0.6 + i * 0.1 }}
                      />
                    ))}
                    
                    {/* Scanning Rings */}
                    <motion.circle
                      cx="50"
                      cy="41.5"
                      r="15"
                      stroke={pillar.color}
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ 
                        scale: [0.5, 1.8],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: pillar.delay + 1.2
                      }}
                    />
                    
                    <motion.circle
                      cx="50"
                      cy="41.5"
                      r="15"
                      stroke={pillar.color}
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ 
                        scale: [0.5, 1.8],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: pillar.delay + 2.2
                      }}
                    />
                    
                    {/* Data Flow Particles */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 45) * Math.PI / 180;
                      const startRadius = 20;
                      const endRadius = 35;
                      const startX = 50 + Math.cos(angle) * startRadius;
                      const startY = 41.5 + Math.sin(angle) * startRadius;
                      const endX = 50 + Math.cos(angle) * endRadius;
                      const endY = 41.5 + Math.sin(angle) * endRadius;
                      
                      return (
                        <motion.circle
                          key={`particle-${i}`}
                          r="1"
                          fill={pillar.color}
                          initial={{ cx: startX, cy: startY, opacity: 0 }}
                          animate={{
                            cx: [startX, endX, startX],
                            cy: [startY, endY, startY],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: pillar.delay + 1.5 + i * 0.15,
                            ease: "easeInOut"
                          }}
                        />
                      );
                    })}
                  </svg>
                )}

                {pillar.icon === "neurons" && (
                  <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
                    {/* Background Processing Grid */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{ duration: 0.8, delay: pillar.delay }}
                    >
                      <line x1="0" y1="50" x2="100" y2="50" stroke={pillar.color} strokeWidth="0.3" strokeDasharray="2,2" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke={pillar.color} strokeWidth="0.3" strokeDasharray="2,2" />
                    </motion.g>
                    
                    {/* Input Layer (left) - 3 neurons */}
                    <motion.g>
                      {[
                        { cx: 18, cy: 30 },
                        { cx: 18, cy: 50 },
                        { cx: 18, cy: 70 },
                      ].map((neuron, i) => (
                        <g key={`input-${i}`}>
                          {/* Outer Ring */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="5.5"
                            stroke={pillar.color}
                            strokeWidth="1"
                            fill="none"
                            opacity="0.4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: pillar.delay + 0.2 + i * 0.1 }}
                          />
                          {/* Core Neuron */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="4"
                            fill={`${pillar.color}30`}
                            stroke={pillar.color}
                            strokeWidth="1.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ 
                              scale: { duration: 2, repeat: Infinity, delay: pillar.delay + 0.2 + i * 0.1 },
                              initial: { duration: 0.6, delay: pillar.delay + 0.2 + i * 0.1 }
                            }}
                          />
                          {/* Center Glow */}
                          <circle cx={neuron.cx} cy={neuron.cy} r="1.5" fill={pillar.color}>
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                          </circle>
                        </g>
                      ))}
                    </motion.g>

                    {/* Hidden Layer (middle) - 4 neurons */}
                    <motion.g>
                      {[
                        { cx: 50, cy: 23 },
                        { cx: 50, cy: 40 },
                        { cx: 50, cy: 60 },
                        { cx: 50, cy: 77 },
                      ].map((neuron, i) => (
                        <g key={`hidden-${i}`}>
                          {/* Outer Ring */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="5.5"
                            stroke={pillar.color}
                            strokeWidth="1"
                            fill="none"
                            opacity="0.4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: pillar.delay + 0.4 + i * 0.1 }}
                          />
                          {/* Core Neuron */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="4"
                            fill={`${pillar.color}30`}
                            stroke={pillar.color}
                            strokeWidth="1.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ 
                              scale: { duration: 2, repeat: Infinity, delay: pillar.delay + 0.4 + i * 0.1 },
                              initial: { duration: 0.6, delay: pillar.delay + 0.4 + i * 0.1 }
                            }}
                          />
                          {/* Center Glow */}
                          <circle cx={neuron.cx} cy={neuron.cy} r="1.5" fill={pillar.color}>
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                          </circle>
                        </g>
                      ))}
                    </motion.g>

                    {/* Output Layer (right) - 2 neurons */}
                    <motion.g>
                      {[
                        { cx: 82, cy: 37 },
                        { cx: 82, cy: 63 },
                      ].map((neuron, i) => (
                        <g key={`output-${i}`}>
                          {/* Outer Ring */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="5.5"
                            stroke={pillar.color}
                            strokeWidth="1"
                            fill="none"
                            opacity="0.4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: pillar.delay + 0.7 + i * 0.1 }}
                          />
                          {/* Core Neuron */}
                          <motion.circle
                            cx={neuron.cx}
                            cy={neuron.cy}
                            r="4"
                            fill={`${pillar.color}30`}
                            stroke={pillar.color}
                            strokeWidth="1.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ 
                              scale: { duration: 2, repeat: Infinity, delay: pillar.delay + 0.7 + i * 0.1 },
                              initial: { duration: 0.6, delay: pillar.delay + 0.7 + i * 0.1 }
                            }}
                          />
                          {/* Center Glow */}
                          <circle cx={neuron.cx} cy={neuron.cy} r="1.5" fill={pillar.color}>
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                          </circle>
                        </g>
                      ))}
                    </motion.g>

                    {/* Connections - Input to Hidden (with varying weights/opacity) */}
                    {[
                      { x1: 18, y1: 30, x2: 50, y2: 23, weight: 0.6 },
                      { x1: 18, y1: 30, x2: 50, y2: 40, weight: 0.4 },
                      { x1: 18, y1: 30, x2: 50, y2: 60, weight: 0.3 },
                      { x1: 18, y1: 50, x2: 50, y2: 23, weight: 0.3 },
                      { x1: 18, y1: 50, x2: 50, y2: 40, weight: 0.6 },
                      { x1: 18, y1: 50, x2: 50, y2: 60, weight: 0.6 },
                      { x1: 18, y1: 50, x2: 50, y2: 77, weight: 0.4 },
                      { x1: 18, y1: 70, x2: 50, y2: 40, weight: 0.3 },
                      { x1: 18, y1: 70, x2: 50, y2: 60, weight: 0.4 },
                      { x1: 18, y1: 70, x2: 50, y2: 77, weight: 0.6 },
                    ].map((conn, i) => (
                      <motion.line
                        key={`conn-in-${i}`}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke={pillar.color}
                        strokeWidth={0.8 + conn.weight * 0.5}
                        opacity={conn.weight * 0.5}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: pillar.delay + 0.3 + i * 0.05 }}
                      />
                    ))}

                    {/* Connections - Hidden to Output */}
                    {[
                      { x1: 50, y1: 23, x2: 82, y2: 37, weight: 0.6 },
                      { x1: 50, y1: 23, x2: 82, y2: 63, weight: 0.3 },
                      { x1: 50, y1: 40, x2: 82, y2: 37, weight: 0.5 },
                      { x1: 50, y1: 40, x2: 82, y2: 63, weight: 0.4 },
                      { x1: 50, y1: 60, x2: 82, y2: 37, weight: 0.4 },
                      { x1: 50, y1: 60, x2: 82, y2: 63, weight: 0.5 },
                      { x1: 50, y1: 77, x2: 82, y2: 37, weight: 0.3 },
                      { x1: 50, y1: 77, x2: 82, y2: 63, weight: 0.6 },
                    ].map((conn, i) => (
                      <motion.line
                        key={`conn-out-${i}`}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke={pillar.color}
                        strokeWidth={0.8 + conn.weight * 0.5}
                        opacity={conn.weight * 0.5}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: pillar.delay + 0.6 + i * 0.05 }}
                      />
                    ))}

                    {/* Data Flow Particles - Input to Hidden */}
                    {[
                      { x1: 18, y1: 30, x2: 50, y2: 23 },
                      { x1: 18, y1: 50, x2: 50, y2: 40 },
                      { x1: 18, y1: 70, x2: 50, y2: 77 },
                    ].map((flow, i) => (
                      <motion.circle
                        key={`flow1-${i}`}
                        r="1.8"
                        fill={pillar.color}
                        initial={{ cx: flow.x1, cy: flow.y1, opacity: 0 }}
                        animate={{
                          cx: [flow.x1, flow.x2],
                          cy: [flow.y1, flow.y2],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                          delay: pillar.delay + 1 + i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Data Flow Particles - Hidden to Output */}
                    {[
                      { x1: 50, y1: 23, x2: 82, y2: 37 },
                      { x1: 50, y1: 60, x2: 82, y2: 63 },
                    ].map((flow, i) => (
                      <motion.circle
                        key={`flow2-${i}`}
                        r="1.8"
                        fill={pillar.color}
                        initial={{ cx: flow.x1, cy: flow.y1, opacity: 0 }}
                        animate={{
                          cx: [flow.x1, flow.x2],
                          cy: [flow.y1, flow.y2],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                          delay: pillar.delay + 1.5 + i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                    
                    {/* Corner Brackets - Technical Framing */}
                    <motion.path
                      d="M 8 15 L 8 8 L 15 8"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.9 }}
                    />
                    <motion.path
                      d="M 92 15 L 92 8 L 85 8"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.95 }}
                    />
                    <motion.path
                      d="M 8 85 L 8 92 L 15 92"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.0 }}
                    />
                    <motion.path
                      d="M 92 85 L 92 92 L 85 92"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.05 }}
                    />
                    
                    {/* Processing Indicator Lines */}
                    <motion.line
                      x1="10"
                      y1="50"
                      x2="90"
                      y2="50"
                      stroke={pillar.color}
                      strokeWidth="0.5"
                      strokeDasharray="4,4"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: [0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: pillar.delay + 1.5,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Layer Labels */}
                    <motion.text
                      x="18"
                      y="92"
                      fill={pillar.color}
                      fontSize="5"
                      opacity="0.4"
                      fontFamily="'JetBrains Mono', monospace"
                      textAnchor="middle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 1.2 }}
                    >
                      IN
                    </motion.text>
                    <motion.text
                      x="50"
                      y="92"
                      fill={pillar.color}
                      fontSize="5"
                      opacity="0.4"
                      fontFamily="'JetBrains Mono', monospace"
                      textAnchor="middle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 1.3 }}
                    >
                      PROC
                    </motion.text>
                    <motion.text
                      x="82"
                      y="92"
                      fill={pillar.color}
                      fontSize="5"
                      opacity="0.4"
                      fontFamily="'JetBrains Mono', monospace"
                      textAnchor="middle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 1.4 }}
                    >
                      OUT
                    </motion.text>
                    
                    {/* Processing Wave Effect */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="25"
                      stroke={pillar.color}
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{
                        scale: [0.5, 1.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: pillar.delay + 1.8,
                      }}
                    />
                  </svg>
                )}

                {pillar.icon === "database" && (
                  <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
                    {/* Main Database Cylinder - Top */}
                    <motion.ellipse
                      cx="50"
                      cy="20"
                      rx="28"
                      ry="10"
                      stroke={pillar.color}
                      strokeWidth="2"
                      fill={`${pillar.color}10`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.2 }}
                    />
                    
                    {/* Database Cylinder - Side Walls */}
                    <motion.path
                      d="M 22 20 L 22 60 C 22 65.5 34 70 50 70 C 66 70 78 65.5 78 60 L 78 20"
                      stroke={pillar.color}
                      strokeWidth="2"
                      fill={`${pillar.color}05`}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: pillar.delay + 0.4 }}
                    />
                    
                    {/* Second Layer Ellipse */}
                    <motion.ellipse
                      cx="50"
                      cy="30"
                      rx="28"
                      ry="10"
                      stroke={pillar.color}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.45 }}
                    />
                    
                    {/* Third Layer Ellipse */}
                    <motion.ellipse
                      cx="50"
                      cy="40"
                      rx="28"
                      ry="10"
                      stroke={pillar.color}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.5 }}
                    />
                    
                    {/* Fourth Layer Ellipse */}
                    <motion.ellipse
                      cx="50"
                      cy="50"
                      rx="28"
                      ry="10"
                      stroke={pillar.color}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.7"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.55 }}
                    />
                    
                    {/* Bottom Layer Ellipse */}
                    <motion.ellipse
                      cx="50"
                      cy="60"
                      rx="28"
                      ry="10"
                      stroke={pillar.color}
                      strokeWidth="2"
                      fill={`${pillar.color}15`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.6 }}
                    />
                    
                    {/* Kernel Core - Central Hexagon */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 0.7 }}
                    >
                      <path
                        d="M 50 35 L 57 39.5 L 57 48.5 L 50 53 L 43 48.5 L 43 39.5 Z"
                        fill="rgba(11, 16, 33, 0.95)"
                        stroke={pillar.color}
                        strokeWidth="1.5"
                      />
                      
                      {/* Inner Core Circle */}
                      <circle
                        cx="50"
                        cy="44"
                        r="3"
                        fill={pillar.color}
                      >
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </motion.g>
                    
                    {/* Data Connection Lines to Core */}
                    {[
                      { x1: 30, y1: 20, x2: 43, y2: 39.5 },
                      { x1: 70, y1: 20, x2: 57, y2: 39.5 },
                      { x1: 30, y1: 60, x2: 43, y2: 48.5 },
                      { x1: 70, y1: 60, x2: 57, y2: 48.5 },
                    ].map((line, i) => (
                      <motion.line
                        key={`connection-${i}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={pillar.color}
                        strokeWidth="0.8"
                        opacity="0.4"
                        strokeDasharray="2,2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: pillar.delay + 0.8 + i * 0.1 }}
                      />
                    ))}
                    
                    {/* Circuit Nodes on Database Edges */}
                    {[
                      { x: 30, y: 20 },
                      { x: 50, y: 13 },
                      { x: 70, y: 20 },
                      { x: 30, y: 30 },
                      { x: 70, y: 30 },
                      { x: 30, y: 40 },
                      { x: 70, y: 40 },
                      { x: 30, y: 50 },
                      { x: 70, y: 50 },
                      { x: 30, y: 60 },
                      { x: 50, y: 67 },
                      { x: 70, y: 60 },
                    ].map((node, i) => (
                      <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r="1.5"
                        fill={pillar.color}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: pillar.delay + 1 + i * 0.12
                        }}
                      />
                    ))}
                    
                    {/* Data Stream Indicators - Horizontal Lines */}
                    {[23, 33, 43, 53, 63].map((y, i) => (
                      <motion.g key={`stream-${i}`}>
                        <motion.line
                          x1="30"
                          y1={y}
                          x2="42"
                          y2={y}
                          stroke={pillar.color}
                          strokeWidth="1"
                          opacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 0.6, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: pillar.delay + 1.2 + i * 0.25
                          }}
                        />
                        <motion.line
                          x1="58"
                          y1={y}
                          x2="70"
                          y2={y}
                          stroke={pillar.color}
                          strokeWidth="1"
                          opacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 0.6, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: pillar.delay + 1.2 + i * 0.25
                          }}
                        />
                      </motion.g>
                    ))}
                    
                    {/* Orbital Scanning Ring */}
                    <motion.ellipse
                      cx="50"
                      cy="40"
                      rx="35"
                      ry="12"
                      stroke={pillar.color}
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0.6, 0],
                        scale: [0.9, 1.1, 0.9]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: pillar.delay + 1.5
                      }}
                    />
                    
                    {/* Data Particles Orbiting */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60) * Math.PI / 180;
                      const radiusX = 35;
                      const radiusY = 12;
                      const cx = 50 + Math.cos(angle) * radiusX;
                      const cy = 40 + Math.sin(angle) * radiusY;
                      
                      return (
                        <motion.circle
                          key={`orbit-${i}`}
                          r="1.2"
                          fill={pillar.color}
                          initial={{ cx, cy, opacity: 0 }}
                          animate={{
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: pillar.delay + 1.8 + i * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            begin={`${pillar.delay + 1.8 + i * 0.2}s`}
                          >
                            <mpath href="#orbitPath" />
                          </animateMotion>
                        </motion.circle>
                      );
                    })}
                    
                    {/* Hidden path for orbital motion */}
                    <defs>
                      <path
                        id="orbitPath"
                        d="M 85 40 A 35 12 0 1 1 15 40 A 35 12 0 1 1 85 40"
                      />
                    </defs>
                    
                    {/* Vertical Data Flow Lines */}
                    {[35, 50, 65].map((x, i) => (
                      <motion.line
                        key={`vflow-${i}`}
                        x1={x}
                        y1="20"
                        x2={x}
                        y2="60"
                        stroke={pillar.color}
                        strokeWidth="0.5"
                        opacity="0.2"
                        strokeDasharray="3,3"
                        initial={{ pathLength: 0 }}
                        animate={{
                          pathLength: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: pillar.delay + 2 + i * 0.25,
                          ease: "linear"
                        }}
                      />
                    ))}
                    
                    {/* Corner Brackets - Top Left */}
                    <motion.path
                      d="M 18 15 L 18 10 L 23 10"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.1 }}
                    />
                    
                    {/* Corner Brackets - Top Right */}
                    <motion.path
                      d="M 82 15 L 82 10 L 77 10"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.15 }}
                    />
                    
                    {/* Corner Brackets - Bottom Left */}
                    <motion.path
                      d="M 18 65 L 18 70 L 23 70"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.2 }}
                    />
                    
                    {/* Corner Brackets - Bottom Right */}
                    <motion.path
                      d="M 82 65 L 82 70 L 77 70"
                      stroke={pillar.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: pillar.delay + 1.25 }}
                    />
                    
                    {/* Binary Code Labels */}
                    <motion.text
                      x="12"
                      y="42"
                      fill={pillar.color}
                      fontSize="4"
                      opacity="0.4"
                      fontFamily="'JetBrains Mono', monospace"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: pillar.delay + 2
                      }}
                    >
                      01
                    </motion.text>
                    
                    <motion.text
                      x="84"
                      y="42"
                      fill={pillar.color}
                      fontSize="4"
                      opacity="0.4"
                      fontFamily="'JetBrains Mono', monospace"
                      textAnchor="end"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: pillar.delay + 2.5
                      }}
                    >
                      10
                    </motion.text>
                  </svg>
                )}
              </motion.div>

              {/* Title */}
              <h3
                className="tracking-[0.15em] mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  color: pillar.color,
                }}
              >
                {pillar.title}
              </h3>

              {/* Divider */}
              <div
                className="w-full h-[1px] mb-6"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${pillar.color}60 50%, transparent 100%)`,
                }}
              />

              {/* Description */}
              <div className="text-white/80 text-center px-4 leading-relaxed space-y-2">
                {pillar.description.map((line, idx) => (
                  <p
                    key={idx}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Pulse Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pillar.delay,
                }}
                className="mt-auto pt-6"
              >
                <div
                  className="w-16 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${pillar.color} 50%, transparent 100%)`,
                  }}
                />
              </motion.div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}