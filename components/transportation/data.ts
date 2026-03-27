import type { Era, Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "maritime",
    title: "Maritime",
    year: "8000–6000 BC",
    era: "Ancient",
    videoTitle: "Maritime Transport",
    description:
      "Sea transport played a key role in Britain’s global trade and empire. Large ships were used to carry goods between continents. Navigation technology improved sea travel over time. Today, cargo ships transport most of the world’s goods.",
    summary:
      "This video shows the development of maritime transport from early boats to modern ships. It explains how ancient people used simple wooden boats for fishing and travel across rivers and seas. It also shows how ships became larger and more powerful during the Industrial Revolution with steam engines. Today, modern ships use advanced technology and are important for global trade and long-distance travel.",
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
        question: "What were early British boats made of?",
        options: ["Plastic", "Wood", "Iron", "Stone"],
        correctIndex: 1,
      },
      {
        question: "When did Britain become a strong sea power?",
        options: ["10th–12th centuries", "13th–15th centuries", "16th–18th centuries", "19th–20th centuries"],
        correctIndex: 2,
      },
      {
        question: "What types of ships does Britain use today?",
        options: [
          "Only fishing boats",
          "Wooden sailing ships",
          "Naval ships, aircraft carriers, and large cargo ships",
          "Small river boats only",
        ],
        correctIndex: 2,
      },
      {
        question: "Why were ships important for Britain?",
        options: [
          "Britain is a desert country",
          "Britain is an island nation",
          "Britain has no rivers",
          "Britain has no roads"
        ],
        correctIndex: 1,
      },
      {
        question: "What material started to be used in shipbuilding in the 19th century?",
        options: [
          "Iron",
          "Paper",
          "Rubber",
          "Clay"
        ],
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
      "Wheeled carts were one of the earliest transport inventions in human history. They were mainly used in agriculture and trade. Animals like horses and oxen were used to pull them. This invention helped people move goods more easily over long distances.",
    summary:
      "This video shows the development of wheeled carts from ancient times to more advanced transport tools. It explains how early carts were made from wood and pulled by animals such as horses for carrying goods and people. It also shows how the invention of the wheel improved transportation and trade. Today, wheeled carts are still used in some areas, showing the importance of early transportation inventions.",
    embedUrl: "https://www.youtube.com/embed/9geT2x3CCuw",
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
        question: "What was the name of the first bicycle?",
        options: [
          "Safety Bicycle",
          "Velocipede",
          "Mountain Bike",
          "City Bike"
        ],
        correctIndex: 1,
      },
      {
        question: "What was the main feature of the Penny-Farthing bicycle?",
        options: [
          "Two equal-sized wheels",
          "A large back wheel",
          "A large front wheel",
          "An electric motor"
        ],
        correctIndex: 2,
      },
      {
        question: "What was special about the Safety Bicycle?",
        options: [
          "It had a large front wheel",
          "It had equal wheels and a chain drive",
          "It used an electric motor",
          "It had no pedals"
        ],
        correctIndex: 1,
      },
      {
        question: "What types of bicycles became popular in the 20th century for sports?",
        options: [
          "BMX and Mountain Bikes",
          "Velocipede",
          "Penny-Farthing",
          "Safety Bicycle"
        ],
        correctIndex: 0,
      },
      {
        question: "Which is an example of modern bicycle development?",
        options: [
          "High Wheel Bike",
          "Racing Bike",
          "Bike Sharing and E-Bikes",
          "Velocipede"
        ],
        correctIndex: 2,
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
      "Railways helped transport heavy goods during the Industrial Revolution. Steam engines were later replaced by diesel and electric trains. High-speed trains made long-distance travel faster and more comfortable. Today, rail systems are important for both urban and national transport.",
    summary:
      "This video shows the development of the railroad from early wagonways to modern train systems. It explains how the first railways were built in the 19th century using steam locomotives for transporting goods and passengers. It also shows how trains became faster and more efficient with the introduction of electric and high-speed rail. Today, railroads are an important part of transportation, helping millions of people travel quickly and safely.",
    embedUrl: "https://www.youtube.com/embed/XYJStb0RRkE",
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
        question: "Who built the first successful steam locomotive used on railroads?",
        options: [
          "Isambard Kingdom Brunel",
          "George Stephenson",
          "James Watt",
          "Thomas Newcomen"
        ],
        correctIndex: 1,
      },
      {
        question: "Which railway opened in 1825 as the first public steam railway?",
        options: [
          "Great Western Railway",
          "London Underground",
          "Stockton and Darlington Railway",
          "Liverpool Street Railway"
        ],
        correctIndex: 2,
      },
      {
        question: "Which locomotive won the Rainhill Trials in 1829?",
        options: [
          "Mallard",
          "Flying Scotsman",
          "Locomotion No. 1",
          "Stephenson’s Rocket"
        ],
        correctIndex: 3,
      },
      {
        question: "What was the main purpose of early railways in the UK?",
        options: [
          "Tourism",
          "Air travel",
          "Moving coal and goods",
          "Personal cars"
        ],
        correctIndex: 2,
      },
      {
        question: "Which railway was the first to offer regular passenger service between cities?",
        options: [
          "Liverpool and Manchester Railway",
          "Great Northern Railway",
          "East Coast Main Line",
          "Crossrail"
        ],
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
      "The underground system was built to reduce traffic in crowded cities. It became a fast way to travel without using roads. Different lines connect many parts of the city. Today, it is one of the most efficient urban transport systems.",
    summary:
      "This video shows the development of the London Underground from its early beginnings to the modern system. It explains how the first underground railway opened in 1863 using steam trains, later changing to electric trains. It also shows how the network expanded across London and became one of the busiest transport systems in the world. Today, it includes modern trains, advanced technology, and many lines that help millions of people travel every day.",
    embedUrl: "https://www.youtube.com/embed/XgpnUdc0n9c",
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
        question: "Why is the London Underground called “the Tube”?",
        options: [
          "Because it is very long",
          "Because trains are fast",
          "Because the tunnels are round shape",
          "Because it is underground"
        ],
        correctIndex: 2,
      },
      {
        question: "What was the first Underground line called?",
        options: [
          "Central Line",
          "Metropolitan Line",
          "Northern Line",
          "Jubilee Line"
        ],
        correctIndex: 1,
      },
      {
        question: "What type of trains were first used in the Underground?",
        options: [
          "Electric trains",
          "Diesel trains",
          "Steam trains",
          "Bullet trains"
        ],
        correctIndex: 2,
      },
      {
        question: "What replaced steam trains later?",
        options: [
          "Gas trains",
          "Electric trains",
          "Solar trains",
          "Horse trains"
        ],
        correctIndex: 1,
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
      "Cars became popular in the 20th century and changed daily life and cities. Early cars used petrol engines, but today many use electric power. Roads and highways were built to support growing traffic. Now, smart technology and self-driving systems are being developed.",
    summary:
      "This video shows the development of the automobile from its early invention to modern cars. It explains how the first motor vehicles were created in the late 19th century, starting with simple engines and basic designs. It also shows how cars became faster, safer, and more comfortable over time. Today, automobiles include electric vehicles, advanced technology, and modern features that help people travel easily every day.",
    embedUrl: "https://www.youtube.com/embed/2JCGx6xGaQQ",
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
        question: "Which of the following cars was produced first?",
        options: [
          "Rolls-Royce Silver Ghost",
          "Mini",
          "Daimler Motor Carriage",
          "McLaren F1"
        ],
        correctIndex: 2,
      },
      {
        question: "Which car was produced in 1907?",
        options: [
          "Mini",
          "Rolls-Royce Silver Ghost",
          "Jaguar I-PACE",
          "McLaren F1"
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is an electric car?",
        options: [
          "Daimler Motor Carriage",
          "Rolls-Royce Phantom",
          "Jaguar I-PACE",
          "Mini"
        ],
        correctIndex: 2,
      },
      {
        question: "Which car was produced most recently?",
        options: [
          "Rolls-Royce Phantom",
          "McLaren F1",
          "Jaguar I-PACE",
          "Mini"
        ],
        correctIndex: 2,
      },
      {
        question: "Which car was known for being the world's fastest production car at the time of its release?",
        options: [
          "Rolls-Royce Silver Ghost",
          "Mini",
          "McLaren F1",
          "Jaguar I-PACE"
        ],
        correctIndex: 2,
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
      "Airplanes made international travel much faster than before. Airlines began offering regular passenger services in the 20th century. Airports became important transport hubs. Today, air travel connects countries and supports global tourism.",
    summary:
      "This video shows the development of airplanes from the first flights to modern aviation. It explains how the first successful flight happened in the early 20th century, followed by the introduction of commercial flights. It also shows how airplanes became faster and more advanced, including the Concorde and modern jets. Today, airplanes use advanced technology and connect people around the world quickly and efficiently.",
    embedUrl: "https://www.youtube.com/embed/OFJbGjKl5Xg",
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
        question: "What began in 1919?",
        options: [
          "World War II",
          "Supersonic travel",
          "Commercial flights",
          "Imperial Airways",
        ],
        correctIndex: 2,
      },
      {
        question: "What was Imperial Airways?",
        options: [
          "A war aircraft",
          "A modern airline",
          "A British airline company",
          "A supersonic plane",
        ],
        correctIndex: 2,
      },
      {
        question: "What happened to aircraft during World War II?",
        options: [
          "They became slower",
          "They disappeared",
          "They became faster and stronger",
          "They stopped flying",
        ],
        correctIndex: 2,
      },
      {
        question: "What was special about Concorde?",
        options: [
          "It was the first airplane",
          "It carried mail",
          "It was faster than sound",
          "It was used in war",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "nowadays",
    title: "Nowadays",
    year: "2026",
    era: "Modern",
    videoTitle: "Nowadays Transportation",
    description:
      "Road transport is the most commonly used in Britain today. People use cars and buses for daily travel and commuting. It allows flexible and door-to-door movement. However, traffic and pollution are still major challenges.",
    summary:
      "This video shows the main type of transport used in Britain today, focusing on road transportation. It explains how cars, buses, and other vehicles are widely used for daily travel across cities and towns. It also shows how road transport is convenient, flexible, and accessible for most people. Today, road transport includes modern vehicles, improved road systems, and advanced technology that help millions of people travel every day.",
    embedUrl: "https://www.youtube.com/embed/FvuyHh4ua9w",
    emoji: "🚀",
    color: "#63d7f1ff",
    bg: "#e0e7ff",
    facts: [
      "First flight lasted 27 seconds",
      "WWII pilots flew at 350+ mph",
      "Concorde reached Mach 2",
    ],
    quiz: [
      {
        question: "Which transport is used the most in the UK?",
        options: [
          "Air transport",
          "Rail transport",
          "Road transport",
          "Water transport"
        ],
        correctIndex: 2,
      },
      {
        question: "Which airport is the largest in the United Kingdom?",
        options: [
          "Gatwick Airport",
          "Heathrow Airport",
          "Manchester Airport",
          "Luton Airport"
        ],
        correctIndex: 1,
      },
      {
        question: "Which railway system is the oldest in the world?",
        options: [
          "Germany",
          "France",
          "United Kingdom",
          "Japan"
        ],
        correctIndex: 2,
      },
      {
        question: "About how much freight enters the UK by sea?",
        options: [
          "40%",
          "60%",
          "75%",
          "95%"
        ],
        correctIndex: 3,
      },
      {
        question: "On which side of the road do people drive in the UK?",
        options: [
          "Right side",
          "Left side",
          "Both sides",
          "Middle"
        ],
        correctIndex: 1,
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
