import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AuroraBackground({ mouseX, mouseY }: { mouseX: number, mouseY: number }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
  }, [mouseX, mouseY]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at var(--mouse-x, 50%) var(--mouse-y, 50%), #0a1628 0%, #020617 65%)'
      }}
    >
      {/* Orb 1 — deep indigo, top-left, large slow drift */}
      <motion.div
        className="aurora-orb top-[-5%] left-[10%] w-[70vw] h-[70vh]"
        style={{ background: 'rgba(79, 70, 229, 0.18)', filter: 'blur(140px)' }}
        animate={{ y: [0, 60, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — cyan, right side, breathes */}
      <motion.div
        className="aurora-orb top-[25%] right-[-5%] w-[55vw] h-[55vh]"
        style={{ background: 'rgba(6, 182, 212, 0.14)', filter: 'blur(150px)' }}
        animate={{ y: [0, -70, 0], x: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 3 — violet, bottom, slow rise */}
      <motion.div
        className="aurora-orb bottom-[-15%] left-[5%] w-[75vw] h-[50vh]"
        style={{ background: 'rgba(139, 92, 246, 0.13)', filter: 'blur(160px)' }}
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 4 — teal accent, mid-center, small pulse */}
      <motion.div
        className="aurora-orb top-[55%] left-[35%] w-[40vw] h-[40vh]"
        style={{ background: 'rgba(20, 184, 166, 0.10)', filter: 'blur(120px)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
