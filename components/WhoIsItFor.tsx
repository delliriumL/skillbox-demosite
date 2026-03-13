"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    number: "01",
    title: "Тем, кому важен быстрый результат",
    description:
      "Занимаетесь по персональной программе — и замечаете прогресс уже после первого урока. Разбираете актуальные темы на реальных сценариях и сразу применяете на групповых занятиях или в разговорном клубе.",
    tags: ["Быстрый старт", "Персональный план", "Практика с урока 1"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    accent: "bg-sb-blue",
  },
  {
    number: "02",
    title: "Тем, кто устал чувствовать себя чужим за границей",
    description:
      "Вспоминаете язык и становитесь уверенным туристом. Легко общаетесь в магазине, кафе, отеле. Понимаете местных и выражаете любую мысль — без переводчика и без стресса.",
    tags: ["Путешествия", "Общение с носителями", "Уверенность"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    accent: "bg-travel-orange",
  },
  {
    number: "03",
    title: "Тем, кто планирует переехать",
    description:
      "Занимаетесь по программе, построенной на реальных кейсах жизни за рубежом: поход в магазин, аптеку, страховую службу, банк. После курса вы знаете, как решать бытовые задачи без словаря.",
    tags: ["Релокация", "Бытовой английский", "Реальные кейсы"],
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=600&q=80",
    accent: "bg-travel-azure",
  },
];

export default function WhoIsItFor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Stagger reveal for audience cards
    gsap.fromTo(
      cardRefs.current.filter(Boolean),
      { opacity: 0, x: -60, scale: 0.97 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Subtle parallax on images
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const img = card.querySelector(".audience-img");
      if (!img) return;
      gsap.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-sb-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Кому подходит курс
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight"
          >
            Вы узнаете себя
            <br />
            в одном из трёх
          </motion.h2>
        </div>

        <div className="space-y-8">
          {audiences.map((item, i) => (
            <div
              key={item.number}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group`}
            >
              <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="relative lg:w-2/5 aspect-[4/3] lg:aspect-auto min-h-[240px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="audience-img object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-10 h-10 ${item.accent} text-white rounded-xl flex items-center justify-center font-black text-sm shadow-lg`}
                  >
                    {item.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-sb-dark mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sb-text-muted leading-relaxed mb-6 text-lg">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-sb-gray text-sb-dark text-sm font-medium rounded-lg tag-bounce hover:bg-sb-blue hover:text-white cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
