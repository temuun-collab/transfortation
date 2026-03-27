"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { IntroSection } from "./IntroSection";
import { pageStyles } from "./page-styles";
import { TimelineSection } from "./TimelineSection";
import type { ActiveTab } from "./types";

export function TransportationPage() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [, setHoveredId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("video");

  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  const openTopic = (id: string) => {
    setSelectedId(id);
    setActiveTab("video");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f13",
        color: "#fff",
        fontFamily: "'Georgia', serif",
      }}
    >
      <style>{pageStyles}</style>

      <AnimatePresence mode="wait">
        {showTimeline ? (
          <TimelineSection
            activeTab={activeTab}
            onCardHover={setHoveredId}
            onCloseModal={() => setSelectedId(null)}
            onSelectTopic={openTopic}
            onTabChange={setActiveTab}
            selectedId={selectedId}
          />
        ) : (
          <IntroSection onContinue={() => setShowTimeline(true)} />
        )}
      </AnimatePresence>
    </main>
  );
}

