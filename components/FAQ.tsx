"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Какой уровень нужен для начала?",
    a: "Курс подходит для уровней от A1 (полный ноль) до B2. Перед стартом мы проводим бесплатную диагностику за 20 минут — определяем ваш уровень и подбираем программу. Вы начнёте именно там, где нужно, — без скуки и стресса.",
  },
  {
    q: "Сколько длится курс?",
    a: "Зависит от тарифа и вашей цели. Минимальный формат — 4 месяца (уровень Старт). Для полноценного перехода с нуля до B2 — от 12 месяцев. На бесплатной консультации мы обсудим вашу цель и предложим оптимальный срок.",
  },
  {
    q: "Есть ли рассрочка? Как она работает?",
    a: "Да. Рассрочку предоставляют банки-партнёры: Сбербанк, Тинькофф, ОТПбанк, Газпромбанк. До 24 месяцев без процентов и первого взноса. Первый платёж — через месяц после оформления. Одобрение занимает 2 минуты онлайн.",
  },
  {
    q: "Сколько занятий в неделю?",
    a: "В групповом формате — 2–3 занятия в неделю по 60 минут. Расписание составляется индивидуально из доступных слотов. Пропустили занятие — запись доступна в личном кабинете. Также есть самостоятельная работа на платформе: тренажёры, подкасты, задания.",
  },
  {
    q: "Что происходит, если я не вижу прогресса?",
    a: "Если вы регулярно занимаетесь, выполняете задания, но не видите изменений — мы предоставим до 10 дополнительных уроков бесплатно. Либо 3 месяца дополнительного доступа к платформе. Это наша гарантия результата.",
  },
  {
    q: "Могу ли я заниматься, если живу за рубежом или часто путешествую?",
    a: "Да, именно для вас и создан этот курс. Нужны только стабильный интернет и мотивация. Занятия проходят онлайн, расписание гибкое, платформа доступна 24/7 из любой страны.",
  },
  {
    q: "Как выглядит пробный урок? Это действительно бесплатно?",
    a: "Да, первый урок полностью бесплатный и без обязательств. Это не продающее собеседование: вы познакомитесь с форматом, попрактикуетесь с преподавателем и поймёте, подходит ли вам этот подход. Чтобы записаться — заполните форму выше.",
  },
  {
    q: "Есть ли сертификат по окончании?",
    a: "Да. После завершения курса вы получаете сертификат Skillbox, который подтверждает прохождение программы и достигнутый уровень. При желании можете сдать международный экзамен — мы поможем подготовиться.",
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Частые вопросы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight"
          >
            Ответы на главные вопросы
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-sb-gray rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-base font-semibold py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
