import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type IntroSectionProps = {
  onContinue: () => void;
};

const floatingEmojis = ["⛵", "🚂", "🚗", "✈️", "🚇"];

export function IntroSection({ onContinue }: IntroSectionProps) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      onClick={onContinue}
      className="hero-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "40px 20px",
      }}
    >
      <div className="grid-overlay" />

      {floatingEmojis.map((emoji, index) => (
        <motion.div
          key={emoji}
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, delay: index * 0.7 }}
          style={{
            position: "absolute",
            fontSize: "28px",
            opacity: 0.18,
            left: `${10 + index * 20}%`,
            top: `${15 + (index % 3) * 25}%`,
            pointerEvents: "none",
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 720 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 99,
            padding: "6px 16px",
            marginBottom: 28,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#818cf8",
              display: "inline-block",
            }}
          />
          Interactive Learning
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Transportation
          <br />
          <span style={{ color: "#818cf8" }}>in Britain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 48px",
          }}
        >
          From ancient wooden boats to supersonic jets — explore 10,000 years of
          British transport history through interactive videos and fascinating facts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            color: "#0f0f13",
            borderRadius: 99,
            padding: "14px 32px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            boxShadow: "0 0 40px rgba(129,140,248,0.25)",
            letterSpacing: "0.02em",
          }}
        >
          Start Exploring
          <ArrowRight size={16} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="scroll-indicator"
          style={{
            marginTop: 60,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'DM Sans'",
            fontSize: 12,
          }}
        >
          Tap anywhere to continue
        </motion.div>
      </div>
    </motion.div>
  );
}

