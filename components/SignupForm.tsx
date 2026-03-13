"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, ChevronDown } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Введите имя (минимум 2 символа)"),
  phone: z.string().min(6, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email"),
  consent: z.boolean().refine((v) => v === true, "Необходимо согласие"),
});

type FormData = z.infer<typeof formSchema>;

interface SignupFormProps {
  formId?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  dark?: boolean;
}

const countries = [
  { code: "RU", name: "Россия", flag: "🇷🇺", dialCode: "+7", placeholder: "900 000-00-00" },
  { code: "BY", name: "Беларусь", flag: "🇧🇾", dialCode: "+375", placeholder: "29 123-45-67" },
  { code: "KZ", name: "Казахстан", flag: "🇰🇿", dialCode: "+7", placeholder: "701 123-45-67" },
  { code: "UZ", name: "Узбекистан", flag: "🇺🇿", dialCode: "+998", placeholder: "90 123-45-67" },
  { code: "KG", name: "Кыргызстан", flag: "🇰🇬", dialCode: "+996", placeholder: "550 123-456" },
  { code: "AM", name: "Армения", flag: "🇦🇲", dialCode: "+374", placeholder: "91 123-456" },
  { code: "GE", name: "Грузия", flag: "🇬🇪", dialCode: "+995", placeholder: "598 123-456" },
];

export default function SignupForm({
  formId,
  title,
  subtitle,
  buttonText = "Записаться на бесплатный урок",
  dark = false,
}: SignupFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: true,
    },
  });

  const consentValue = watch("consent");

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Combine country code with local number for submission
    const fullPhoneNumber = `${selectedCountry.dialCode}${data.phone}`;
    const submissionData = {
      ...data,
      phone: fullPhoneNumber,
      countryCode: selectedCountry.code,
      countryName: selectedCountry.name,
    };
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", submissionData);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-3xl p-8 md:p-10 flex flex-col items-center text-center ${
          dark ? "bg-white/10 border border-white/20" : "bg-white shadow-xl border border-gray-100"
        }`}
      >
        <div className="w-16 h-16 bg-sb-lime rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-sb-dark" />
        </div>
        <h3 className={`text-2xl font-extrabold mb-2 ${dark ? "text-white" : "text-sb-dark"}`}>
          Заявка отправлена!
        </h3>
        <p className={`text-base ${dark ? "text-white/70" : "text-sb-text-muted"}`}>
          Наш менеджер свяжется с вами в течение 15 минут и подберёт удобное время для пробного урока.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      id={formId}
      className={`rounded-3xl p-6 md:p-8 ${
        dark
          ? "bg-white/10 border border-white/20"
          : "bg-white shadow-xl border border-gray-100"
      }`}
    >
      {title && (
        <h3 className={`text-2xl font-extrabold mb-2 ${dark ? "text-white" : "text-sb-dark"}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-6 ${dark ? "text-white/70" : "text-sb-text-muted"}`}>
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Имя"
            className={`form-input ${errors.name ? "border-red-400 focus:border-red-400" : ""}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          {/* Flex container for phone field */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:border-sb-blue transition-colors">
            {/* Country selector prefix */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-3 transition-colors min-w-[120px]"
              >
                <span className="text-base">{selectedCountry.flag}</span>
                <ChevronDown className={`w-3 h-3 text-sb-text-muted transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="text-sb-dark text-sm font-semibold">{selectedCountry.dialCode}</span>
              </button>
            </div>

            {/* Phone input - only for local number */}
            <input
              {...register("phone")}
              type="tel"
              placeholder={selectedCountry.placeholder}
              className={`flex-1 border-0 px-4 py-3 focus:ring-0 focus:outline-none ${
                errors.phone ? "text-red-500" : ""
              }`}
            />
          </div>

          {/* Dropdown - moved outside the flex container */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] min-w-[200px]">
              <div className="max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-base">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-sb-dark">{country.name}</div>
                      <div className="text-xs text-sb-text-muted">{country.dialCode}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Электронная почта"
            className={`form-input ${errors.email ? "border-red-400 focus:border-red-400" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <Checkbox
            id={`consent-${formId}`}
            checked={consentValue}
            onCheckedChange={(checked) => setValue("consent", checked === true)}
            className="mt-0.5 flex-shrink-0"
          />
          <label
            htmlFor={`consent-${formId}`}
            className={`text-xs leading-relaxed cursor-pointer ${
              dark ? "text-white/60" : "text-sb-text-muted"
            }`}
          >
            Я согласен(а) на{" "}
            <Link
              href="/policy"
              target="_blank"
              className="underline hover:text-sb-blue transition-colors"
            >
              обработку персональных данных
            </Link>{" "}
            и с{" "}
            <Link
              href="https://skillbox.ru/legal/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sb-blue transition-colors"
            >
              правилами пользования Платформой
            </Link>
          </label>
        </div>
        {errors.consent && (
          <p className="text-xs text-red-500">{errors.consent.message}</p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full bg-sb-blue hover:bg-sb-blue-dark text-white font-semibold text-base shadow-lg hover:shadow-xl btn-shimmer transition-all duration-200 hover:-translate-y-0.5"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Отправляем...
            </>
          ) : (
            buttonText
          )}
        </Button>

        <p className={`text-xs text-center ${dark ? "text-white/50" : "text-sb-text-muted"}`}>
          Нажимая кнопку, вы соглашаетесь на{" "}
          <Link
            href="/policy"
            target="_blank"
            className="underline hover:text-sb-blue transition-colors"
          >
            обработку персональных данных
          </Link>
        </p>
      </form>
    </div>
  );
}
