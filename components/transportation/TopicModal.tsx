import { type MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { Topic } from "./types";

type TopicModalProps = {
  onClose: () => void;
  topic: Topic | null;
};

type ExercisePanelProps = {
  topic: Topic;
};

function ExercisePanel({ topic }: ExercisePanelProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ padding: "8px 0" }}
    >
      <div style={{ marginTop: 24 }}>
        <button
          type="button"
          onClick={() => {
            setShowQuiz((current) => !current);
            setAnswers([]);
          }}
          style={{
            width: "100%",
            border: `1px solid ${topic.color}40`,
            background: `${topic.bg}12`,
            color: topic.color,
            borderRadius: 14,
            padding: "14px 16px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {showQuiz ? "Hide Exercise" : "Start Exercise"}
        </button>
      </div>

      {showQuiz && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginTop: 18 }}
        >
          <h4
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 14,
            }}
          >
            Exercise
          </h4>
          <div style={{ display: "grid", gap: 14 }}>
            {topic.quiz.map((question, questionIndex) => (
              <div
                key={question.question}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.6,
                    marginBottom: 12,
                  }}
                >
                  {questionIndex + 1}. {question.question}
                </p>
                <div style={{ display: "grid", gap: 10 }}>
                  {question.options.map((option, optionIndex) => {
                    const selectedOption = answers[questionIndex];
                    const hasAnswered = selectedOption !== undefined;
                    const isSelected = selectedOption === optionIndex;
                    const isCorrect = optionIndex === question.correctIndex;

                    let border = "1px solid rgba(255,255,255,0.08)";
                    let background = "rgba(255,255,255,0.03)";
                    let color = "rgba(255,255,255,0.78)";

                    if (hasAnswered && isSelected && isCorrect) {
                      border = `1px solid ${topic.color}66`;
                      background = `${topic.bg}22`;
                      color = topic.color;
                    } else if (hasAnswered && isSelected && !isCorrect) {
                      border = "1px solid rgba(239,68,68,0.5)";
                      background = "rgba(239,68,68,0.12)";
                      color = "#fca5a5";
                    } else if (hasAnswered && isCorrect) {
                      border = `1px solid ${topic.color}50`;
                      background = `${topic.bg}18`;
                      color = topic.color;
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => {
                            const next = [...current];
                            next[questionIndex] = optionIndex;
                            return next;
                          })
                        }
                        style={{
                          textAlign: "left",
                          borderRadius: 12,
                          padding: "12px 14px",
                          border,
                          background,
                          color,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    );
                  })}
                </div>
                {answers[questionIndex] !== undefined && (
                  <p
                    style={{
                      marginTop: 10,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color:
                        answers[questionIndex] === question.correctIndex
                          ? topic.color
                          : "#fca5a5",
                    }}
                  >
                    {answers[questionIndex] === question.correctIndex
                      ? "Correct answer"
                      : "Incorrect. The highlighted answer is correct."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function TopicModal({
  onClose,
  topic,
}: TopicModalProps) {
  return (
    <AnimatePresence>
      {topic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="modal-box"
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <div
              style={{
                height: 4,
                borderRadius: "28px 28px 0 0",
                background: topic.color,
              }}
            />

            <div className="modal-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    className="emoji-box"
                    style={{
                      background: `${topic.bg}22`,
                      borderColor: `${topic.color}30`,
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      fontSize: 28,
                    }}
                  >
                    {topic.emoji}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px, 3vw, 28px)",
                        fontWeight: 700,
                        lineHeight: 1.2,
                      }}
                    >
                      {topic.videoTitle}
                    </h3>
                  </div>
                </div>
                <button className="close-btn" onClick={onClose}>
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {topic.description}
              </p>
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#000",
                  border: `1px solid ${topic.color}30`,
                }}
              >
                <div style={{ aspectRatio: "16/9", width: "100%" }}>
                  <iframe
                    style={{ width: "100%", height: "100%", display: "block" }}
                    src={topic.embedUrl}
                    title={topic.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <ExercisePanel key={topic.id} topic={topic} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
