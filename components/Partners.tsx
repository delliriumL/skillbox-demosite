"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const partners = [
  { name: "Сбербанк", color: "#21A038" },
  { name: "Тинькофф", color: "#FFDD2D" },
  { name: "ОТПБанк", color: "#FF6600" },
  { name: "Газпромбанк", color: "#0066CC" },
  { name: "ВКонтакте", color: "#0077FF" },
  { name: "МТС", color: "#E30611" },
  { name: "Мегафон", color: "#00B956" },
  { name: "Яндекс", color: "#FF0000" },
];

// Create alternating array to avoid same colors next to each other
const createAlternatingPartners = () => {
  const result = [];
  const usedColors = new Set();
  let lastColor = "";
  
  // First pass - add all partners with color checking
  for (const partner of partners) {
    if (partner.color !== lastColor) {
      result.push(partner);
      lastColor = partner.color;
    } else {
      // Find next partner with different color
      const nextPartner = partners.find(p => p.color !== lastColor);
      if (nextPartner) {
        result.push(nextPartner);
        lastColor = nextPartner.color;
      }
    }
  }
  
  // Second pass - add remaining partners
  for (const partner of partners) {
    if (!result.includes(partner)) {
      result.push(partner);
      lastColor = partner.color;
    }
  }
  
  return result;
};

const alternatingPartners = createAlternatingPartners();

// Text-based partner logos since we can't load external brand assets
function PartnerLogo({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center justify-center h-12 px-6 transition-all duration-300 hover:scale-110">
      <span 
        className="font-black text-lg tracking-tight transition-all duration-300"
        style={{ color: "#9CA3AF" }}
        onMouseEnter={(e) => e.currentTarget.style.color = color}
        onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}>
        {name}
      </span>
    </div>
  );
}

export default function Partners() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const duplicatedPartners = [...alternatingPartners, ...alternatingPartners, ...alternatingPartners];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-sb-text-muted mb-2"
          >
            Банки-партнёры
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-sb-text-muted max-w-xl mx-auto"
          >
            Оформите беспроцентную рассрочку до 24 месяцев.
            Без первого взноса и переплат по процентам. Первый платёж — через месяц.
          </motion.p>
        </div>

        {/* Animated Marquee */}
        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div key={i} className="inline-block">
                <PartnerLogo name={partner.name} color={partner.color} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Installment section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-sb-gray rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-sb-dark mb-4">
                Учитесь сейчас,
                <br />
                платите потом
              </h3>
              <p className="text-sb-text-muted text-lg leading-relaxed">
                Наши банки-партнёры готовы предоставить рассрочку до 24 месяцев. 
                Без первого взноса и переплат по процентам. Первый платёж — через месяц.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-sb-dark mb-1">от 2 750 ₽</p>
                <p className="text-sm text-sb-text-muted">в месяц при рассрочке на 24 мес.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-sb-text-muted">
                <div className="w-4 h-4 bg-sb-lime rounded-full flex-shrink-0" />
                <span>Без переплат</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-sb-text-muted">
                <div className="w-4 h-4 bg-sb-lime rounded-full flex-shrink-0" />
                <span>Первый платёж через месяц</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-sb-text-muted">
                <div className="w-4 h-4 bg-sb-lime rounded-full flex-shrink-0" />
                <span>Одобрение за 2 минуты</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
