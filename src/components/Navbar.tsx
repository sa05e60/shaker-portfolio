import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const links = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.achievements"), href: "#achievements" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex items-center justify-between px-8 h-20 ${isScrolled ? "bg-[#020617]/50 backdrop-blur-sm border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="flex-shrink-0 w-8" />
      <div className="hidden md:flex items-center gap-8">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="font-sans font-light tracking-widest uppercase text-xs text-white/50 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={toggleLanguage}
          className="font-sans font-bold tracking-widest uppercase text-xs px-3 py-1 border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-sm"
        >
          {i18n.language === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
      <div className="md:hidden flex-shrink-0 ml-auto">
         <button 
          onClick={toggleLanguage}
          className="font-sans font-bold tracking-widest uppercase text-xs px-3 py-1 border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-sm"
        >
          {i18n.language === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
    </motion.nav>
  );
}
