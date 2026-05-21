import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ummaysahara2001@gmail.com', href: 'https://mail.google.com/mail/u/0/#inbox' },
    { icon: Phone, label: 'Phone', value: '+880 1234 567890', href: 'tel:+8801614451945' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38bdf8]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[#38bdf8] text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact <span className="text-[#38bdf8]">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#38bdf8]/50" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Side */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <h3 className="text-xl font-bold text-white mb-3">Let's work together</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8]/20 transition-all duration-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</div>
                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-[#111118] border border-[#38bdf8]/20 rounded-2xl p-10">
                <CheckCircle size={56} className="text-[#38bdf8] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="px-5 py-2.5 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 rounded-lg hover:bg-[#38bdf8]/20 transition-colors font-medium"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#111118] border border-white/8 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#38bdf8] transition-all ${errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-[#38bdf8]/50'
                        }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#38bdf8] transition-all ${errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-[#38bdf8]/50'
                        }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's it about?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#38bdf8]/50 focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none ${errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-[#38bdf8]/50'
                      }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-[#38bdf8] text-[#0a0a0f] font-semibold rounded-xl hover:bg-[#7dd3fc] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0a0a0f]/30 border-t-[#0a0a0f] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
