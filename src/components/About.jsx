export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/40 to-surface border border-primary/30 flex items-center justify-center shadow-xl shadow-primary/10">
                <svg className="w-32 h-32 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-primary/20" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              I&apos;m a passionate full-stack developer with a strong foundation in building
              scalable web applications. I love turning complex problems into simple,
              elegant solutions that delight users.
            </p>
            <p>
              With experience across the entire stack — from crafting pixel-perfect UIs
              with React to designing robust backend APIs — I bring a holistic perspective
              to every project I work on.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
              to open source, or leveling up on the latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Name', value: 'William Ortiz' },
                { label: 'Role', value: 'Full-Stack Developer' },
                { label: 'Location', value: 'Available Remotely' },
                { label: 'Status', value: 'Open to Work' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-primary font-semibold text-sm">{label}: </span>
                  <span className="text-gray-300 text-sm">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-sky-400 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
