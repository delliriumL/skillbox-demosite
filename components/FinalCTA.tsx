"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Узнаете текущий уровень владения английским",
  "Получите индивидуальный план обучения",
  "Узнаете об эффективности групповых занятий",
  "Оформите беспроцентную рассрочку до 24 месяцев",
  "Спланируете прогресс на ближайшие 3–6 месяцев",
];

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="final-form" className="py-16 md:py-24 bg-sb-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3B4BDB, transparent)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C9F700, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-3"
            >
              Начните уверенно
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight mb-6"
            >
              Начните уверенно
              <br />
              говорить на английском
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-sb-text-muted mb-8"
            >
              Запишитесь на бесплатный пробный урок. Без давления и обязательств.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sb-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sb-text">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SignupForm
              formId="final-form-inner"
              title="Записаться на бесплатный урок"
              subtitle="Менеджер свяжется в течение 15 минут и подберёт удобное время."
              buttonText="Записаться на бесплатный урок"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
