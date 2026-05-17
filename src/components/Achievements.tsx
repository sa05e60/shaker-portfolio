import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useTranslation } from "react-i18next";

function Counter({ target, prefix = "" }: { target: number, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, target, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = prefix + Math.round(value).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, target, prefix]);

  return <span ref={ref}>{prefix}0</span>;
}

export default function Achievements() {
  const { t } = useTranslation();

  const rankings = [
    { target: 78, prefix: "#", context: t('achievements.globally'), event: "HTB University CTF 2025" },
    { target: 2, prefix: "#", context: t('achievements.in_iraq'), event: "HTB University CTF 2025" },
    { target: 6, prefix: "#", context: t('achievements.middle_east'), event: "HTB University CTF & Ynov" },
    { target: 1, prefix: "#", context: t('achievements.middle_east'), event: "Ynov Partners Challenge" },
    { target: 3, prefix: "Top ", context: t('achievements.finalist'), event: "GEW AI Hackathon" },
  ];

  return (
    <section id="achievements" className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-32">
        <div className="font-sans tracking-widest text-xs text-white/30 uppercase mb-4 rtl:text-right">
          {t('achievements.tag')}
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-6 rtl:text-right">
          {t('achievements.title')}
        </h2>
        <div className="w-10 h-[1px] bg-white/20 rtl:ml-auto rtl:mr-0" />
      </div>

      {/* Waterfall Grid Layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-start">
        {/* Column 1 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8 md:mt-0">
          <AchievementCard item={rankings[0]} index={0} />
          <AchievementCard item={rankings[3]} index={3} />
        </div>
        {/* Column 2 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8 md:mt-24">
          <AchievementCard item={rankings[1]} index={1} />
          <AchievementCard item={rankings[4]} index={4} />
        </div>
        {/* Column 3 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8 md:mt-48">
          <AchievementCard item={rankings[2]} index={2} />
          <CertificationsCard index={5} />
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[350px] p-8 rounded-3xl bg-transparent border border-white/20 md:border-white/5 overflow-hidden flex flex-col justify-end group md:hover:border-white/20 transition-colors duration-500"
    >
      {/* Massive Ghost Number Background */}
      <div className="absolute top-4 -right-4 pointer-events-none select-none overflow-hidden h-full flex items-start rtl:right-auto rtl:-left-4">
        <span 
          className="font-display font-bold text-[160px] md:text-[180px] leading-[0.8] text-transparent opacity-60 md:opacity-20 md:group-hover:opacity-60 transition-opacity duration-700"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
        >
          <Counter target={item.target} prefix={item.prefix} />
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-2 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pt-12 -mx-8 -mb-8 px-8 pb-8 rtl:items-end rtl:text-right">
        <span className="font-sans font-light text-xl text-rose-100 md:text-white md:group-hover:text-rose-100 transition-colors">
          {item.context}
        </span>
        <span className="font-sans text-[10px] text-rose-400/80 tracking-[0.2em] uppercase">
          {item.event}
        </span>
      </div>
    </motion.div>
  );
}

function CertificationsCard({ index }: { index: number }) {
  const { t } = useTranslation();
  const certs = [
    "Google Cybersecurity Pro",
    "CompTIA Security+",
    "English C2 EFSET",
    "National Cybersecurity Event Finalist",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[350px] p-8 rounded-3xl bg-white/[0.04] md:bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-end group md:hover:bg-white/[0.04] transition-colors duration-500"
    >
      <div className="absolute top-10 right-10 opacity-30 md:opacity-10 md:group-hover:opacity-30 transition-opacity duration-500 text-white rtl:right-auto rtl:left-10">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-4 rtl:items-end rtl:text-right">
        <span className="font-display italic text-3xl text-white/90">
          {t('achievements.cred_title')}
        </span>
        <div className="h-[1px] bg-white/20 mb-2 w-16 md:w-10 md:group-hover:w-16 transition-all duration-500 rtl:ml-auto rtl:mr-0" />
        <ul className="flex flex-col gap-4">
          {certs.map((c, j) => (
            <li key={j} className="flex items-start gap-4 rtl:flex-row-reverse">
              <div className="w-[4px] h-[4px] rounded-full bg-rose-500/80 mt-[8px] shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.5)] md:shadow-none md:group-hover:shadow-[0_0_10px_rgba(244,63,94,0.5)] transition-shadow" />
              <span className="font-sans font-light text-sm text-white/70 md:text-white/50 leading-relaxed md:group-hover:text-white/70 transition-colors">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
