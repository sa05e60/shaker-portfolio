export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-24 px-8 flex flex-col items-center justify-center">
      <div className="font-sans text-xs text-white/30 tracking-widest uppercase flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-16">
        <a href="mailto:shaker.zxc77@gmail.com" className="hover:text-white transition-colors duration-300">shaker.zxc77@gmail.com</a>
        <span className="hidden md:inline text-white/20">/</span>
        <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
        <span className="hidden md:inline text-white/20">/</span>
        <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
      </div>

      <div className="w-12 h-[1px] bg-white/20 mb-8"></div>

      <p className="font-sans font-light text-xs text-white/20 tracking-wider">
        &copy; {new Date().getFullYear()} Shakir Mahmood Shakir.
      </p>
    </footer>
  );
}
