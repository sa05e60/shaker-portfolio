import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Hero({ mouseX, mouseY }: { mouseX: number, mouseY: number }) {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const { t, i18n } = useTranslation();

  const mouseDeltaX = mouseX - windowWidth / 2;
  const mouseDeltaY = mouseY - windowHeight / 2;

  const springConfig = { stiffness: 60, damping: 15 };

  const photoOffsetX = useSpring(useMotionValue(0), springConfig);
  const photoOffsetY = useSpring(useMotionValue(0), springConfig);

  const text1OffsetX = mouseDeltaX * -0.03;
  const text2OffsetX = mouseDeltaX * 0.03;

  useEffect(() => {
    photoOffsetX.set(mouseDeltaX * 0.02);
    photoOffsetY.set(mouseDeltaY * 0.02);
  }, [mouseDeltaX, mouseDeltaY, photoOffsetX, photoOffsetY]);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">

      {/* Center Image — floats, tracks mouse, grayscale cinematic blend. Appears FIRST. */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        >
          <motion.div style={{ x: photoOffsetX, y: photoOffsetY }}>
            <img
              src="/shakir-profile.png?v=3"
              alt="Shakir Mahmood Shakir"
              className="h-[85vh] object-contain pointer-events-none mt-[5vh]"
              style={{
                filter: 'grayscale(100%) contrast(115%) brightness(0.85)',
                mixBlendMode: 'luminosity',
                maskImage: 'linear-gradient(to bottom, black 45%, transparent 92%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent 92%)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Line 1 — SHAKIR — top of viewport, left-anchored. Comes from left. */}
      <motion.div
        className="absolute top-[26vh] md:top-[18vh] left-0 w-full pl-[3vw] z-20 rtl:pr-[3vw] rtl:pl-0 rtl:text-right"
        animate={{ x: text1OffsetX }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div 
          initial={{ opacity: 0, x: -150 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span 
            className="font-display italic text-[14.25vw] md:text-[12.35vw] leading-none text-white block select-none"
            style={{ fontFamily: i18n.language === 'ar' ? "'Kufam', sans-serif" : undefined }}
          >
            {t("hero.title1")}
          </span>
        </motion.div>
      </motion.div>

      {/* Line 2 — MAHMOOD — upper-mid, right-anchored. Comes from right. */}
      <motion.div
        className="absolute top-[35vh] md:top-[40vh] right-0 w-full pr-[2vw] text-right z-20 rtl:pl-[2vw] rtl:pr-0 rtl:text-left"
        animate={{ x: text2OffsetX }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div 
          initial={{ opacity: 0, x: 150 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span 
            className="font-display font-normal text-[13vw] md:text-[11vw] leading-none text-white block select-none"
            style={{ fontFamily: i18n.language === 'ar' ? "'Kufam', sans-serif" : undefined }}
          >
            {t("hero.title2")}
          </span>
        </motion.div>
      </motion.div>

      {/* Line 3 — SHAKIR ghost outline — in FRONT of image (z-30) */}
      <div className="absolute top-[62vh] w-full text-center z-30 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-display italic text-[10.45vw] md:text-[8.55vw] leading-none block select-none opacity-40 md:opacity-100"
            style={{
              fontFamily: i18n.language === 'ar' ? "'Kufam', sans-serif" : undefined,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.18)',
            }}
          >
            {t("hero.title1")}
          </span>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <motion.div 
        className="absolute bottom-20 left-0 right-0 z-30 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-24 h-[1px] bg-white/20"></div>
        <p className="text-editorial text-sm text-center">
          {t("hero.role")}
        </p>
        <p className="font-sans text-xs text-white/30 text-center" dir="ltr">
          Baghdad, Iraq · +964 773 407 8773 · shaker.zxc77@gmail.com
        </p>
        
        <div className="flex gap-4 mt-4 rtl:flex-row-reverse">
          <a href="#projects" className="border border-white/20 px-6 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors duration-500" data-testid="btn-view-work">
            {t("hero.explore")}
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 z-30 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <span className="font-sans text-[10px] text-white/30 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          {t("hero.scroll")}
        </span>
        <motion.div 
          className="w-[1px] h-8 bg-white/20 mt-2"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
