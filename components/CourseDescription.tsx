"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BookOpen, Users, Laptop, MessageCircle, Clock, Award } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Тест уровня",
    description: "Бесплатная диагностика за 20 минут. Определяем точку отсчёта и цель — переезд, путешествия или работа.",
    icon: Award,
  },
  {
    step: "02",
    title: "Персональный план",
    description: "Вместе с куратором составляем программу под ваш уровень, график и конкретные задачи.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Занятия с преподавателем",
    description: "Группы до 6 человек, видеосвязь прямо на платформе. Разбираете реальные кейсы жизни за рубежом.",
    icon: Users,
  },
  {
    step: "04",
    title: "Практика между уроками",
    description: "Геймифицированные задания, тренажёр слов и ИИ-собеседник доступны в любое время суток.",
    icon: Laptop,
  },
  {
    step: "05",
    title: "Разговорный клуб",
    description: "Еженедельные встречи с носителями и другими студентами. Практика без оценок и страха ошибки.",
    icon: MessageCircle,
  },
  {
    step: "06",
    title: "Результат через 2 месяца",
    description: "Уверенно общаетесь в бытовых ситуациях. Понимаете и выражаете себя — без паузы и паники.",
    icon: Clock,
  },
];

const statsData = [
  { targetValue: 12, suffix: "+", label: "лет на рынке", isFloat: false },
  { targetValue: 12000, suffix: "+", label: "студентов прошли курс", isFloat: false },
  { targetValue: 7, suffix: " лет", label: "средний опыт преподавателей", isFloat: false },
  { targetValue: 4.9, suffix: "/5", label: "средняя оценка курса", isFloat: true },
];

interface AnimatedCounterProps {
  targetValue: number;
  suffix: string;
  isFloat?: boolean;
  isTriggered: boolean;
}

function AnimatedCounter({ targetValue, suffix, isFloat = false, isTriggered }: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isTriggered || hasAnimated.current || !counterRef.current) return;
    hasAnimated.current = true;

    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetValue,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            if (isFloat) {
              counterRef.current.textContent = `${obj.val.toFixed(1)}${suffix}`;
            } else {
              const rounded = Math.floor(obj.val);
              const formatted =
                rounded >= 1000
                  ? `${Math.floor(rounded / 1000)} ${String(rounded % 1000).padStart(3, "0")}`
                  : String(rounded);
              counterRef.current.textContent = `${formatted}${suffix}`;
            }
          }
        },
      });
    };

    animate();
  }, [isTriggered, targetValue, suffix, isFloat]);

  const initialDisplay = isFloat ? `0.0${suffix}` : `0${suffix}`;
  return <span ref={counterRef}>{initialDisplay}</span>;
}

export default function CourseDescription() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="program" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              О курсе
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight mb-6"
            >
              Английский, который
              <br />
              <span className="text-sb-blue">работает в жизни</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-sb-text-muted leading-relaxed mb-6"
            >
              Курс построен на реальных сценариях: аренда жилья, визит к врачу, открытие счёта,
              поиск работы, разговор с соседями. Каждый урок — это задача из жизни, которую вы
              отрабатываете до автоматизма.
            </motion.p>

            {/* Animated stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="bg-sb-gray rounded-2xl p-4 relative overflow-hidden group"
                >
                  {/* Accent stripe that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sb-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="text-2xl font-extrabold text-sb-dark mb-1 counter-value tabular-nums">
                    <AnimatedCounter
                      targetValue={stat.targetValue}
                      suffix={stat.suffix}
                      isFloat={stat.isFloat}
                      isTriggered={statsInView}
                    />
                  </div>
                  <div className="text-sm text-sb-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Онлайн обучение английскому языку"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay card */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-sb-dark uppercase tracking-wide">Live</span>
                </div>
                <p className="text-sm font-bold text-sb-dark mb-1">Практическая ситуация</p>
                <p className="text-xs text-sb-text-muted">Бронирование отеля</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sb-lime/30 rounded-3xl -z-10 rotate-6" />
          </motion.div>
        </div>

        {/* How it works - steps */}
        <div ref={stepsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="section-label mb-3">Как проходит обучение</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sb-dark">
              От первого урока до свободной речи
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-sb-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sb-blue group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-sb-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-black text-gray-100 leading-none group-hover:text-sb-blue/20 transition-colors duration-300">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-sb-dark mb-2">{step.title}</h3>
                <p className="text-sm text-sb-text-muted leading-relaxed">{step.description}</p>
                {/* Bottom connector line for visual flow */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sb-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
