import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const roles = ['WordPress Developer', 'Frontend Developer', 'Full-Stack Freelancer', 'Creative Coder'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          timeoutRef.current = setTimeout(tick, 90);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          timeoutRef.current = setTimeout(tick, 50);
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
          timeoutRef.current = setTimeout(tick, 300);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 120);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0ea5e9]/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38bdf8]/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 pt-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[#38bdf8] font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Hi, I am
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="block text-white">Ummay Sahara</span>
            <span className="block text-[#38bdf8] mt-1">
              {displayText}
              <span className="animate-blink border-r-2 border-[#38bdf8] ml-0.5">&nbsp;</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mt-4 mb-8 leading-relaxed">
            I am a passionate Web Developer specializing in WordPress Development, React, and Next.js. With a strong focus on clean coding and modern design trends, I help businesses and individuals establish a solid online presence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#38bdf8] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#7dd3fc] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download="Ummay_Sahara_Resume.pdf"
              className="px-6 py-3 border border-[#38bdf8]/40 text-[#38bdf8] font-semibold rounded-lg hover:bg-[#38bdf8]/10 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* 🔗 Twitter বাদ দিয়ে তোমার আসল লিঙ্ক ও Fiverr কাস্টম আইকন যোগ করা হয়েছে */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { 
                icon: <Github size={18} />, 
                href: 'https://github.com/ummeshahara1245', 
                label: 'GitHub' 
              },
              { 
                icon: <Linkedin size={18} />, 
                href: 'https://www.linkedin.com/in/ummay-sahara-a11507241/', 
                label: 'LinkedIn' 
              },
              { 
                icon: <span className="text-[13px] font-black tracking-tighter font-sans">fi</span>, 
                href: 'https://www.fiverr.com/s/Ay50b85', 
                label: 'Fiverr' 
              },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#38bdf8]/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-[#38bdf8]/20 animate-reverse-spin" />
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-[#38bdf8]/10 blur-xl" />
            {/* Image */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-[#38bdf8]/50 bg-gradient-to-br from-[#38bdf8]/20 to-transparent">
              <img
                src="https://i.ibb.co.com/7xX0SSk4/3127-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-cover object-top grayscale-[20%]"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 bg-[#111118] border border-[#38bdf8]/20 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">Available for work</span>
            </div>
            <div className="absolute -left-6 bottom-12 bg-[#111118] border border-white/10 rounded-xl px-3 py-2 shadow-xl">
              <div className="text-xs text-gray-400">Experience</div>
              <div className="text-lg font-bold text-[#38bdf8]">3+ Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-[#38bdf8] transition-colors duration-200 group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
