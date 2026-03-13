import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика в отношении обработки персональных данных | Skillbox Английский",
  description: "Политика конфиденциальности и обработки персональных данных Skillbox Английский",
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-sb-dark">Skillbox</span>
            <span className="px-2 py-0.5 bg-sb-dark text-white text-xs font-semibold rounded-md">
              английский
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-sb-blue hover:underline flex items-center gap-1 mb-6"
          >
            ← Вернуться на главную
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-sb-dark mb-4">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-sb-text-muted">Последнее обновление: 1 января 2024 года</p>
        </div>

        <div className="prose prose-lg max-w-none text-sb-text space-y-6">
          <p>
            Настоящая политика обработки персональных данных составлена в соответствии с требованиями
            Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» и определяет порядок
            обработки персональных данных и меры по обеспечению безопасности персональных данных
            ООО «Скиллбокс» (далее — Оператор).
          </p>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">1. Основные понятия</h2>
            <p>
              <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или
              косвенно определённому или определяемому физическому лицу (субъекту персональных данных).
            </p>
            <p className="mt-3">
              <strong>Оператор</strong> — ООО «Скиллбокс», ОГРН 1187746791995, юридический адрес:
              г. Москва, ул. Льва Толстого, д. 16, тел.: 8 800 250-26-36.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">
              2. Какие данные мы собираем
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Cookie-файлы и данные браузера</li>
              <li>IP-адрес и данные о местоположении</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">3. Цели обработки</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Запись на пробный урок и консультацию</li>
              <li>Заключение и исполнение договора об оказании образовательных услуг</li>
              <li>Улучшение качества сервиса</li>
              <li>Информирование об акциях и новостях (при наличии согласия)</li>
              <li>Выполнение требований законодательства РФ</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">4. Cookie-файлы</h2>
            <p>
              Сайт использует файлы cookie для персонализации контента и улучшения работы сервиса.
              Вы можете отключить использование cookie в настройках браузера, однако это может
              повлиять на функциональность сайта.
            </p>
            <p className="mt-3">
              Мы используем сервисы Google Analytics и Яндекс.Метрика для анализа посещаемости.
              Этот сайт защищён reCAPTCHA. Применяются{" "}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sb-blue hover:underline"
              >
                Политика конфиденциальности
              </Link>{" "}
              и{" "}
              <Link
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sb-blue hover:underline"
              >
                Условия использования
              </Link>{" "}
              Google.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">5. Права субъекта</h2>
            <p>Вы вправе:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Получить сведения о составе обрабатываемых данных</li>
              <li>Потребовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия оператора в Роскомнадзор</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-sb-dark mt-8 mb-4">6. Контакты</h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
            </p>
            <ul className="list-none mt-3 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <Link href="mailto:help@skillbox.ru" className="text-sb-blue hover:underline">
                  help@skillbox.ru
                </Link>
              </li>
              <li>
                <strong>Телефон:</strong>{" "}
                <Link href="tel:88002502636" className="text-sb-blue hover:underline">
                  8 800 250-26-36
                </Link>{" "}
                (бесплатно по России)
              </li>
              <li>
                <strong>Полная версия документа:</strong>{" "}
                <Link
                  href="https://eng.skillbox.ru/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sb-blue hover:underline"
                >
                  eng.skillbox.ru/policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
