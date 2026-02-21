export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-surface to-dark opacity-90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          William Ortiz
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Full-Stack Developer
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I build modern, performant web applications with great user experiences.
          Passionate about clean code, intuitive design, and solving real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-sky-400 transition-colors shadow-lg shadow-primary/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
