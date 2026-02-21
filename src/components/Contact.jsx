import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send the form data to a backend or service like EmailJS
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-lg mx-auto">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Thanks for reaching out. I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-primary/20"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="mt-16 flex justify-center gap-6">
          {[
            {
              href: 'https://github.com/williamortiz',
              label: 'GitHub',
              icon: (
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
              ),
              fill: true,
            },
            {
              href: 'https://linkedin.com/in/williamortiz',
              label: 'LinkedIn',
              icon: (
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
              ),
              fill: false,
            },
            {
              href: 'mailto:hello@williamortiz.net',
              label: 'Email',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              ),
              fill: false,
            },
          ].map(({ href, label, icon, fill }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-colors"
            >
              <svg className="w-5 h-5" fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} viewBox="0 0 24 24">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
