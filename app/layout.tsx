import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Английский для переезда и путешествий | Skillbox",
  description:
    "Курс английского языка для тех, кто планирует переезд за рубеж, часто путешествует или работает в международной среде. Заговорите свободно уже через 2 месяца. Первый урок — бесплатно.",
  keywords:
    "английский для переезда, разговорный английский для путешествий, курсы английского для релокации, онлайн курс английского skillbox",
  openGraph: {
    title: "Английский для переезда и путешествий | Skillbox",
    description:
      "Заговорите свободно уже через 2 месяца. Реальные кейсы, гибкий график, ИИ-помощник 24/7. Первый урок — бесплатно.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
