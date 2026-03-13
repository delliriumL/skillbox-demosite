"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-sb-dark text-white rounded-2xl p-5 shadow-2xl border border-white/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-white/80">
                  Мы используем файлы cookie для персонализации сервисов и повышения удобства пользования сайтом.{" "}
                  <Link
                    href="/policy"
                    className="text-sb-lime underline hover:no-underline"
                  >
                    Политика конфиденциальности
                  </Link>
                  . Этот сайт защищён reCAPTCHA и{" "}
                  <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sb-lime underline hover:no-underline"
                  >
                    Google
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={handleDecline}
                className="text-white/40 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleAccept}
                size="sm"
                className="flex-1 bg-sb-lime text-sb-dark hover:bg-sb-lime-dark font-semibold"
              >
                Принять
              </Button>
              <Button
                onClick={handleDecline}
                size="sm"
                variant="ghost"
                className="flex-1 text-white/60 hover:text-white hover:bg-white/10"
              >
                Отклонить
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
