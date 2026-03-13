"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Globe, Plane, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/SignupForm";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Mouse parallax for blob
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP scroll parallax on hero image
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (imageWrapRef.current) {
        ctx = gsap.context(() => {
          gsap.to(imageWrapRef.current, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
      }
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={heroSectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #3B4BDB, transparent)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #C9F700, transparent)" }}
        />
        <div
          ref={bgRef}
          className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full opacity-[0.06] transition-transform duration-500 ease-out"
          style={{ background: "radial-gradient(circle, #00B4D8, transparent)" }}
        />
      </div>

      {/* Floating decorative tags */}

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 md:pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left column - Text */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 bg-sb-lime/20 text-sb-dark text-sm font-semibold px-4 py-2 rounded-full">
                  <Plane className="w-4 h-4 text-travel-orange" />
                  Английский для переезда и путешествий
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sb-dark leading-[1.1] tracking-tight mb-6"
              >
                Заговори свободно
                <br />
                <span className="relative inline-block">
                  за рубежом
                  <span className="absolute -bottom-1 left-0 right-0 h-[5px] bg-sb-lime rounded-full" />
                </span>
                <br />
                уже через 2 месяца
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-sb-text-muted leading-relaxed mb-8 max-w-lg"
              >
                Никакой школьной грамматики — только реальные сценарии жизни за границей.
                Аренда жилья, аэропорт, больница, работа. Практика с первого урока.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  "Разговорная практика",
                  "Реальные кейсы",
                  "Гибкий график",
                  "ИИ-помощник 24/7",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 text-sb-text text-sm font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  size="lg"
                  className="bg-sb-blue hover:bg-sb-blue-dark text-white shadow-lg hover:shadow-xl text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 btn-shimmer"
                  onClick={() => {
                    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Записаться на бесплатный урок
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sb-dark border-2 border-gray-200 hover:border-sb-blue hover:text-sb-blue transition-all duration-200"
                  onClick={() => {
                    document.getElementById("program")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Смотреть программу
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sb-lime text-sb-lime" />
                    ))}
                  </div>
                  <span className="text-sm text-sb-text-muted">4.9 / 1 200 отзывов</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <span className="text-sm text-sb-text-muted">Более 12 лет на рынке</span>
                <div className="w-px h-4 bg-gray-200" />
                <span className="text-sm text-sb-text-muted">Средний опыт преподавателей — 7 лет</span>
              </motion.div>
            </div>

            {/* Right column - Image with GSAP parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end hidden lg:block"
            >
              <div className="relative w-full max-w-lg">
                {/* Background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-sb-blue/10 to-travel-azure/10 rounded-3xl transform rotate-3" />

                {/* Main image container - GSAP will animate this */}
                <div ref={imageWrapRef} className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl will-change-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                    alt="Студенты изучают английский язык"
                    fill
                    className="object-cover scale-[1.15]"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating stats badges overlaying the image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-6 right-6"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3">
                      <div className="w-9 h-9 bg-sb-lime rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-sb-dark" />
                      </div>
                      <div>
                        <p className="text-xs text-sb-text-muted">Уровень</p>
                        <p className="text-sm font-bold text-sb-dark">A1 → C1</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="absolute top-28 right-6"
                  >
                    <div className="bg-sb-blue rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {["bg-orange-400", "bg-purple-400", "bg-blue-300"].map((c, i) => (
                          <div key={i} className={`w-7 h-7 rounded-full border-2 border-white ${c}`} />
                        ))}
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Студентов</p>
                        <p className="text-sm font-bold text-white">12 000+</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative lime blob */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sb-lime rounded-3xl -z-10 rotate-12" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-travel-azure/30 rounded-2xl -z-10 -rotate-12" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center pb-8"
        >
          <button
            onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-sb-text-muted hover:text-sb-blue transition-colors group"
          >
            <span className="text-xs font-medium">Узнать больше</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Signup form section */}
      <div id="hero-form" className="bg-sb-gray py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-3">Начните сегодня</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sb-dark mb-4">
                Первый урок — бесплатно
              </h2>
              <p className="text-sb-text-muted mb-8 text-lg leading-relaxed">
                Запишитесь на пробный урок и убедитесь, что наш формат работает именно для вас.
                Без обязательств — только результат.
              </p>
              <ul className="space-y-3">
                {[
                  "Проверим текущий уровень за 20 минут",
                  "Составим план под вашу цель (переезд, путешествия, работа)",
                  "Расскажем о форматах обучения",
                  "Оформим беспроцентную рассрочку до 24 месяцев",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-sb-lime rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-sb-dark text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sb-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <SignupForm formId="main-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
