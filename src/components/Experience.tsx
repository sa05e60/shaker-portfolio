import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
  const rolesData = t('experience.roles', { returnObjects: true }) as Array<{
    role: string;
    company: string;
    period: string;
    points: string[];
  }>;

  const roles = rolesData.map((r, i) => ({
    num: `0${i + 1}`,
    ...r
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.5 });

  return (
    <section id="experience" ref={containerRef} className="relative py-32 md:py-48 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="mb-32 flex flex-col items-center justify-center text-center">
        <div className="font-sans tracking-widest text-xs text-white/30 uppercase mb-4">
          {t('experience.tag')}
        </div>
        <h2 className="font-display italic text-5xl md:text-7xl text-white mb-6">
          {t('experience.title')}
        </h2>
        <div className="w-10 h-[1px] bg-white/20" />
      </div>

      <div className="relative">
        {/* Background Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2" />
        
        {/* Active Glowing Line */}
        <motion.div 
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] transform md:-translate-x-1/2 origin-top"
          style={{ scaleY: smoothProgress }}
        />

        {/* Nodes */}
        <div className="space-y-24 md:space-y-40">
          {roles.map((role, i) => (
            <TimelineItem key={i} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ role, index }: { role: any, index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.5 });

  const isEven = index % 2 === 0;

  const opacity = useTransform(smoothProgress, [0, 1], [0.3, 1]);
  const y = useTransform(smoothProgress, [0, 1], [40, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
  const glowOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={itemRef} className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full">
      {/* Node indicator */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-black border border-white/30 transform -translate-x-1/2 mt-8 md:mt-0 flex items-center justify-center z-10 rtl:translate-x-1/2">
        <motion.div 
          className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
          style={{ opacity: glowOpacity, scale }}
        />
      </div>

      {/* Card Content */}
      <motion.div 
        style={{ opacity, y }}
        className={`w-full md:w-[45%] pl-20 md:pl-0 rtl:pl-0 rtl:pr-20 md:rtl:pr-0 ${isEven ? 'md:mr-auto md:rtl:mr-0 md:rtl:ml-auto' : 'md:ml-auto md:rtl:ml-0 md:rtl:mr-auto'}`}
      >
        <div className={`group relative p-8 md:p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 ${isEven ? 'md:text-right rtl:md:text-left' : 'md:text-left rtl:md:text-right'}`}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className={`flex flex-col ${isEven ? 'md:items-end rtl:md:items-start' : 'md:items-start rtl:md:items-end'} mb-8`}>
            {/* Number + Period */}
            <div className={`flex items-baseline gap-6 mb-6 ${isEven ? 'md:flex-row-reverse rtl:md:flex-row' : ''}`}>
              <span className="font-display text-6xl md:text-7xl font-bold text-white/[0.06] leading-none select-none">
                {role.num}
              </span>
              <span className="font-sans text-[11px] text-white/30 tracking-widest uppercase">
                {role.period}
              </span>
            </div>

            {/* Role */}
            <h3 className="font-display italic text-3xl md:text-4xl text-white/70 leading-tight mb-2">
              {role.role}
            </h3>
            
            {/* Company */}
            <p className="font-sans font-bold tracking-wider text-lg md:text-xl text-white uppercase">
              {role.company}
            </p>
          </div>

          {/* Points */}
          <ul className={`space-y-4 ${isEven ? 'md:text-right rtl:md:text-left' : 'md:text-left rtl:md:text-right'}`}>
            {role.points.map((pt: string, j: number) => (
              <li key={j} className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse rtl:md:flex-row' : ''}`}>
                <span className="font-sans text-[10px] mt-[5px] shrink-0 text-white/20">
                  0{j + 1}
                </span>
                <span className="font-sans font-light text-sm text-white/50 leading-relaxed">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
