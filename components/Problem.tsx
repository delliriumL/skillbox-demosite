"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircleWarning, Building2, Plane, Briefcase } from "lucide-react";

const problems = [
  {
    icon: MessageCircleWarning,
    title: "Паника при разговоре",
    description: "Голова пустеет в нужный момент, слова куда-то исчезают, и вы замолкаете.",
    color: "text-red-500",
  },
  {
    icon: Building2,
    title: "Беспомощность в быту",
    description: "Аптека, банк, аренда квартиры — каждое бытовое дело превращается в стресс.",
    color: "text-orange-500",
  },
  {
    icon: Plane,
    title: "Тревога в аэропорту",
    description: "Объявления, таблички, диалоги с сотрудниками — всё кажется непонятным и пугающим.",
    color: "text-blue-500",
  },
  {
    icon: Briefcase,
    title: "Языковой барьер на работе",
    description: "Письма, переговоры, собеседования в международной компании — остаётесь в тени.",
    color: "text-purple-500",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.transition = "transform 0.1s ease-out";
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      card.style.transition = "transform 0.4s ease-out";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="problem" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Узнаёте себя?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight mb-4"
          >
            Языковой барьер мешает
            <br />
            жить и работать?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-sb-text-muted max-w-2xl mx-auto"
          >
            Это не проблема способностей — это вопрос правильного подхода.
            Большинство курсов учат грамматике, но не учат говорить.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <TiltCard className="group relative bg-sb-gray rounded-2xl p-6 overflow-hidden h-full cursor-default">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sb-blue to-travel-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <h3 className="text-lg font-bold text-sb-dark mb-2">{problem.title}</h3>
                <p className="text-sm text-sb-text-muted leading-relaxed">{problem.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Arrow pointing to solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center mt-12 md:mt-16"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gray-200 to-sb-blue" />
          <button
            onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-4 px-6 py-3 bg-sb-blue text-white rounded-2xl text-base font-semibold shadow-lg shadow-sb-blue/20 hover:bg-sb-blue-dark transition-colors cursor-pointer"
          >
            Курс «Английский для переезда и путешествий» — ваше решение
          </button>
        </motion.div>
      </div>
    </section>
  );
}
