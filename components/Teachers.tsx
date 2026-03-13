"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Star } from "lucide-react";

const teachers = [
  {
    name: "Анна Петрова",
    role: "Преподаватель разговорного английского",
    experience: "9 лет опыта",
    bio: "Специализируется на деловом и разговорном английском. Жила и работала в Лондоне 4 года. Помогла более 200 студентам переехать и адаптироваться за рубежом.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    rating: 4.9,
    students: 240,
    tags: ["Бизнес-английский", "Переезд", "B1–C1"],
  },
  {
    name: "Михаил Соколов",
    role: "Преподаватель путешественников",
    experience: "7 лет опыта",
    bio: "Сертифицированный преподаватель CELTA. Специализируется на туристическом и практическом английском. Сам посетил 40+ стран — знает, что нужно в реальных ситуациях.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    rating: 4.8,
    students: 195,
    tags: ["Туристический", "Аудирование", "A1–B2"],
  },
  {
    name: "Елена Комарова",
    role: "Преподаватель по релокации",
    experience: "8 лет опыта",
    bio: "Диплом Кембриджского университета (CPE). Разработала авторскую программу «Английский для переезда» — с нуля до уверенной жизни за рубежом за 4 месяца.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5.0,
    students: 310,
    tags: ["Релокация", "Бытовой английский", "A1–B1"],
  },
];

export default function Teachers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="teachers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Преподаватели
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sb-dark leading-tight mb-4"
          >
            Средний опыт — 7 лет.
            <br />
            Все прожили жизнь за границей
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-sb-text-muted max-w-2xl mx-auto"
          >
            Группы до 6 человек — преподаватель успевает уделить время каждому. 
            Без теории ради теории: только то, что пригодится в реальности.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-sb-lime text-sb-dark text-xs font-bold px-3 py-1 rounded-full">
                    {teacher.experience}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-extrabold text-sb-dark">{teacher.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-sb-dark">{teacher.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-sb-blue font-medium mb-3">{teacher.role}</p>
                <p className="text-sm text-sb-text-muted leading-relaxed mb-4">{teacher.bio}</p>
                <div className="flex items-center gap-2 text-xs text-sb-text-muted mb-4">
                  <span className="font-semibold text-sb-dark">{teacher.students}+</span>
                  <span>студентов прошли курс</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teacher.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-sb-gray text-sb-text text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
