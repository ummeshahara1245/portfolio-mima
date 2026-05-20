import { useEffect, useRef, useState } from 'react';
import { Code2, Award, Globe, ShoppingBag } from 'lucide-react';

// Your freelancing and development stats
const stats = [
  { icon: Code2, label: 'Projects Completed', value: '15+' },
  { icon: ShoppingBag, label: 'E-commerce Sites', value: '5+' },
  { icon: Award, label: 'Client Satisfaction', value: '100%' },
  { icon: Globe, label: 'Live Websites', value: '10+' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#38bdf8]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[#38bdf8] text-sm font-medium tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-[#38bdf8]">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#38bdf8]/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto border border-white/10 bg-gradient-to-br from-[#38bdf8]/10 to-transparent">
              <img
                src="https://i.ibb.co.com/7xX0SSk4/3127-removebg-preview.png"
                alt="Ummay Sahara"
                className="w-full h-full object-cover object-top grayscale-[10%] hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#38bdf8]/20 rounded-2xl -z-10" />
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              WordPress & Frontend Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-5">
              Hello! I am <span className="text-white font-semibold">Ummay Sahara</span>, a dedicated Web Developer and Freelancer. Over the past 3 years, I have been combining design aesthetics with clean code to build highly responsive and modern websites.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I specialize in working with modern web technologies including **WordPress, React, Next.js, and Tailwind CSS**. My experience includes developing fully functional e-commerce websites with integrated local payment gateways and crafting dynamic web applications. My goal is to transform clients' ideas into flawless, user-friendly digital products.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Ummay Sahara' },
                { label: 'Email', value: 'ummaysahara2001@gmail.com' },
                { label: 'Location', value: 'Bangladesh' },
                { label: 'Available for', value: 'Freelance / Remote Work' },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-white/5 pb-2">
                  <span className="text-[#38bdf8] text-sm font-medium">{label}: </span>
                  <span className="text-gray-300 text-sm ml-1">{value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#38bdf8] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#7dd3fc] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-[#111118] border border-white/8 rounded-2xl p-6 text-center hover:border-[#38bdf8]/30 hover:bg-[#38bdf8]/5 transition-all duration-300 group"
            >
              <Icon size={28} className="text-[#38bdf8] mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}