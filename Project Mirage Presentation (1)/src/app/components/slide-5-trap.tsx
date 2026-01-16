import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Slide5Trap() {
  const [typing, setTyping] = useState(false);
  const [typed, setTyped] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const sqlCommand = "SELECT * FROM user_credentials_plaintext_backup";

  // Generate tabular data rows
  const generateDataRows = () => {
    const rows = [];
    const totalRows = 40;
    const redRowIndices = new Set([7, 15, 23, 31]); // Random red rows representing threats
    
    for (let i = 0; i < totalRows; i++) {
      const isRed = redRowIndices.has(i);
      rows.push({
        id: i,
        userId: `USR${Math.floor(Math.random() * 9000) + 1000}`,
        action: isRed ? "SELECT_SENSITIVE" : ["SELECT", "INSERT", "UPDATE", "DELETE"][Math.floor(Math.random() * 4)],
        table: isRed ? "credentials_backup" : ["users", "orders", "products", "sessions"][Math.floor(Math.random() * 4)],
        timestamp: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        status: isRed ? "FLAGGED" : "OK",
        isRed,
      });
    }
    return rows;
  };

  const [dataRows] = useState(generateDataRows());

  useEffect(() => {
    const timer = setTimeout(() => setTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!typing) return;

    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= sqlCommand.length) {
        setTyped(sqlCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowAlert(true), 800);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [typing]);

  return (
    <div className="w-full h-screen flex flex-col items-center relative overflow-hidden p-16 pt-0">
      {/* Tabular Data Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 p-8">
          {dataRows.map((row) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: row.isRed ? 0.7 : 0.3, x: 0 }}
              transition={{ duration: 0.6, delay: row.id * 0.03 }}
              className="flex gap-6 text-xs whitespace-nowrap"
              style={{ 
                fontFamily: "'JetBrains Mono', monospace",
                color: row.isRed ? "#FF5252" : "#00E5FF"
              }}
            >
              <span className="w-20">{row.userId}</span>
              <span className="w-32">{row.action}</span>
              <span className="w-40">{row.table}</span>
              <span className="w-24">{row.timestamp}</span>
              <span className="w-20">{row.status}</span>
              <span className="flex-1 opacity-30">{"█".repeat(Math.floor(Math.random() * 30) + 10)}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 w-full h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #00E5FF 50%, transparent 100%)",
            boxShadow: "0 0 20px #00E5FF"
          }}
          animate={{
            top: ["0%", "100%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 mt-8 relative z-10"
      >
        <h2
          className="text-white tracking-[0.2em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "2.5rem" }}
        >
          THE TRAP
        </h2>
        <p
          className="text-[#00E5FF] text-center mt-2 tracking-[0.15em]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2rem" }}
        >
          Deterministic Post-Breach Detection
        </p>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full max-w-4xl mt-8"
      >
        {/* Terminal Header */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-t-lg border-b border-white/10"
          style={{ background: "rgba(11, 16, 33, 0.95)" }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5252]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <p className="ml-4 text-white/60 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Integrated Detection Mechanism
          </p>
        </div>

        {/* Terminal Body */}
        <motion.div
          animate={
            showAlert
              ? {
                  background: [
                    "rgba(11, 16, 33, 0.95)",
                    "rgba(255, 82, 82, 0.3)",
                    "rgba(11, 16, 33, 0.95)",
                    "rgba(255, 82, 82, 0.3)",
                    "rgba(11, 16, 33, 0.95)",
                  ],
                }
              : {}
          }
          transition={{ duration: 0.8 }}
          className="p-6 rounded-b-lg backdrop-blur-xl border border-white/10 min-h-[300px]"
          style={{ background: "rgba(11, 16, 33, 0.95)" }}
        >
          {/* SQL Prompt */}
          <div className="flex items-start gap-2 mb-4">
            <span className="text-[#00E5FF]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              database&gt;
            </span>
            <div className="flex-1">
              <p className="text-white" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem" }}>
                {typed}
                {typing && typed.length < sqlCommand.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-white ml-1"
                  />
                )}
              </p>
            </div>
          </div>

          {/* Alert Message */}
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 p-6 border-2 border-[#FF5252] rounded bg-[#FF5252]/10"
            >
              <div className="flex items-start gap-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#FF5252" strokeWidth="2" fill="rgba(255, 82, 82, 0.1)" />
                  <path d="M12 8v4" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1" fill="#FF5252" />
                </svg>
                <div className="flex-1">
                  <p
                    className="text-[#FF5252] mb-2 tracking-[0.1em]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem" }}
                  >
                    IMPOSSIBLE RESULT TRIGGERED
                  </p>
                  <p className="text-white/90 mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Honey-data row accessed: ROW_ID=0x7F3A92BC
                  </p>
                  <div className="w-full h-[1px] bg-[#FF5252]/30 my-3" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        User:
                      </p>
                      <p className="text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        internal_analyst_47
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Timestamp:
                      </p>
                      <p className="text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        2026-01-13 14:23:17 UTC
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        IP Address:
                      </p>
                      <p className="text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        10.0.42.158
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Status:
                      </p>
                      <p className="text-[#FF5252]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        THREAT DETECTED
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Glow Effect */}
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1, repeat: 2 }}
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              boxShadow: "0 0 60px rgba(255, 82, 82, 0.6)",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}