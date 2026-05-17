import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as Array<{title: string, subtitle: string, desc: string}>;
  const techStacks = [
    ["Python", "LLMs", "FastAPI", "NLP", "Redis"],
    ["Python", "LLMs", "Nmap", "Metasploit", "OSINT"],
    ["Python", "Scapy", "PCAP", "Wireshark API", "ML"]
  ];
  const projects = items.map((item, i) => ({
    num: `0${i + 1}`,
    ...item,
    tech: techStacks[i]
  }));

  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="mb-24">
        <div className="font-sans tracking-widest text-xs text-white/30 uppercase mb-4 rtl:text-right">
          {t('projects.tag')}
        </div>
      </div>

      <div className="relative flex flex-col gap-[10vh] pb-[20vh]">
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ proj, index }: { proj: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full h-[80vh] flex items-center justify-center rounded-[2rem] overflow-hidden bg-white/[0.02] backdrop-blur-2xl border border-white/5 border-t-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      style={{ 
        top: `calc(10vh + ${index * 30}px)`,
        scale,
        opacity,
      }}
    >
      {/* Glowing Crimson Gradient */}
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-rose-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start w-full rtl:flex-row-reverse">
          <span className="font-sans text-xl md:text-3xl font-light text-white/30 tracking-widest">
            {proj.num}
          </span>
          <span className="font-sans text-[10px] md:text-xs text-rose-500/80 tracking-[0.3em] uppercase">
            {proj.subtitle}
          </span>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-12 rtl:lg:flex-row-reverse">
          <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] rtl:lg:text-[7rem] font-bold text-white leading-[0.85] rtl:leading-tight tracking-tighter rtl:tracking-normal break-words max-w-[50%] rtl:max-w-full">
            {proj.title}
          </h2>

          <div className="w-full lg:w-[40%] flex flex-col gap-8 rtl:text-right">
            <p className="font-sans font-light text-base md:text-lg text-white/60 leading-relaxed">
              {proj.desc}
            </p>
            <div className="flex flex-wrap gap-3 rtl:flex-row-reverse">
              {proj.tech.map((tag: string, k: number) => (
                <span key={k} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs uppercase tracking-widest text-white/70 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
