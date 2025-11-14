import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Mail, Phone, Github } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">M. Ridwan</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-lg sm:text-2xl text-white/85 max-w-2xl"
        >
          Full Stack Developer crafting clean, performant web experiences from Jakarta.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#about" className="rounded-full bg-white/10 backdrop-blur px-6 py-3 text-sm sm:text-base hover:bg-white/20 transition">About Me</a>
          <a href="#projects" className="rounded-full bg-indigo-500 px-6 py-3 text-sm sm:text-base hover:bg-indigo-600 transition">View Work</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeader({ overline, title, subtitle }) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12">
      {overline && <div className="text-xs uppercase tracking-widest text-indigo-500 mb-3">{overline}</div>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function About() {
  const blocks = [
    "I'm a full stack developer focused on building delightful user experiences backed by robust, scalable services.",
    "I enjoy translating ideas into clean interfaces and maintainable code — balancing aesthetics, performance, and business goals.",
    "Beyond code, I care about collaboration, documentation, and shipping thoughtful products that users love.",
  ]

  return (
    <section id="about" className="relative py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader overline="About" title="A story about craft and curiosity" />
        <div className="space-y-8">
          {blocks.map((t, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              {t}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-gray-600"
        >
          <div className="rounded-xl bg-gray-50 p-4">Location: Jakarta</div>
          <a href="mailto:mridwan07072002@gmail.com" className="rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition">Email: mridwan07072002@gmail.com</a>
          <a href="tel:089503412994" className="rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition">Phone: 089503412994</a>
          <a href="https://github.com/MuhRidwaan" target="_blank" rel="noreferrer" className="rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition">GitHub: github.com/MuhRidwaan</a>
        </motion.div>
      </div>
    </section>
  )
}

function Skills() {
  const skillMap = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Next.js'],
    Backend: ['Node.js', 'Laravel'],
    Databases: ['MySQL', 'PostgreSQL'],
    'DevOps / Tools': ['Git', 'Docker'],
    Others: ['WordPress'],
  }

  return (
    <section id="skills" className="relative py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader overline="Skills" title="A curated toolkit for modern web apps" subtitle="Fading, scaling entries as you scroll" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillMap).map(([group, items], idx) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-medium text-indigo-600">{group}</div>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {items.map((it, i) => (
                  <motion.li
                    key={it}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-800"
                  >
                    {it}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const entries = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Studio — Jakarta',
      period: '2023 — Present',
      summary: 'Building end‑to‑end features across frontend and backend with a focus on performance and DX.'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Labs',
      period: '2021 — 2023',
      summary: 'Implemented responsive UI, accessibility improvements, and component libraries.'
    },
  ]

  return (
    <section id="experience" className="relative py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader overline="Experience" title="Chapters of work and growth" />
        <div className="relative border-l border-gray-200 ml-3">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="pl-6 pb-10 relative"
            >
              <span className="w-3 h-3 rounded-full bg-indigo-500 absolute -left-1.5 top-2" />
              <div className="text-sm text-gray-500">{e.period}</div>
              <div className="mt-1 text-xl font-semibold text-gray-900">{e.title}</div>
              <div className="text-gray-700">{e.company}</div>
              <p className="mt-3 text-gray-600">{e.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl overflow-hidden bg-gray-100 aspect-[16/10]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h3 variants={fadeUp} className="text-2xl font-semibold text-gray-900">{project.title}</motion.h3>
        <motion.p variants={fadeUp} className="mt-3 text-gray-600">{project.description}</motion.p>
        <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs">{t}</span>
          ))}
        </motion.div>
        {project.link && (
          <motion.a
            variants={fadeUp}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-indigo-600 hover:text-indigo-700"
          >
            View project →
          </motion.a>
        )}
      </motion.div>
    </div>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Aurora Dashboard',
      description: 'A modern analytics suite with real‑time charts, role‑based access, and delightful micro‑interactions.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Nimbus Commerce',
      description: 'Headless e‑commerce storefront optimized for performance and SEO, featuring a modular design system.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
      stack: ['Next.js', 'MySQL', 'Stripe', 'Vercel'],
      link: '#',
    },
    {
      title: 'Quill CMS',
      description: 'Lightweight content platform with markdown editing, media library, and role permissions.',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
      stack: ['Vue', 'Laravel', 'Docker', 'PostgreSQL'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader overline="Projects" title="Selected work in a scrolling showcase" subtitle="Images reveal, text glides into view, tags highlight the stack" />
        <div className="space-y-20">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-sm uppercase tracking-widest text-indigo-400">Let’s build</div>
          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold">Have an idea? I’d love to help ship it.</h3>
          <p className="mt-4 text-white/80">I’m open to full‑time roles, freelance projects, and collaborations.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a href="mailto:mridwan07072002@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 hover:bg-white/20 transition">
            <Mail size={16} /> mridwan07072002@gmail.com
          </a>
          <a href="tel:089503412994" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 hover:bg-white/20 transition">
            <Phone size={16} /> 089503412994
          </a>
          <a href="https://github.com/MuhRidwaan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 hover:bg-white/20 transition">
            <Github size={16} /> github.com/MuhRidwaan
          </a>
        </motion.div>
        <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} M. Ridwan — Full Stack Developer</div>
      </div>
    </section>
  )
}

function ScrollProgress() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 z-50" />
  )
}

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
