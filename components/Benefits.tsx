"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Clock, Cpu, MessageSquare, CheckCircle2, Mic, Smile, Earth, Target } from "lucide-react";

const emotional = [
  {
    icon: Smile,
    title: "Забудьте о панике",
    description: "Перестанете теряться в разговоре. Слова будут приходить сами — как на родном языке.",
    color: "text-sb-lime",
  },
  {
    icon: Earth,
    title: "Уверенность в любой точке мира",
    description: "Аэропорт, больница, переговоры — справляетесь с любой ситуацией без чужой помощи.",
    color: "text-travel-azure",
  },
  {
    icon: Target,
    title: "Свобода и самостоятельность",
    description: "Не переспрашиваете, не гуглите каждое слово, не избегаете общения. Просто живёте.",
    color: "text-sb-lime",
  },
];

const rational = [
  {
    icon: Globe,
    title: "Только реальные кейсы",
    description:
      "Аренда авто, check-in в отеле, поход к врачу, бизнес-презентация. Никаких абстрактных упражнений — только задачи из жизни.",
  },
  {
    icon: Clock,
    title: "Из любой точки земли",
    description:
      "Занимайтесь в удобное время без привязки к расписанию. Нужны стабильный интернет и желание — больше ничего.",
  },
  {
    icon: Cpu,
    title: "Интерактивная платформа",
    description:
      "Геймифицированные упражнения, встроенная видеосвязь и тренажёр слов. Материалы по уровням — от A1 до C1.",
  },
  {
    icon: MessageSquare,
    title: "ИИ-помощник 24/7",
    description:
      "Составит персональный план обучения и станет собеседником для тренировки — в любое время, без осуждения.",
  },
  {
    icon: Mic,
    title: "Разговорный клуб",
    description:
      "Еженедельные встречи с носителями языка. Практикуете речь без страха ошибки в комфортной среде.",
  },
  {
    icon: CheckCircle2,
    title: "Гарантия результата",
    description:
      "Регулярно занимаетесь, но не видите прогресса? Предоставим до 10 дополнительных уроков бесплатно.",
  },
];

const skills = [
  "Поддерживать small talk на любую тему",
  "Разбираться в грамматических и лексических тонкостях",
  "Запоминать большие объёмы информации без зубрёжки",
  "Интегрировать английский в повседневную рутину",
  "Преодолевать языковой барьер во время путешествий",
  "Общаться с носителями без переводчика",
];

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [rationalRef, rationalInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  // GSAP stagger reveal for emotional benefit cards
  const emotionalSectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (cardsRef.current) {
        ctx = gsap.context(() => {
          const cards = cardsRef.current!.querySelectorAll(".benefit-card");

          // Initial state
          gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });

          // Stagger reveal
          ScrollTrigger.create({
            trigger: cardsRef.current,
            start: "top 75%",
            once: true,
            onEnter: () => {
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
              });
            },
          });

          // Floating animation for emoji elements
          const emojis = cardsRef.current!.querySelectorAll(".benefit-emoji");
          emojis.forEach((emoji, i) => {
            gsap.to(emoji, {
              y: i % 2 === 0 ? -10 : -8,
              duration: 2.5 + i * 0.3,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: i * 0.4,
            });
          });
        });
      }
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* Emotional benefits */}
      <section
        ref={emotionalSectionRef}
        className="py-16 md:py-24 bg-sb-dark text-white overflow-hidden relative"
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9F700, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #3B4BDB, transparent)" }}
        />
        {/* Subtle grid pattern */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={ref} className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-sb-lime mb-3"
            >
              Выгоды курса
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            >
              Что изменится
              <br />
              <span className="text-sb-lime">после курса</span>
            </motion.h2>
          </div>

          {/* Cards — animated with GSAP */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emotional.map((item) => (
              <div
                key={item.title}
                className="benefit-card bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <div className="benefit-emoji w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16 md:py-24 bg-white" ref={skillsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label mb-3"
              >
                Результаты
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold text-sb-dark mb-8 leading-tight"
              >
                Чему вы научитесь
              </motion.h2>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-sb-lime rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-sb-dark" />
                    </div>
                    <p className="text-sb-text text-base leading-relaxed">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-sb-blue to-travel-azure rounded-3xl p-8 text-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-10 rounded-full"
                  style={{ background: "radial-gradient(circle, #fff, transparent)" }}
                />

                <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
                  Программа курса
                </p>

                <div className="space-y-3">
                  {[
                    { level: "A1–A2", topic: "Базовые бытовые ситуации", weeks: "4 нед." },
                    { level: "A2+", topic: "Путешествия и транспорт", weeks: "4 нед." },
                    { level: "B1", topic: "Жизнь и работа за рубежом", weeks: "4 нед." },
                    { level: "B1+", topic: "Профессиональное общение", weeks: "4 нед." },
                    { level: "B2", topic: "Свободная речь и культура", weeks: "4 нед." },
                  ].map((module) => (
                    <div
                      key={module.level}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-xl p-3 cursor-default"
                    >
                      <span className="text-xs font-bold bg-sb-lime text-sb-dark px-2 py-1 rounded-lg flex-shrink-0">
                        {module.level}
                      </span>
                      <span className="text-sm flex-1">{module.topic}</span>
                      <span className="text-xs text-white/50">{module.weeks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rational benefits */}
      <section className="py-16 md:py-24 bg-sb-gray" ref={rationalRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={rationalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              Преимущества Skillbox
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={rationalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight"
            >
              Почему именно Skillbox
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rational.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={rationalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-white rounded-2xl p-6 card-hover border border-gray-100 group cursor-default"
              >
                <div className="w-12 h-12 bg-sb-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sb-blue transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-sb-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-sb-dark mb-3">{item.title}</h3>
                <p className="text-sm text-sb-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
