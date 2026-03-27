export type Era = "Ancient" | "Industrial" | "Victorian" | "Modern";

export type Topic = {
  id: string;
  title: string;
  year: string;
  era: Era;
  videoTitle: string;
  description: string;
  embedUrl: string;
  emoji: string;
  color: string;
  bg: string;
  facts: string[];
  quiz: QuizQuestion[];
};

export type ActiveTab = "video" | "facts";

export type QuizQuestion = {
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
};
