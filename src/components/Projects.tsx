import { useEffect, useRef, useState } from 'react'
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const categories = ['All', 'WordPress', 'React', 'Next.js']

const projects = [
  {
    title: 'NBR Audit Tracker',
    description:
      'A dynamic React application built to help citizens verify tax audit and identification status through secure API-based data systems.',
    image: 'https://i.ibb.co.com/KcL6K2mD/project4.png',
    tags: ['React', 'Node.js', 'TailwindCSS'],
    category: 'React',
    live: 'https://nbr-audit-tracker-qffu.vercel.app/',
    github: 'https://github.com/ummaysahara/NBR-Audit-Tracker.git',
    featured: true,
  },
  {
    title: 'TinyTots & Maternity Care',
    description:
      'An interactive and compassionate frontend web platform focusing on pregnancy tracking, motherhood guidelines, and essential baby care resources.',
    image: 'https://i.ibb.co.com/Jj8QT9Yk/screencapture-inspiring-stardust-92eed6-netlify-app-2026-02-26-16-13-52.png', // আপনার ওয়েবসাইটের স্ক্রিনশট লিংকটি এখানে বসিয়ে দিন
    tags: ['React', 'TailwindCSS', 'UI/UX Design', 'Frontend'],
    category: 'React',
    live: 'https://inspiring-stardust-92eed6.netlify.app/', // আপনার লাইভ ডেমো লিংকটি এখানে দিন
    github: 'https://github.com/ummaysahara/baby-care.git', // আপনার গিটহাব রিপোজিটরি লিংকটি এখানে দিন
    featured: true,
  },
  {
    title: 'BongoShop E-Commerce',
    description:
      'Premium WooCommerce platform integrated with Bangladeshi payment gateways, automated invoice systems, and custom checkouts.',
    image:
      'https://i.ibb.co.com/9kXb1dKQ/screencapture-localhost-10010-2026-01-23-10-31-17.png',
    tags: ['WordPress', 'WooCommerce', 'Gateway'],
    category: 'WordPress',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Developer Portfolio',
    description:
      'A highly animated and premium personal portfolio website crafted using Next.js, Framer Motion, and custom styling.',
    image:
      'https://i.ibb.co.com/xKVK0kpb/screencapture-magenta-torte-c7d44f-netlify-app-2026-05-17-20-30-35.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'Next.js',
    live: 'https://magenta-torte-c7d44f.netlify.app/',
    github: 'https://github.com/ummeshahara1245/portfolio-master.git',
    featured: false,
  },
  {
    title: 'Travel Agency Platform',
    description:
      'Modern tourism & visa consultancy platform featuring smooth dashboard statistics, automated booking, and responsive layouts.',
    image:
      'https://i.ibb.co.com/RpnnpxPs/screencapture-localhost-3000-2026-05-11-15-55-47.png',
    tags: ['Next.js', 'Responsive', 'TailwindCSS'],
    category: 'Next.js',
    live: 'https://bespoke-cendol-d484af.netlify.app/',
    github: 'https://github.com/ummeshahara1245/visit-nature-client.git',
    featured: false,
  },
  {
    title: 'CareZone Hospital Management',
    description:
      'A comprehensive healthcare & appointment booking platform featuring PostgreSQL database integration, real-time automated Nodemailer notifications, and a responsive frontend layout.',
    image:
      'https://i.ibb.co.com/Q3wjnhLd/screencapture-localhost-3000-2026-05-20-16-34-52.png', // তোমার কেয়ারজোনের স্ক্রিনশট লিংকটি এখানে বসিয়ে নিও
    tags: ['React', 'Express', 'PostgreSQL', 'TailwindCSS', 'Nodemailer'],
    category: 'React',
    live: 'https://carezone-hospital.vercel.app/',
    github: 'https://github.com/ummeshahara1245/carezoneHospital.git',
    featured: true, // এটিকে ফ্রন্টপেজে হাইলাইট করতে চাইলে true রাখতে পারো
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.05 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#030712] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-xl">
            <Sparkles size={12} />
            My Masterpieces
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            A curated showcase of premium web experiences engineered with pixel-perfect design and high-performance code.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 hover:scale-105 ${active === cat
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black shadow-[0_8px_20px_rgba(34,211,238,0.2)]'
                : 'bg-white/[0.03] border border-white/10 text-gray-400 hover:border-cyan-400/40 hover:text-white backdrop-blur-md'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (3 columns on Desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onClick={() => project.live !== '#' && window.open(project.live, '_blank')}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(34,211,238,0.05)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-[200px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent" />

                {/* Floating Buttons */}
                <div className="absolute inset-0 bg-[#030712]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs flex items-center justify-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-md hover:scale-110 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-[#030712]/80 border border-white/20 text-white flex items-center justify-center shadow-md hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all"
                    title="Source Code"
                  >
                    <Github size={15} />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute left-4 top-4">
                    <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[9px] font-extrabold uppercase tracking-wider shadow-md">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 truncate">
                    {project.title}
                  </h3>
                  <div className="w-6 h-6 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-300">
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-400/5 border border-cyan-400/10 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/10 rounded-2xl pointer-events-none transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-xs tracking-wider uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
          >
            <Github size={16} />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}