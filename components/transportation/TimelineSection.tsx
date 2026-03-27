import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

import { topics } from "./data";
import { TopicModal } from "./TopicModal";

type TimelineSectionProps = {
  onCardHover: (id: string | null) => void;
  onSelectTopic: (id: string) => void;
  onCloseModal: () => void;
  selectedId: string | null;
};

export function TimelineSection({
  onCardHover,
  onSelectTopic,
  onCloseModal,
  selectedId,
}: TimelineSectionProps) {
  const [expandedSummaryId, setExpandedSummaryId] = useState<string | null>(null);
  const selectedTopic = topics.find((topic) => topic.id === selectedId) ?? null;

  return (
    <motion.div
      key="timeline"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "100vh",
        padding: "32px 56px 48px",
        backgroundImage:
          "linear-gradient(rgba(15,15,19,0.88), rgba(15,15,19,0.92)), url('/explore.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ maxWidth: 1680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: 99,
              padding: "5px 14px",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a5b4fc",
            }}
          >
            History • Transport • Britain
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 54px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 14,
            }}
          >
            Development of British
            <br />
            <span style={{ color: "#818cf8" }}>Transportation</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            Select any era to watch a video and discover key facts
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            {/* {Object.entries(eraColors).map(([era, { dot }]) => (
              <div key={era} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className="timeline-dot" style={{ background: dot }} />
                <span
                  className="era-label"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {era}
                </span>
              </div>
            ))} */}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${topics.length}, minmax(0, 1fr))`,
            gap: 16,
            alignItems: "start",
          }}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="card-stack"
            >
              <div
                className="card"
                onClick={() => onSelectTopic(topic.id)}
                onMouseEnter={() => onCardHover(topic.id)}
                onMouseLeave={() => onCardHover(null)}
              >
                <div className="card-accent" style={{ background: topic.color }} />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    className="emoji-box"
                    style={{ background: `${topic.bg}20`, borderColor: `${topic.color}30`, flexShrink: 0 }}
                  >
                    {topic.emoji}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 14,
                        fontWeight: 700,
                        marginBottom: 4,
                        lineHeight: 1.2,
                      }}
                    >
                      {topic.title}
                    </h3>

                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: topic.color,
                      }}
                    >
                      {topic.year}
                    </div>
                  </div>
                </div>

                <button className="play-btn">
                  <Play size={13} fill="white" />
                  Watch Video
                  <ChevronRight size={13} style={{ marginLeft: "auto" }} />
                </button>
              </div>

              <div
                className="detail-card"
                style={{
                  borderColor: `${topic.color}25`,
                  boxShadow:
                    expandedSummaryId === topic.id
                      ? `0 24px 50px ${topic.color}18`
                      : `0 12px 30px ${topic.color}10`,
                  minHeight: 290,
                  maxHeight: expandedSummaryId === topic.id ? 560 : 290,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  transform: expandedSummaryId === topic.id ? "translateY(6px)" : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: topic.color,
                    marginBottom: 8,
                  }}
                >
                  About {topic.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.62)",
                    flex: 1,
                    display:
                      expandedSummaryId === topic.id ? "block" : "-webkit-box",
                    WebkitLineClamp:
                      expandedSummaryId === topic.id ? "unset" : 9,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {topic.summary}
                </p>
                {topic.summary.length > 220 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedSummaryId((current) =>
                        current === topic.id ? null : topic.id
                      )
                    }
                    style={{
                      marginTop: 12,
                      alignSelf: "flex-start",
                      border: "none",
                      background: "transparent",
                      color: topic.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {expandedSummaryId === topic.id ? "See less" : "See more"}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TopicModal
        onClose={onCloseModal}
        topic={selectedTopic}
      />
    </motion.div>
  );
}
