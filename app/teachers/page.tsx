import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Award, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Преподаватели | Английский для переезда и путешествий | Skillbox",
  description: "Познакомьтесь с преподавателями курса «Английский для переезда и путешествий». Средний опыт — 7 лет. Все прожили жизнь за границей.",
};

const teachers = [
  {
    name: "Анна Петрова",
    title: "Преподаватель разговорного и бизнес-английского",
    experience: "9 лет опыта",
    rating: 4.9,
    students: 240,
    location: "Лондон → Москва",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Специализируется на деловом и разговорном английском. Жила и работала в Лондоне 4 года — преподавала в языковой школе и работала переводчиком в международном банке. После возвращения в Россию открыла авторскую программу подготовки к переезду.",
    certs: ["Cambridge CELTA", "IELTS 8.5", "Business English Certificate"],
    specializations: ["Бизнес-английский", "Переезд в Великобританию", "B1–C1"],
    quote: "Я учу так, как хотела бы учиться сама — через реальные истории и ситуации, без скучных учебников.",
    livesAbroad: "Великобритания, Лондон — 4 года",
  },
  {
    name: "Михаил Соколов",
    title: "Преподаватель для путешественников и эмигрантов",
    experience: "7 лет опыта",
    rating: 4.8,
    students: 195,
    location: "Амстердам → Санкт-Петербург",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Сертифицированный преподаватель CELTA. Специализируется на туристическом и практическом английском. Сам посетил 40+ стран — прожил по несколько месяцев в США, Австралии и Нидерландах. Знает, что нужно в каждой реальной ситуации.",
    certs: ["CELTA Cambridge", "TOEFL 112", "Авторский курс Travel English"],
    specializations: ["Туристический английский", "Аудирование", "A1–B2"],
    quote: "Язык — это ключ от любой двери в мире. Я помогаю сделать первый шаг.",
    livesAbroad: "США, Австралия, Нидерланды — в общей сложности 3 года",
  },
  {
    name: "Елена Комарова",
    title: "Преподаватель по программам релокации",
    experience: "8 лет опыта",
    rating: 5.0,
    students: 310,
    location: "Дублин → Екатеринбург",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Диплом Кембриджского университета (CPE). Разработала авторскую программу «Английский для переезда» — с нуля до уверенной жизни за рубежом за 4 месяца. Жила и работала в Ирландии. Её методика основана на погружении в реальные бытовые кейсы.",
    certs: ["CPE Cambridge", "Delta Module 3", "Trinity DipTESOL"],
    specializations: ["Релокация", "Бытовой английский", "A1–B1"],
    quote: "Лучшая грамматика — та, которую вы используете каждый день, не думая о правилах.",
    livesAbroad: "Ирландия, Дублин — 5 лет",
  },
  {
    name: "Дарья Волкова",
    title: "Преподаватель разговорной практики и произношения",
    experience: "6 лет опыта",
    rating: 4.9,
    students: 178,
    location: "Барселона → Казань",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Лингвист с дипломом МГУ. Специализируется на постановке произношения и уверенной разговорной речи. Жила в Испании и изучила испанский с нуля — понимает, как устроен процесс освоения иностранного языка изнутри.",
    certs: ["MГУ, кафедра иностранных языков", "IELTS 9.0", "Pronunciation Specialist"],
    specializations: ["Произношение", "Разговорная практика", "A2–B2"],
    quote: "Правильное произношение — это не перфекционизм. Это уважение к собеседнику.",
    livesAbroad: "Испания, Барселона — 2 года",
  },
  {
    name: "Игорь Беляев",
    title: "Преподаватель делового и профессионального английского",
    experience: "10 лет опыта",
    rating: 4.8,
    students: 290,
    location: "Берлин → Москва",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Опыт работы переводчиком в международных корпорациях. Преподавал в Deutsche Bank, Deutsche Telekom. Специализируется на деловой коммуникации, переговорах и профессиональной переписке.",
    certs: ["BEC Higher Cambridge", "IELTS 8.0", "MBA International Business"],
    specializations: ["Business English", "Переговоры", "B2–C1"],
    quote: "В бизнесе побеждает тот, кто умеет чётко и убедительно донести свою мысль.",
    livesAbroad: "Германия, Берлин — 6 лет",
  },
  {
    name: "Наталья Чернова",
    title: "Преподаватель для начинающих и среднего уровня",
    experience: "5 лет опыта",
    rating: 4.9,
    students: 155,
    location: "Лиссабон → Новосибирск",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    bio: "Педагог с опытом работы с абсолютными новичками. Знает, как преодолеть страх начать говорить. Жила в Португалии, где сама прошла путь от нуля до свободного общения на иностранном языке.",
    certs: ["CELTA Cambridge", "TESOL International", "Child & Adult English Teaching"],
    specializations: ["Для начинающих", "Преодоление языкового барьера", "A1–B1"],
    quote: "Нет людей без способностей к языкам — есть люди, которым не встретился правильный преподаватель.",
    livesAbroad: "Португалия, Лиссабон — 2.5 года",
  },
];

export default function TeachersPage() {
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
          <div className="max-w-2xl">
            <span className="inline-block bg-sb-lime/20 text-sb-dark text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Преподаватели
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-sb-dark leading-tight mb-6">
              Средний опыт — 7 лет.
              <br />
              <span className="relative inline-block">
                Все жили за границей
                <span className="absolute -bottom-1 left-0 right-0 h-[4px] bg-sb-lime rounded-full" />
              </span>
            </h1>
            <p className="text-lg text-sb-text-muted leading-relaxed mb-8">
              Наши преподаватели — не просто носители знаний. Они сами прожили путь переезда,
              адаптации и жизни за рубежом. Они учат тому, что работает в реальной жизни.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-sb-lime text-sb-lime" />
                <span className="font-semibold text-sb-dark">4.9 средний рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sb-blue" />
                <span className="font-semibold text-sb-dark">6 преподавателей</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-travel-orange" />
                <span className="font-semibold text-sb-dark">Все жили в 5+ странах</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8">
            {teachers.map((teacher, idx) => (
              <div
                key={teacher.name}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-sb-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Photo */}
                  <div className="md:w-64 flex-shrink-0 relative">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-sb-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {teacher.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-extrabold text-sb-dark">{teacher.name}</h2>
                        <p className="text-sb-text-muted">{teacher.title}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-sb-gray px-3 py-1.5 rounded-xl">
                        <Star className="w-4 h-4 fill-sb-lime text-sb-lime" />
                        <span className="font-bold text-sb-dark text-sm">{teacher.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1.5 text-sb-text-muted">
                        <MapPin className="w-4 h-4 text-travel-orange" />
                        <span>{teacher.livesAbroad}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sb-text-muted">
                        <Users className="w-4 h-4 text-sb-blue" />
                        <span>{teacher.students}+ студентов</span>
                      </div>
                    </div>

                    <p className="text-sb-text leading-relaxed mb-5">{teacher.bio}</p>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-sb-lime pl-4 mb-5">
                      <p className="text-sb-text italic text-sm">&ldquo;{teacher.quote}&rdquo;</p>
                    </blockquote>

                    {/* Certs & specializations */}
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <p className="text-xs font-semibold text-sb-text-muted uppercase tracking-wider mb-2">
                          Сертификаты
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {teacher.certs.map((cert) => (
                            <span
                              key={cert}
                              className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-sb-text px-3 py-1 rounded-lg"
                            >
                              <Award className="w-3 h-3 text-sb-blue" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sb-text-muted uppercase tracking-wider mb-2">
                          Специализации
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {teacher.specializations.map((spec) => (
                            <span
                              key={spec}
                              className="text-xs font-medium bg-sb-blue/10 text-sb-blue px-3 py-1 rounded-lg"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sb-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Выберите своего преподавателя
          </h2>
          <p className="text-white/80 text-lg mb-8">
            На бесплатном пробном уроке вы познакомитесь с форматом и подберёте преподавателя под свою цель.
          </p>
          <Button asChild size="lg" className="bg-sb-lime text-sb-dark hover:bg-sb-lime/90 font-bold shadow-lg">
            <Link href="/#hero-form">Записаться на бесплатный урок</Link>
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
            <Link href="/program" className="text-sb-blue hover:underline">
              Программа курса
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
