import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Slide2Conflict() {
  const [showBounce, setShowBounce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBounce(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden p-8">
      <div className="w-full max-w-7xl h-full flex items-center gap-0">
        {/* Left Side - The Vault */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-full flex flex-col items-center justify-center relative"
          style={{ background: "linear-gradient(135deg, rgba(11, 16, 33, 1) 0%, rgba(26, 27, 65, 0.8) 100%)" }}
        >
          {/* High-Tech Vault Icon */}
          <div className="relative mt-16">
            <motion.svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Vault Door Base */}
              <motion.circle
                cx="80"
                cy="80"
                r="55"
                fill="rgba(11, 16, 33, 0.9)"
                stroke="url(#vaultRingGradient)"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
              
              {/* Outer Ring - Rotating */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "80px 80px" }}
              >
                <circle
                  cx="80"
                  cy="80"
                  r="50"
                  fill="none"
                  stroke="#00B8D4"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.6"
                />
                {/* Outer Ring Nodes */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  const x = 80 + Math.cos((angle * Math.PI) / 180) * 50;
                  const y = 80 + Math.sin((angle * Math.PI) / 180) * 50;
                  return (
                    <motion.circle
                      key={`outer-${i}`}
                      cx={x}
                      cy={y}
                      r="2.5"
                      fill={i % 2 === 0 ? "#00B8D4" : "#FF5252"}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                    />
                  );
                })}
              </motion.g>
              
              {/* Middle Ring - Counter Rotating */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "80px 80px" }}
              >
                <circle
                  cx="80"
                  cy="80"
                  r="42"
                  fill="none"
                  stroke="url(#vaultRingGradient)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                {/* Tech Segments on Middle Ring */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  const x1 = 80 + Math.cos((angle * Math.PI) / 180) * 38;
                  const y1 = 80 + Math.sin((angle * Math.PI) / 180) * 38;
                  const x2 = 80 + Math.cos((angle * Math.PI) / 180) * 46;
                  const y2 = 80 + Math.sin((angle * Math.PI) / 180) * 46;
                  return (
                    <motion.line
                      key={`seg-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={i % 3 === 0 ? "#FF5252" : "#00B8D4"}
                      strokeWidth="1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        delay: 0.8 + i * 0.05,
                        repeat: Infinity,
                      }}
                    />
                  );
                })}
              </motion.g>
              
              {/* Inner Circle - Vault Face */}
              <motion.circle
                cx="80"
                cy="80"
                r="35"
                fill="rgba(0, 11, 21, 0.8)"
                stroke="#00B8D4"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              
              {/* Locking Bolts - 4 Directions */}
              {[
                { angle: 0, delay: 1.0 },
                { angle: 90, delay: 1.1 },
                { angle: 180, delay: 1.2 },
                { angle: 270, delay: 1.3 },
              ].map((bolt, i) => {
                const x1 = 80 + Math.cos((bolt.angle * Math.PI) / 180) * 36;
                const y1 = 80 + Math.sin((bolt.angle * Math.PI) / 180) * 36;
                const x2 = 80 + Math.cos((bolt.angle * Math.PI) / 180) * 48;
                const y2 = 80 + Math.sin((bolt.angle * Math.PI) / 180) * 48;
                
                return (
                  <g key={`bolt-${i}`}>
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FF5252"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0.8],
                        opacity: [0, 1, 0.9]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: bolt.delay,
                      }}
                    />
                    {/* Bolt End Cap */}
                    <motion.circle
                      cx={x2}
                      cy={y2}
                      r="2.5"
                      fill="#FF5252"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.4, delay: bolt.delay + 0.3 }}
                    />
                  </g>
                );
              })}
              
              {/* Central Combination Dial */}
              <motion.g
                animate={{ rotate: [0, 360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "80px 80px" }}
              >
                <circle
                  cx="80"
                  cy="80"
                  r="20"
                  fill="none"
                  stroke="url(#dialGradient)"
                  strokeWidth="2"
                />
                
                {/* Dial Marks */}
                {[...Array(20)].map((_, i) => {
                  const angle = (i * 360) / 20;
                  const isLarge = i % 5 === 0;
                  const x1 = 80 + Math.cos((angle * Math.PI) / 180) * (isLarge ? 16 : 18);
                  const y1 = 80 + Math.sin((angle * Math.PI) / 180) * (isLarge ? 16 : 18);
                  const x2 = 80 + Math.cos((angle * Math.PI) / 180) * 20;
                  const y2 = 80 + Math.sin((angle * Math.PI) / 180) * 20;
                  
                  return (
                    <line
                      key={`mark-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#00B8D4"
                      strokeWidth={isLarge ? "1.5" : "1"}
                      opacity={isLarge ? "0.9" : "0.5"}
                    />
                  );
                })}
                
                {/* Dial Handle */}
                <motion.rect
                  x="78"
                  y="62"
                  width="4"
                  height="12"
                  rx="1"
                  fill="#FF5252"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                />
              </motion.g>
              
              {/* Center Hub */}
              <motion.circle
                cx="80"
                cy="80"
                r="8"
                fill="rgba(0, 11, 21, 0.9)"
                stroke="#00B8D4"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              />
              
              <motion.circle
                cx="80"
                cy="80"
                r="4"
                fill="#FF5252"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1],
                  opacity: [0, 1, 0.8]
                }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
              
              {/* Tech Panels Around Vault */}
              {[
                { x: 35, y: 35, w: 12, h: 12 },
                { x: 113, y: 35, w: 12, h: 12 },
                { x: 35, y: 113, w: 12, h: 12 },
                { x: 113, y: 113, w: 12, h: 12 },
              ].map((panel, i) => (
                <motion.g key={`panel-${i}`}>
                  <motion.rect
                    x={panel.x}
                    y={panel.y}
                    width={panel.w}
                    height={panel.h}
                    fill="none"
                    stroke="#00B8D4"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0.4] }}
                    transition={{ duration: 1, delay: 1.8 + i * 0.1 }}
                  />
                  <motion.line
                    x1={panel.x + 3}
                    y1={panel.y + 6}
                    x2={panel.x + 9}
                    y2={panel.y + 6}
                    stroke="#FF5252"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                  />
                </motion.g>
              ))}
              
              {/* Scanning Beam Effect */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "80px 80px" }}
              >
                <motion.line
                  x1="80"
                  y1="80"
                  x2="80"
                  y2="45"
                  stroke="#00B8D4"
                  strokeWidth="1"
                  opacity="0.6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0.6] }}
                  transition={{ delay: 2.2 }}
                />
                <motion.circle
                  cx="80"
                  cy="45"
                  r="2"
                  fill="#00B8D4"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1],
                    opacity: [0, 1, 0.8]
                  }}
                  transition={{ delay: 2.2 }}
                />
              </motion.g>
              
              <defs>
                <linearGradient id="vaultRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B8D4" />
                  <stop offset="50%" stopColor="#FF5252" />
                  <stop offset="100%" stopColor="#00B8D4" />
                </linearGradient>
                <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B8D4" />
                  <stop offset="100%" stopColor="#FF5252" />
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Orbital Rings */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className="w-56 h-56 rounded-full"
                style={{ 
                  border: "1px dashed rgba(0, 229, 255, 0.4)",
                }}
              />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className="w-64 h-64 rounded-full"
                style={{ 
                  border: "1px dashed rgba(255, 82, 82, 0.3)",
                }}
              />
            </motion.div>
            
            {/* Energy field particles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const radius = 100;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={`vault-energy-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: `${x}px`,
                    marginTop: `${y}px`,
                    background: i % 2 === 0 ? "#00E5FF" : "#FF5252",
                    boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(0, 229, 255, 0.8)" : "rgba(255, 82, 82, 0.8)"}`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1],
                    opacity: [0, 1, 0.6],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 2.2 + i * 0.1,
                  }}
                />
              );
            })}
            
            {/* Pulsing energy field */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div 
                className="w-52 h-52 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255, 82, 82, 0.4) 0%, rgba(0, 229, 255, 0.2) 50%, transparent 70%)",
                  filter: "blur(25px)"
                }}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 text-white tracking-[0.15em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "1.5rem" }}
          >
            THE VAULT
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-2 text-white/70 text-center px-8"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Cybersecurity
          </motion.p>
        </motion.div>

        {/* Center Divider Line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-[2px] h-full relative origin-top"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #FF5252 50%, transparent 100%)",
            boxShadow: "0 0 20px rgba(255, 82, 82, 0.8)",
          }}
        />

        {/* Right Side - The Laboratory */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-full flex flex-col items-center justify-center relative"
          style={{ background: "linear-gradient(225deg, rgba(11, 16, 33, 1) 0%, rgba(26, 27, 65, 0.5) 100%)" }}
        >
          {/* High-Tech Laboratory Icon */}
          <div className="relative mt-16">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Neural Network Grid */}
              {[...Array(6)].map((_, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const x = 30 + col * 30;
                const y = 30 + row * 30;
                
                return (
                  <g key={i}>
                    {/* Node */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="url(#labGradient)"
                      stroke="#00E5FF"
                      strokeWidth="1.5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1.2, 1], 
                        opacity: [0, 1, 0.8] 
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + i * 0.1,
                      }}
                    />
                    
                    {/* Inner glow */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#9D4EDD"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [0, 1],
                        opacity: [0, 1, 0.6]
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.7 + i * 0.1,
                      }}
                    />
                  </g>
                );
              })}
              
              {/* Connecting Lines - Horizontal */}
              {[0, 1, 3, 4].map((i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const x1 = 30 + col * 30;
                const y1 = 30 + row * 30;
                const x2 = x1 + 30;
                const y2 = y1;
                
                return (
                  <motion.line
                    key={`h-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: 1 + i * 0.1,
                    }}
                  />
                );
              })}
              
              {/* Connecting Lines - Vertical */}
              {[0, 1, 2].map((i) => {
                const x = 30 + i * 30;
                
                return (
                  <motion.line
                    key={`v-${i}`}
                    x1={x}
                    y1={30}
                    x2={x}
                    y2={60}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.3 + i * 0.1,
                    }}
                  />
                );
              })}
              
              {/* Connecting Lines - Diagonal */}
              {[
                { x1: 30, y1: 30, x2: 60, y2: 60, delay: 1.6 },
                { x1: 60, y1: 30, x2: 30, y2: 60, delay: 1.7 },
                { x1: 60, y1: 30, x2: 90, y2: 60, delay: 1.8 },
                { x1: 90, y1: 30, x2: 60, y2: 60, delay: 1.9 },
              ].map((line, i) => (
                <motion.line
                  key={`d-${i}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#9D4EDD"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: line.delay,
                  }}
                />
              ))}
              
              {/* Data Flow Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="2"
                  fill="#00E5FF"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath: `path('M ${30 + (i % 2) * 30} 30 L ${60} 60')`,
                  }}
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${2 + i * 0.5}s`}
                  >
                    <mpath href={`#path-${i}`} />
                  </animateMotion>
                </motion.circle>
              ))}
              
              {/* Hidden paths for particle animation */}
              <defs>
                <path id="path-0" d="M 30 30 L 60 60" />
                <path id="path-1" d="M 60 30 L 60 60" />
                <path id="path-2" d="M 90 30 L 60 60" />
                <path id="path-3" d="M 30 60 L 60 30" />
                
                <linearGradient id="labGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.5" />
                </linearGradient>
                
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#9D4EDD" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Orbital Rings */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className="w-56 h-56 rounded-full"
                style={{ 
                  border: "1px dashed rgba(0, 229, 255, 0.4)",
                }}
              />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className="w-64 h-64 rounded-full"
                style={{ 
                  border: "1px dashed rgba(255, 82, 82, 0.3)",
                }}
              />
            </motion.div>
            
            {/* Energy field particles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const radius = 100;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={`lab-energy-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: `${x}px`,
                    marginTop: `${y}px`,
                    background: i % 2 === 0 ? "#00E5FF" : "#9D4EDD",
                    boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(0, 229, 255, 0.8)" : "rgba(157, 78, 221, 0.8)"}`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1],
                    opacity: [0, 1, 0.6],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 2.2 + i * 0.1,
                  }}
                />
              );
            })}
            
            {/* Pulsing energy field */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div 
                className="w-52 h-52 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(0, 229, 255, 0.2) 50%, transparent 70%)",
                  filter: "blur(25px)"
                }}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-[136px] text-white tracking-[0.15em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "1.5rem" }}
          >
            THE LABORATORY
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-2 text-white/70 text-center px-8"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            AI Innovation
          </motion.p>
        </motion.div>
      </div>

      {/* Title at Top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center"
      >
        <h2
          className="text-white tracking-[0.2em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "2.5rem" }}
        >
          EXISTENTIAL CONFLICT
        </h2>
      </motion.div>

      {/* Data Paralysis Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF5252]/20 border border-[#FF5252]/40 px-6 py-3 rounded backdrop-blur-xl text-center"
      >
        <p
          className="text-[#FF5252] tracking-[0.15em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}
        >
          DATA PARALYSIS
        </p>
      </motion.div>
    </div>
  );
}