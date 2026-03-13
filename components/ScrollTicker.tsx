"use client";

import { motion } from "framer-motion";

const items = [
  "Английский для переезда",
  "Разговорная практика с первого урока",
  "Реальные кейсы из жизни за рубежом",
  "Группы до 6 человек",
  "ИИ-помощник 24/7",
  "Гибкий график занятий",
  "Рассрочка до 24 месяцев",
  "Средний опыт преподавателей — 7 лет",
];

export default function ScrollTicker({ inverted = false }: { inverted?: boolean }) {
  // Create two identical sets for seamless looping
  const tickerItems = [...items, ...items];

  return (
    <div
      className={`py-4 overflow-hidden border-y ${
        inverted ? "bg-sb-blue border-sb-blue-dark" : "bg-sb-dark border-black/20"
      }`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: inverted ? ["0%", "-50%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {tickerItems.map((item, i) => (
          <div
            key={i}
            className={`inline-flex items-center gap-3 px-6 text-sm font-semibold ${
              inverted ? "text-white" : "text-white/70"
            }`}
          >
            <span className={inverted ? "text-sb-lime" : "text-sb-lime"}>✦</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
