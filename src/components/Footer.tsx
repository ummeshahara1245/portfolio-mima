import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 py-10 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <button onClick={() => scrollTo('home')} className="text-xl font-bold tracking-tight">
            <span className="text-[#38bdf8]">Ummay</span>
            <span className="text-white ml-1">Sahara</span>
            <span className="text-[#38bdf8]">.</span>
          </button>

          <nav className="flex gap-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm capitalize text-gray-400 hover:text-white transition-colors"
              >
                {id}
              </button>
            ))}
          </nav>

          {/* 🔗 তোমার প্রোভাইড করা একদম সঠিক লিংকসমূহ */}
          <div className="flex gap-3">
            {[
              { 
                icon: <Github size={16} />, 
                href: 'https://github.com/ummeshahara1245' 
              },
              { 
                icon: <Linkedin size={16} />, 
                href: 'https://www.linkedin.com/in/ummay-sahara-a11507241/' 
              },
              { 
                icon: <span className="text-[11px] font-black tracking-tighter">fi</span>, 
                href: 'https://www.fiverr.com/s/Ay50b85' 
              },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          Made with <Heart size={12} className="inline text-red-400 mx-1" /> by Ummay Sahara &mdash; &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
