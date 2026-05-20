import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'HTML / CSS', level: 97 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 72 },
      { name: 'Firebase', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Framer Motion', level: 78 },
      { name: 'GSAP', level: 65 },
    ],
  },
];

const techIcons = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Node.js', color: '#8cc84b' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'Figma', color: '#f24e1e' },
  { name: 'Git', color: '#f05032' },
  { name: 'GSAP', color: '#88ce02' },
];

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-semibold text-[#38bdf8]">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#38bdf8]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[#38bdf8] text-sm font-medium tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[#38bdf8]/50" />
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`bg-[#111118] border border-white/8 rounded-2xl p-6 hover:border-[#38bdf8]/20 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                {cat.title}
              </h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div
          className={`transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-center text-lg font-semibold text-gray-400 mb-6">Technologies I work with</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techIcons.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-[#111118] border border-white/8 rounded-full text-sm font-medium text-gray-300 hover:border-[#38bdf8]/40 hover:text-white hover:bg-[#38bdf8]/5 transition-all duration-200 cursor-default"
                style={{ '--dot-color': tech.color } as React.CSSProperties}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
                  style={{ backgroundColor: tech.color }}
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
