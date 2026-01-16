import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Slide3Threat() {
  const [showThreat, setShowThreat] = useState(false);

  // Generate tabular data rows for inside the fortress
  const generateDataRows = () => {
    const rows = [];
    const totalRows = 25;
    const redRowIndices = new Set([8, 12, 16, 20]); // Red rows representing insider threats
    
    const frenchLocations = ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Bordeaux", "Lille", "Rennes", "Strasbourg"];
    const frenchNames = ["Dubois", "Martin", "Bernard", "Moreau", "Laurent", "Simon", "Michel", "Garcia", "Leroy", "Rousseau", "Petit", "Durand", "Robert", "Richard", "Bonnet", "Lefebvre", "Girard", "Fontaine", "Mercier", "Blanc", "Chevalier", "Dumas", "Faure", "Renard", "Clement", "Gaillard", "Mathieu", "Masson", "Sanchez", "Denis"];
    const clientCategories = ["Enterprise", "Startup", "SMB", "Government", "Healthcare", "Finance", "Education", "Retail"];
    
    for (let i = 0; i < totalRows; i++) {
      const isRed = redRowIndices.has(i);
      rows.push({
        id: i,
        record: `REC${String(i + 1).padStart(3, '0')}`,
        user: isRed ? "insider_47" : `user_${Math.floor(Math.random() * 999) + 1}`,
        action: frenchNames[Math.floor(Math.random() * frenchNames.length)],
        data: clientCategories[Math.floor(Math.random() * clientCategories.length)],
        status: frenchLocations[Math.floor(Math.random() * frenchLocations.length)],
        isRed,
      });
    }
    return rows;
  };

  const [dataRows] = useState(generateDataRows());

  useEffect(() => {
    const timer = setTimeout(() => setShowThreat(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden p-4 md:p-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-28 md:top-32 left-1/2 transform -translate-x-1/2 text-center z-50 px-4"
      >
        <h2
          className="text-white tracking-[0.15em] md:tracking-[0.2em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "clamp(1rem, 3.5vw, 2rem)" }}
        >
          NO FORTRESS IS IMPREGNABLE
        </h2>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-4 md:gap-0 pt-24 md:pt-0">
        {/* Fortress Wall */}
        <div className="relative w-full max-w-[340px] h-[340px] md:w-[600px] md:h-[600px] md:max-w-none">
          {/* Outer Wall - High Tech Version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 rounded-lg border-2"
            style={{
              borderImage: "linear-gradient(135deg, #00E5FF, #9D4EDD, #00E5FF) 1",
              boxShadow: "0 0 40px rgba(0, 229, 255, 0.3), inset 0 0 40px rgba(0, 229, 255, 0.1)",
            }}
          >
            {/* Corner Tech Elements */}
            {[
              { pos: "top-0 left-0", rotate: 0 },
              { pos: "top-0 right-0", rotate: 90 },
              { pos: "bottom-0 left-0", rotate: -90 },
              { pos: "bottom-0 right-0", rotate: 180 },
            ].map((corner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className={`absolute ${corner.pos} w-12 h-12 md:w-20 md:h-20`}
                style={{ transform: `rotate(${corner.rotate}deg)` }}
              >
                {/* Tech Corner Design */}
                <svg width="80" height="80" viewBox="0 0 80 80" className="absolute top-0 left-0 w-full h-full">
                  <motion.path
                    d="M 0 15 L 0 0 L 15 0"
                    stroke="#00E5FF"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  />
                  <motion.path
                    d="M 5 20 L 5 5 L 20 5"
                    stroke="#00E5FF"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                  />
                  <motion.circle
                    cx="3"
                    cy="3"
                    r="2"
                    fill="#00E5FF"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  />
                  <motion.circle
                    cx="15"
                    cy="15"
                    r="1.5"
                    fill="#9D4EDD"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  />
                </svg>
              </motion.div>
            ))}

            {/* Animated Circuit Lines */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ 
                  duration: 2, 
                  delay: 0.6 + i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute"
                style={{
                  width: i < 10 ? "2px" : "100%",
                  height: i < 10 ? "100%" : "2px",
                  left: i < 10 ? `${(i + 1) * 10}%` : 0,
                  top: i >= 10 ? `${(i - 9) * 10}%` : 0,
                  background: i % 2 === 0 
                    ? "linear-gradient(180deg, transparent 0%, #00E5FF 50%, transparent 100%)"
                    : "linear-gradient(90deg, transparent 0%, #9D4EDD 50%, transparent 100%)",
                }}
              />
            ))}

            {/* Scanning Lines */}
            <motion.div
              className="absolute inset-0 rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
                style={{ opacity: 0.6 }}
                animate={{
                  top: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#9D4EDD] to-transparent"
                style={{ opacity: 0.6 }}
                animate={{
                  left: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Hexagonal Tech Nodes */}
            {[
              { x: "20%", y: "20%", delay: 1.2 },
              { x: "80%", y: "20%", delay: 1.4 },
              { x: "20%", y: "80%", delay: 1.6 },
              { x: "80%", y: "80%", delay: 1.8 },
              { x: "50%", y: "10%", delay: 2.0 },
              { x: "50%", y: "90%", delay: 2.2 },
              { x: "10%", y: "50%", delay: 2.4 },
              { x: "90%", y: "50%", delay: 2.6 },
            ].map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1],
                  opacity: [0, 1, 0.6],
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: node.delay,
                }}
              >
                <motion.div
                  className="w-full h-full bg-[#00E5FF] rounded-sm"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: node.delay,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Inner Safe Zone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute inset-8 md:inset-16 bg-white/5 backdrop-blur-xl rounded border border-white/10 overflow-hidden"
          >
            {/* Tabular Data Inside Fortress */}
            <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none p-2 md:p-6">
              <div className="flex flex-col gap-1.5 md:gap-2.5">
                {dataRows.map((row) => (
                  <motion.div
                    key={row.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ 
                      opacity: row.isRed ? 0.8 : 0.35,
                      x: 0
                    }}
                    transition={{ duration: 0.6, delay: 0.9 + row.id * 0.04 }}
                    className="flex text-[0.4rem] md:text-[0.65rem] whitespace-nowrap font-mono"
                    style={{ 
                      fontFamily: "'JetBrains Mono', monospace",
                      color: row.isRed ? "#FF5252" : "#00E5FF",
                      // Position row 12 (index 12) behind the center dot
                      zIndex: row.id === 12 ? -1 : 0,
                    }}
                  >
                    <span className="w-8 md:w-14 inline-block">{row.record}</span>
                    <span className="w-12 md:w-24 inline-block">{row.user}</span>
                    <span className="w-10 md:w-22 inline-block">{row.action}</span>
                    <span className="w-14 md:w-28 inline-block">{row.data}</span>
                    <span className="w-12 md:w-26 inline-block">{row.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Insider Threat Dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              showThreat
                ? {
                    scale: [0, 1.5, 1],
                    opacity: 1,
                  }
                : {}
            }
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ top: '50%' }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(76, 175, 80, 0.8)",
                  "0 0 40px rgba(255, 82, 82, 0.8)",
                  "0 0 20px rgba(255, 82, 82, 0.8)",
                ],
                backgroundColor: ["#4CAF50", "#FF5252", "#FF5252"],
              }}
              transition={{ duration: 1, delay: showThreat ? 0.3 : 0 }}
              className="w-8 h-8 rounded-full"
            />

            {/* Threat Ripples */}
            {showThreat &&
              [...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{
                    scale: [1, 3],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + i * 0.5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-[#FF5252]"
                />
              ))}
          </motion.div>

          {/* Alert Icon */}
          {showThreat && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 22h20L12 2z"
                  fill="rgba(255, 82, 82, 0.2)"
                  stroke="#FF5252"
                  strokeWidth="2"
                />
                <path d="M12 9v4" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="17" r="1" fill="#FF5252" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-white/5 border border-white/20 rounded-lg p-6 max-w-sm"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h3
            className="text-[#FF5252] tracking-[0.15em] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem" }}
          >
            CASE STUDY
          </h3>
          <p className="text-white/90 mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}>
            <span className="text-[#00E5FF]">Rippling vs. Deel</span>
          </p>
          <p className="text-white/70 mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
            Authorized access abused.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-3" />
          <p className="text-white/90 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}>
            Soft Interior:
          </p>
          <p className="text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
            Data is decrypted for authorized users. The insider threat moves freely within the perimeter.
          </p>
        </motion.div>

        {/* Case Study Card - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:hidden backdrop-blur-xl bg-white/5 border border-white/20 rounded-lg p-4 w-full max-w-[340px]"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h3
            className="text-[#FF5252] tracking-[0.12em] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}
          >
            CASE STUDY
          </h3>
          <p className="text-white/90 mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
            <span className="text-[#00E5FF]">Rippling vs. Deel</span>
          </p>
          <p className="text-white/70 mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
            Authorized access abused.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2" />
          <p className="text-white/90 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>
            Soft Interior:
          </p>
          <p className="text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
            Data is decrypted for authorized users. The insider threat moves freely within the perimeter.
          </p>
        </motion.div>
      </div>
    </div>
  );
}