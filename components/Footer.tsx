import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sb-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Skillbox</span>
              <span className="px-2 py-0.5 bg-white/10 text-white text-xs font-semibold rounded-md">
                английский
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Онлайн-школа английского языка для тех, кто планирует переезд, путешествует
              или хочет работать в международной среде.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://vk.com/skillbox", label: "ВК" },
                { href: "https://t.me/skillbox", label: "TG" },
                { href: "https://youtube.com/@skillbox", label: "YT" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-sb-blue rounded-xl flex items-center justify-center text-xs font-bold text-white transition-colors social-icon"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Course */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Курс</h4>
            <ul className="space-y-3">
              {[
                { href: "#program", label: "Программа" },
                { href: "#teachers", label: "Преподаватели" },
                { href: "#pricing", label: "Стоимость" },
                { href: "#reviews", label: "Отзывы" },
                { href: "#hero-form", label: "Записаться" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skillbox */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Skillbox</h4>
            <ul className="space-y-3">
              {[
                { href: "https://skillbox.ru", label: "Skillbox.ru", external: true },
                { href: "https://skillbox.ru/english/", label: "Все курсы английского", external: true },
                { href: "https://skillbox.ru/about/", label: "О компании", external: true },
                { href: "https://skillbox.ru/career/", label: "Вакансии", external: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Документы</h4>
            <ul className="space-y-3">
              {[
                {
                  href: "/policy",
                  label: "Политика персональных данных",
                },
                {
                  href: "https://skillbox.ru/legal/",
                  label: "Правила пользования",
                  external: true,
                },
                {
                  href: "https://skillbox.ru/legal/offer/",
                  label: "Оферта",
                  external: true,
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 ООО «Скиллбокс». Все права защищены.
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            ОГРН 1187746791995
          </p>
          <p className="text-white/30 text-xs text-center">
            Образовательная деятельность осуществляется на основании лицензии № Л035-01298-77/00403039
          </p>
        </div>
      </div>
    </footer>
  );
}
