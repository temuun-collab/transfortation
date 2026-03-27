import type { Era, Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "maritime",
    title: "Maritime",
    year: "8000–6000 BC",
    era: "Ancient",
    videoTitle: "Maritime Transport",
    description:
      "The history of British ships developed from simple wooden boats to powerful sailing ships, steamships, and modern naval vessels. This development helped Britain become one of the world’s greatest maritime nations.",
    embedUrl: "https://www.youtube.com/embed/vH4qQbgLYtU",
    emoji: "⛵",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    facts: [
      "Used animal skins over wooden frames",
      "Could carry up to 18 people",
      "Navigated by stars",
    ],
    quiz: [
      {
        question: "What was one of the earliest forms of British water transport?",
        options: ["Dugout canoes", "Steam ferries", "Jet boats", "Submarines"],
        correctIndex: 0,
      },
      {
        question: "Early boats were mainly used for fishing, trade, and what else?",
        options: ["Migration", "Racing", "Tourism", "Mining"],
        correctIndex: 0,
      },
      {
        question: "What helped Britain become a major maritime nation?",
        options: [
          "Development of ships over time",
          "Air travel expansion",
          "Railway tunnels",
          "Motorway building",
        ],
        correctIndex: 0,
      },
      {
        question: "Which material was sometimes used over wooden frames?",
        options: ["Animal skins", "Steel plates", "Plastic sheets", "Glass"],
        correctIndex: 0,
      },
      {
        question: "How did early sailors sometimes navigate?",
        options: ["By stars", "By radar", "By GPS", "By radio"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "wheeled-cart",
    title: "Wheeled Cart",
    year: "1817",
    era: "Industrial",
    videoTitle: "Wheeled Cart Development",
    description:
      "Early bicycle: Velocipede Invented in early 19th century No pedals Moved by pushing feet on the ground Made of wood and simple materials Slow and uncomfortable First step in bicycle development",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    emoji: "🛞",
    color: "#f59e0b",
    bg: "#fef9c3",
    facts: [
      "Horses pulled 10x their weight",
      "Roads were often muddy",
      "Coaches carried 6–8 passengers",
    ],
    quiz: [
      {
        question: "What powered most wheeled carts in 1817 Britain?",
        options: ["Horses", "Electric motors", "Steam engines", "Diesel engines"],
        correctIndex: 0,
      },
      {
        question: "The draisine is best described as an early what?",
        options: ["Bicycle-like vehicle", "Train carriage", "Taxi", "Tram"],
        correctIndex: 0,
      },
      {
        question: "What was a common problem with roads at that time?",
        options: ["They were muddy", "They were frozen year-round", "They were underwater", "They were made of glass"],
        correctIndex: 0,
      },
      {
        question: "Horse-drawn transport was important mainly for what?",
        options: ["Road travel", "Air travel", "Sea navigation", "Underground travel"],
        correctIndex: 0,
      },
      {
        question: "How many passengers could many coaches carry?",
        options: ["6–8", "20–30", "50–60", "100+"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "railroad",
    title: "Railroad",
    year: "1825",
    era: "Industrial",
    videoTitle: "Railroad Expansion",
    description:
      "The modern railroad began in Britain during the Industrial Revolution. In 1825, the world’s first public steam railway, the Stockton and Darlington Railway, opened in England.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    emoji: "🚂",
    color: "#ef4444",
    bg: "#fee2e2",
    facts: [
      "Top speed: 25 mph in 1825",
      "100,000 miles of track by 1900",
      "Changed work and tourism forever",
    ],
    quiz: [
      {
        question: "Which railway opened in 1825?",
        options: [
          "Stockton and Darlington Railway",
          "London Underground",
          "Great Western Highway",
          "Heathrow Express",
        ],
        correctIndex: 0,
      },
      {
        question: "Why was the 1825 railway important?",
        options: [
          "It was the first public steam railway",
          "It was the first airport rail link",
          "It crossed the English Channel",
          "It used electric trains first",
        ],
        correctIndex: 0,
      },
      {
        question: "What was an early top train speed in 1825?",
        options: ["25 mph", "5 mph", "80 mph", "150 mph"],
        correctIndex: 0,
      },
      {
        question: "Railways connected what over time?",
        options: ["Major British cities", "Only villages", "Only ports", "Only farms"],
        correctIndex: 0,
      },
      {
        question: "Railways transformed commerce and what else?",
        options: ["Daily life", "Ocean currents", "Castle building", "Weather forecasting"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "underground",
    title: "Underground",
    year: "1863",
    era: "Victorian",
    videoTitle: "The First Underground",
    description:
      "The London Underground was the world’s first railway system. It started in the 19th century and today is an important part of London’s transport. Back then, the city had problems like: Crowded streets, Too many horse carriages, Slow travel across town. To fix this, engineers decided to build a train line under the ground.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    emoji: "🚇",
    color: "#8b5cf6",
    bg: "#ede9fe",
    facts: [
      "Gas lamps lit the carriages",
      "Steam engines used inside tunnels",
      "Now carries 5 million daily",
    ],
    quiz: [
      {
        question: "What opened in London in 1863?",
        options: [
          "The Metropolitan Railway",
          "Heathrow Airport",
          "The Channel Tunnel",
          "The first motorway",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is the Metropolitan Railway famous?",
        options: [
          "It was the world's first underground passenger railway",
          "It was the first electric car factory",
          "It was the first airport terminal",
          "It was the first ship canal",
        ],
        correctIndex: 0,
      },
      {
        question: "How were early underground carriages lit?",
        options: ["Gas lamps", "LED strips", "Candles only", "Solar panels"],
        correctIndex: 0,
      },
      {
        question: "What type of engines were used in the tunnels at first?",
        options: ["Steam engines", "Jet engines", "Electric motors", "Horse power only"],
        correctIndex: 0,
      },
      {
        question: "About how many people ride it daily now?",
        options: ["5 million", "50 thousand", "500", "25 million"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "automobile",
    title: "Automobile",
    year: "1897",
    era: "Modern",
    videoTitle: "Automobile Era",
    description:
      "Britain's first motor car appeared in 1895, and by 1897 production had begun. The 'Red Flag Act' once required a man to walk in front of cars waving a red flag — it was repealed in 1896.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    emoji: "🚗",
    color: "#10b981",
    bg: "#d1fae5",
    facts: [
      "Speed limit was 14 mph",
      "Cars needed a 3-person crew",
      "Only the wealthy owned them initially",
    ],
    quiz: [
      {
        question: "When did production of British motor cars begin?",
        options: ["1897", "1750", "1914", "1945"],
        correctIndex: 0,
      },
      {
        question: "What law once affected early cars in Britain?",
        options: ["Red Flag Act", "Railway Act", "Harbor Act", "Aviation Code"],
        correctIndex: 0,
      },
      {
        question: "What did the Red Flag Act require?",
        options: [
          "A person walking in front with a red flag",
          "Cars to travel underground",
          "Drivers to wear uniforms",
          "Only two-wheeled cars",
        ],
        correctIndex: 0,
      },
      {
        question: "What was an early speed limit for cars?",
        options: ["14 mph", "60 mph", "100 mph", "5 mph in all cases"],
        correctIndex: 0,
      },
      {
        question: "Who mostly owned early cars at first?",
        options: ["The wealthy", "Schoolchildren", "Farm animals", "Everyone equally"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "airplane",
    title: "Airplane",
    year: "1908",
    era: "Modern",
    videoTitle: "Airplane Innovation",
    description:
      "The first powered flight in Britain took place in 1908. By WWI, Britain had over 2,000 military aircraft. Heathrow Airport, opened in 1946, would become the world's busiest international airport.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    emoji: "✈️",
    color: "#6366f1",
    bg: "#e0e7ff",
    facts: [
      "First flight lasted 27 seconds",
      "WWII pilots flew at 350+ mph",
      "Concorde reached Mach 2",
    ],
    quiz: [
      {
        question: "When did the first powered flight in Britain take place?",
        options: ["1908", "1808", "1939", "1969"],
        correctIndex: 0,
      },
      {
        question: "By WWI, Britain had over how many military aircraft?",
        options: ["2,000", "20", "200", "20,000"],
        correctIndex: 0,
      },
      {
        question: "What airport opened in 1946?",
        options: ["Heathrow Airport", "Gatwick Airport", "Manchester Airport", "Luton Airport"],
        correctIndex: 0,
      },
      {
        question: "How long did the first flight last?",
        options: ["27 seconds", "27 minutes", "2 hours", "5 seconds"],
        correctIndex: 0,
      },
      {
        question: "What speed milestone is associated with Concorde?",
        options: ["Mach 2", "10 mph", "Mach 5", "500 mph exactly"],
        correctIndex: 0,
      },
    ],
  },
];

export const eraColors: Record<Era, { dot: string; label: string }> = {
  Ancient: { dot: "#0ea5e9", label: "text-sky-600" },
  Industrial: { dot: "#f59e0b", label: "text-amber-600" },
  Victorian: { dot: "#8b5cf6", label: "text-violet-600" },
  Modern: { dot: "#10b981", label: "text-emerald-600" },
};

export const tabs = ["video", "facts"] as const;
