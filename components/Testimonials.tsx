"use client";

import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Мария Кузнецова",
    location: "Москва → Барселона",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    text: "Два года собиралась переехать в Испанию, но языковой барьер останавливал. После курса провела первые переговоры по аренде квартиры на английском — без переводчика. Теперь работаю в международной компании.",
    rating: 5,
    course: "B1, Переезд",
    result: "Переехала в Барселону через 4 месяца",
  },
  {
    name: "Алексей Орлов",
    location: "Санкт-Петербург → Амстердам",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "Раньше в аэропорту потел от страха. Сейчас сам объясняю маршруты туристам. Программа построена на реальных ситуациях — банк, врач, магазин. Это то, чего нет ни в одном учебнике.",
    rating: 5,
    course: "A2+, Путешествия",
    result: "Устроился в IT-компанию в Нидерландах",
  },
  {
    name: "Светлана Ткаченко",
    location: "Екатеринбург → Дублин",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    text: "Через месяц после курса поехала в Ирландию. Спокойно сняла жильё, открыла счёт в банке, договорилась о работе. Преподаватель Елена — просто находка, объясняет так, что всё остаётся.",
    rating: 5,
    course: "B1+, Релокация",
    result: "Живёт и работает в Дублине",
  },
  {
    name: "Дмитрий Захаров",
    location: "Новосибирск → путешественник",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    text: "Объездил 15 стран за год — и везде чувствовал себя своим. Курс дал уверенность говорить, не боясь ошибок. Разговорный клуб особенно понравился — там я понял, что уже умею.",
    rating: 5,
    course: "B2, Путешествия",
    result: "Посетил 15 стран за год",
  },
  {
    name: "Ольга Мельникова",
    location: "Казань → Лиссабон",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    text: "Занималась с нулевого уровня — через 8 месяцев провела первое совещание с иностранными коллегами. ИИ-помощник помогал между уроками — практиковала речь в любое время.",
    rating: 5,
    course: "A1→B1, Работа",
    result: "Ведёт встречи на английском",
  },
  {
    name: "Игорь Романов",
    location: "Ростов-на-Дону → Берлин",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    text: "После курса переехал в Германию. Английский — мой рабочий язык. Спасибо за практику реальных переговоров и деловой переписки. Чётко, конкретно, без воды.",
    rating: 5,
    course: "B1, Бизнес",
    result: "Работает в международном стартапе",
  },
];

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="reviews" className="py-16 md:py-24 bg-sb-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              Отзывы
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight"
            >
              Они уже говорят
              <br />
              <span className="text-sb-blue">свободно</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 mt-6 md:mt-0"
          >
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-sb-blue hover:text-sb-blue transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-sb-blue hover:text-sb-blue transition-colors"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-6 -ml-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 pl-6"
              >
                <div className="bg-white rounded-3xl p-6 md:p-8 h-full flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <Quote className="w-8 h-8 text-sb-blue/20 mb-4" />
                  
                  <p className="text-sb-text leading-relaxed flex-1 mb-6 text-[15px]">
                    {item.text}
                  </p>

                  {/* Result badge */}
                  <div className="bg-sb-lime/20 text-sb-dark text-xs font-semibold px-3 py-2 rounded-xl mb-6 inline-block w-fit">
                    ✓ {item.result}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-sb-lime">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sb-dark text-sm">{item.name}</p>
                      <p className="text-xs text-sb-text-muted truncate">{item.location}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-sb-text-muted">{item.course}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
