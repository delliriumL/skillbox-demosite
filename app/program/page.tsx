import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, CheckCircle2, Star, BookOpen, Plane, Home, Briefcase, MessageCircle, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Программа курса | Английский для переезда и путешествий | Skillbox",
  description: "Подробная программа курса «Английский для переезда и путешествий». 5 уровней, 20 недель, реальные сценарии. От A1 до B2.",
};

const modules = [
  {
    level: "A1–A2",
    duration: "4 нед.",
    title: "Базовые бытовые ситуации",
    color: "bg-emerald-100 text-emerald-700",
    icon: Home,
    topics: [
      "Знакомство и small talk",
      "В магазине и кафе",
      "Спросить дорогу и ориентироваться",
      "Числа, деньги, покупки",
      "Заказ еды и напитков",
      "Базовая грамматика: present simple, to be",
    ],
  },
  {
    level: "A2+",
    duration: "4 нед.",
    title: "Путешествия и транспорт",
    color: "bg-blue-100 text-blue-700",
    icon: Plane,
    topics: [
      "Аэропорт: регистрация, таможня, стойка",
      "Гостиница: заселение, запросы, выезд",
      "Транспорт: автобус, метро, такси",
      "Экскурсии и достопримечательности",
      "Проблемные ситуации в поездке",
      "Past simple, present continuous",
    ],
  },
  {
    level: "B1",
    duration: "4 нед.",
    title: "Жизнь и работа за рубежом",
    color: "bg-purple-100 text-purple-700",
    icon: Home,
    topics: [
      "Аренда жилья: переговоры, договор",
      "Открытие счёта в банке",
      "Визит в поликлинику и аптеку",
      "Документы и бюрократические процедуры",
      "Страховка и коммунальные услуги",
      "Present perfect, modal verbs",
    ],
  },
  {
    level: "B1+",
    duration: "4 нед.",
    title: "Профессиональное общение",
    color: "bg-orange-100 text-orange-700",
    icon: Briefcase,
    topics: [
      "Деловая переписка и email",
      "Собеседование на работу",
      "Переговоры и презентации",
      "Видеозвонки с коллегами",
      "Networking и рекомендательные письма",
      "Conditionals, passive voice",
    ],
  },
  {
    level: "B2",
    duration: "4 нед.",
    title: "Свободная речь и культура",
    color: "bg-pink-100 text-pink-700",
    icon: MessageCircle,
    topics: [
      "Дискуссии на любые темы",
      "Понимание акцентов и сленга",
      "Культурные различия и этикет",
      "Чтение аутентичных текстов",
      "Просмотр сериалов без субтитров",
      "Advanced grammar & idioms",
    ],
  },
];

const features = [
  {
    icon: Users,
    title: "Группы до 6 человек",
    desc: "Максимальное внимание каждому студенту",
  },
  {
    icon: Clock,
    title: "2–3 занятия в неделю",
    desc: "Гибкий график под ваш ритм жизни",
  },
  {
    icon: MessageCircle,
    title: "Разговорный клуб",
    desc: "Практика с носителями без страха ошибки",
  },
  {
    icon: Globe,
    title: "ИИ-помощник 24/7",
    desc: "Собеседник и тренажёр в любое время",
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-sb-dark">Skillbox</span>
            <span className="px-2 py-0.5 bg-sb-dark text-white text-xs font-semibold rounded-md">
              английский
            </span>
          </Link>
          <Button asChild size="sm" className="bg-sb-blue hover:bg-sb-blue-dark text-white">
            <Link href="/#hero-form">Бесплатный урок</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-sb-gray py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-sb-blue hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-sb-lime/20 text-sb-dark text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Программа курса
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-sb-dark leading-tight mb-6">
                От первых слов
                <br />
                <span className="relative inline-block">
                  до уверенной речи
                  <span className="absolute -bottom-1 left-0 right-0 h-[4px] bg-sb-lime rounded-full" />
                </span>
              </h1>
              <p className="text-lg text-sb-text-muted leading-relaxed mb-8">
                5 уровней, 20 недель интенсивной практики. Каждый модуль построен на реальных
                ситуациях — от похода в аптеку до деловых переговоров.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-sb-lime text-sb-lime" />
                  <span className="text-sm font-medium text-sb-dark">4.9 / 5 оценка курса</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sb-blue" />
                  <span className="text-sm font-medium text-sb-dark">12 000+ студентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-travel-orange" />
                  <span className="text-sm font-medium text-sb-dark">A1 → B2</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-sb-blue hover:bg-sb-blue-dark text-white shadow-lg">
                <Link href="/#hero-form">Записаться на бесплатный урок</Link>
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                  alt="Программа курса английского языка"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-xs text-sb-text-muted">Средняя скорость прогресса</p>
                  <p className="font-bold text-sb-dark">Один уровень за 4 недели</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sb-lime rounded-3xl -z-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Format features */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex flex-col items-center text-center gap-3 p-4">
                  <div className="w-12 h-12 bg-sb-blue/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sb-blue" />
                  </div>
                  <p className="font-semibold text-sb-dark text-sm">{f.title}</p>
                  <p className="text-xs text-sb-text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sb-blue text-sm font-semibold uppercase tracking-widest mb-2">Содержание</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sb-dark">
              Что вы изучите в каждом модуле
            </h2>
          </div>

          <div className="space-y-6">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.level}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:border-sb-blue/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left */}
                    <div className="md:w-64 flex-shrink-0 p-6 bg-gray-50 flex flex-col justify-between">
                      <div>
                        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${mod.color}`}>
                          {mod.level}
                        </span>
                        <h3 className="text-lg font-bold text-sb-dark mb-1">{mod.title}</h3>
                        <p className="text-sm text-sb-text-muted flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {mod.duration}
                        </p>
                      </div>
                      <div className="hidden md:flex items-center gap-2 mt-4">
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold text-sb-dark">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Icon className="w-4 h-4 text-sb-blue" />
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex-1 p-6">
                      <p className="text-sm font-semibold text-sb-text-muted uppercase tracking-wider mb-4">
                        Темы и навыки
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {mod.topics.map((topic) => (
                          <div key={topic} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sb-lime mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-sb-text">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sb-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Начните с бесплатного урока
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Первый урок — бесплатно. Определим ваш уровень и составим персональный план.
          </p>
          <Button asChild size="lg" className="bg-sb-lime text-sb-dark hover:bg-sb-lime/90 font-bold shadow-lg">
            <Link href="/#hero-form">Записаться бесплатно</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-sb-dark">Skillbox</span>
            <span className="px-2 py-0.5 bg-sb-dark text-white text-xs font-semibold rounded-md">
              английский
            </span>
          </Link>
          <p className="text-sm text-sb-text-muted">
            © 2026 ООО «Скиллбокс». Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/policy" className="text-sb-blue hover:underline">
              Политика данных
            </Link>
            <Link href="/teachers" className="text-sb-blue hover:underline">
              Преподаватели
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
