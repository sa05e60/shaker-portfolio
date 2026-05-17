import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const itemsData = t('skills.items', { returnObjects: true }) as Array<{title: string, subtitle: string, desc: string}>;
  const spans = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1"
  ];
  const skillLists = [
    ["Red Teaming", "Priv Esc", "Bin Exploitation", "Rev Engineering", "Malware Analysis"],
    ["Network Recon", "Packet Analysis", "OSINT"],
    ["Python", "C++", "React", "FastAPI"]
  ];
  const items = itemsData.map((item, i) => ({
    ...item,
    skills: skillLists[i],
    span: spans[i]
  }));

  return (
    <section id="skills" className="relative py-32 w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 rtl:flex-row-reverse">
        <div>
          <div className="font-sans tracking-widest text-xs text-white/30 uppercase mb-8 rtl:text-right">
            {t('skills.tag')}
          </div>
          <h2 className="font-display italic text-6xl md:text-8xl text-white leading-none rtl:text-right">
            {t('skills.title1')} <br /> {t('skills.title2')}
          </h2>
        </div>
        <div className="w-24 h-[1px] bg-white/20 md:mb-6" />
      </div>

      {/* Hierarchy Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(350px,auto)]">
          {items.map((item, i) => (
            <HierarchyCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HierarchyCard({ item, index }: { item: any, index: number }) {
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-8 md:p-12 border border-white/10 bg-white/[0.02] md:hover:bg-white/[0.04] transition-colors duration-500 rounded-none overflow-hidden ${item.span}`}
    >
      {/* HUD Background Element for the massive empty space */}
      {isLarge && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20 md:opacity-10 md:group-hover:opacity-30 transition-opacity duration-1000">
          {/* Outer rotating dashed circle */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150%] md:w-[600px] aspect-square rounded-full border border-white/20 border-dashed"
          />
          {/* Inner rotating crosshair circle */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[100%] md:w-[400px] aspect-square rounded-full border border-white/10 flex items-center justify-center"
          >
            <div className="absolute w-full h-[1px] bg-white/20" />
            <div className="absolute h-full w-[1px] bg-white/20" />
            <div className="w-[120px] h-[120px] border border-white/20 rotate-45" />
          </motion.div>
          {/* Center pinpoint */}
          <div className="absolute w-2 h-2 bg-white/50 rounded-full" />
          
          {/* Side Data Readout */}
          <div className="absolute left-10 rtl:left-auto rtl:right-10 top-1/2 -translate-y-1/2 font-sans text-[10px] tracking-[0.2em] text-white flex flex-col gap-2 hidden lg:flex rtl:text-right">
            <span>[SYS.OP.409]</span>
            <span>THREAT_LVL: SEVERE</span>
            <span>VECTOR: EXTERNAL</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="mt-2 text-rose-500"
            >
              &gt; TRACKING_
            </motion.span>
          </div>
        </div>
      )}

      <div className="flex flex-col relative z-10 pointer-events-none rtl:items-end rtl:text-right">
        <span className="font-sans text-[10px] text-white/60 md:text-white/30 tracking-[0.3em] uppercase mb-6 block md:group-hover:text-white/60 transition-colors duration-500 rtl:text-right">
          0{index + 1} // {item.subtitle}
        </span>
        <h3 
          className={`font-display italic ${isLarge ? 'text-6xl md:text-8xl lg:text-9xl rtl:lg:text-7xl' : 'text-5xl md:text-6xl rtl:text-4xl'} leading-[0.85] rtl:leading-tight text-white md:text-transparent transition-all duration-700 rtl:text-right rtl:tracking-normal break-words`}
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
        >
          <span className="md:group-hover:text-white transition-colors duration-700">
            {item.title}
          </span>
        </h3>
      </div>

      <div className="relative z-10 flex flex-col gap-6 mt-12 rtl:items-end rtl:text-right">
        <p className={`font-sans font-light ${isLarge ? 'text-xl' : 'text-base'} text-white/80 md:text-white/40 leading-relaxed md:group-hover:text-white/80 transition-colors duration-500 ${isLarge ? 'max-w-2xl rtl:ml-0 rtl:mr-auto' : ''}`}>
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-3 mt-4 rtl:flex-row-reverse">
          {item.skills.map((skill: string, j: number) => (
            <span
              key={j}
              className="px-5 py-2 border border-white/30 md:border-white/10 uppercase text-[10px] tracking-widest text-white/80 md:text-white/40 md:group-hover:border-white/30 hover:!bg-white hover:!text-black transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative corner accents for brutalist feel */}
      <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-12 md:w-6 h-[1px] bg-white/40 md:group-hover:w-12 transition-all duration-500" />
      <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[1px] h-12 md:h-6 bg-white/40 md:group-hover:h-12 transition-all duration-500" />
      
      <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-12 md:w-6 h-[1px] bg-white/40 md:group-hover:w-12 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-[1px] h-12 md:h-6 bg-white/40 md:group-hover:h-12 transition-all duration-500" />
    </motion.div>
  );
}
