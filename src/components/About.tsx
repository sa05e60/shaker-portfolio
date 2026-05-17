import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { t } = useTranslation();

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0.5, 0.5, 0]);

  return (
    <section id="about" ref={containerRef} className="py-48 md:py-64 relative w-full overflow-hidden">
      
      {/* Cinematic Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-rose-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Massive Background Typography Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span 
          className="font-display font-bold text-[35vw] leading-none text-transparent whitespace-nowrap"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.08)" }}
        >
          {t('about.origins')}
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 rtl:lg:flex-row-reverse">
          
          {/* Left: Cinematic Highlights */}
          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans tracking-widest text-xs text-white/30 uppercase rtl:text-right"
            >
              {t('about.mission')}
            </motion.div>
            
            <div className="flex flex-col gap-8 md:gap-12 rtl:text-right">
              {[
                t('about.hl1'),
                t('about.hl2'),
                t('about.hl3')
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] md:leading-[1.1]">
                    {text}
                  </h2>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Editorial Bio Column */}
          <div className="lg:col-span-4 lg:mt-32 flex flex-col gap-8 rtl:items-end">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-[1px] bg-white/30 origin-left rtl:origin-right"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-8 rtl:text-right"
            >
              <p 
                className="font-sans font-light text-base md:text-lg leading-relaxed text-white/50"
                dangerouslySetInnerHTML={{ __html: t('about.p1') }}
              />
              <p 
                className="font-sans font-light text-base md:text-lg leading-relaxed text-white/50"
                dangerouslySetInnerHTML={{ __html: t('about.p2') }}
              />
              <p 
                className="font-sans font-light text-base md:text-lg leading-relaxed text-white/50"
                dangerouslySetInnerHTML={{ __html: t('about.p3') }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
