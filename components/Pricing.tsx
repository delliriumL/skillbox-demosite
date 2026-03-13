"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "22 000",
    installment: "917",
    months: 24,
    period: "/ курс",
    description: "Для тех, кто делает первые шаги в английском.",
    features: [
      "Доступ к платформе на 4 месяца",
      "Групповые занятия (до 6 человек)",
      "Тренажёр слов и грамматики",
      "ИИ-помощник 24/7",
      "Разговорный клуб (1 раз в неделю)",
    ],
    notIncluded: ["Индивидуальные занятия", "Приоритетная поддержка"],
    color: "border-gray-200",
    badge: null,
  },
  {
    name: "Практика",
    price: "44 000",
    installment: "1 833",
    months: 24,
    period: "/ курс",
    description: "Для уверенного освоения языка с акцентом на разговор.",
    features: [
      "Доступ к платформе на 8 месяцев",
      "Групповые занятия (до 6 человек)",
      "2 индивидуальных занятия в месяц",
      "Тренажёр слов и грамматики",
      "ИИ-помощник 24/7",
      "Разговорный клуб (2 раза в неделю)",
      "Проверка домашних заданий",
    ],
    notIncluded: ["Приоритетная поддержка"],
    color: "border-sb-blue",
    badge: "Популярный",
  },
  {
    name: "Результат",
    price: "66 000",
    installment: "2 750",
    months: 24,
    period: "/ курс",
    description: "Максимальный прогресс для серьёзных задач.",
    features: [
      "Доступ к платформе на 12 месяцев",
      "Групповые занятия (до 6 человек)",
      "4 индивидуальных занятия в месяц",
      "Тренажёр слов и грамматики",
      "ИИ-помощник 24/7",
      "Разговорный клуб (неограниченно)",
      "Проверка домашних заданий",
      "Приоритетная поддержка куратора",
      "Гарантия результата",
    ],
    notIncluded: [],
    color: "border-sb-blue",
    badge: "Максимум",
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Стоимость
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight mb-4"
          >
            Выберите формат обучения
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-sb-text-muted max-w-2xl mx-auto"
          >
            Первый урок бесплатно. Рассрочка без переплат до 24 месяцев.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative rounded-3xl border-2 ${plan.color} p-8 flex flex-col ${
                plan.badge === "Популярный"
                  ? "bg-sb-blue text-white shadow-2xl shadow-sb-blue/20 scale-[1.02] glow-card"
                  : "bg-white card-hover"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                    plan.badge === "Популярный"
                      ? "bg-sb-lime text-sb-dark"
                      : "bg-sb-dark text-white"
                  }`}>
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${plan.badge === "Популярный" ? "text-white" : "text-sb-dark"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.badge === "Популярный" ? "text-white/70" : "text-sb-text-muted"}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-2">
                  <span className={`text-4xl font-extrabold ${plan.badge === "Популярный" ? "text-white" : "text-sb-dark"}`}>
                    {plan.price} ₽
                  </span>
                </div>
                <div className={`mt-2 text-sm ${plan.badge === "Популярный" ? "text-white/60" : "text-sb-text-muted"}`}>
                  или от {plan.installment} ₽/мес. в рассрочку
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.badge === "Популярный" ? "text-sb-lime" : "text-sb-blue"
                      }`}
                    />
                    <span className={`text-sm ${plan.badge === "Популярный" ? "text-white/90" : "text-sb-text"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-30">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full border-2 border-current" />
                    <span className={`text-sm line-through ${
                      plan.badge === "Популярный" ? "text-white" : "text-sb-text-muted"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full font-semibold btn-shimmer transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.badge === "Популярный"
                    ? "bg-sb-lime text-sb-dark hover:bg-sb-lime-dark"
                    : "bg-sb-blue text-white hover:bg-sb-blue-dark"
                }`}
                onClick={() => {
                  document.getElementById("final-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Начать бесплатно
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-sb-text-muted mt-8"
        >
          Все цены указаны в рублях. Рассрочка оформляется через банки-партнёры. Подробности — у менеджера.
        </motion.p>
      </div>
    </section>
  );
}
