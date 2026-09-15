import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AnimatePresence, animate, motion, useInView } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Smartphone,
  Gauge,
  Search,
  Layers,
  Accessibility,
  DownloadCloud,
  PanelTop,
  Server,
  Database,
  Waypoints,
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Check,
} from 'lucide-react'

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function StatCounter({
  prefix,
  value,
  suffix,
  label,
  decimals = 0,
}: {
  prefix?: string
  value: number
  suffix: string
  label: string
  decimals?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: v => setDisplay(decimals ? v.toFixed(decimals) : String(Math.round(v))),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return (
    <div ref={ref} className="glass rounded-2xl p-4 sm:p-5">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
}) {
  return (
    <Reveal className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      {eyebrow && (
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]/80 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm sm:text-base mt-4">{subtitle}</p>}
    </Reveal>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-[#FFD700]/12 blur-3xl" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-white/10 bg-[#0d0d12]/90 overflow-hidden shadow-[0_30px_80px_-20px_rgba(255,215,0,0.15)]"
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[10px] text-gray-400">
            app.vexorixtechnologies.in
          </span>
        </div>
        <div className="p-4 sm:p-5 space-y-3">
          <div className="h-4 w-1/2 rounded-md bg-gradient-to-r from-[#FFD700]/80 to-[#FFE44D]/60" />
          <div className="h-2.5 w-3/4 rounded-md bg-white/10" />
          <div className="h-2.5 w-2/3 rounded-md bg-white/10" />
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="h-14 rounded-lg bg-white/[0.06] border border-white/10" />
            <div className="h-14 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20" />
            <div className="h-14 rounded-lg bg-white/[0.06] border border-white/10" />
          </div>
          <div className="flex items-end gap-1.5 pt-2">
            {[35, 55, 40, 70, 50, 85, 60, 95].map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.4 + idx * 0.06, duration: 0.5 }}
                className="w-full rounded-sm bg-gradient-to-t from-[#FFD700]/30 to-[#FFE44D]/70"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-8 -left-4 sm:-left-8 w-52 sm:w-64 rounded-xl border border-white/10 bg-[#0d0d12]/95 p-3 shadow-2xl"
      >
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-green-400/80" />
          <span className="ml-1 text-[9px] text-gray-500">solution.tsx</span>
        </div>
        <div className="space-y-1.5 font-mono text-[9px] sm:text-[10px] leading-relaxed">
          <p className="text-gray-500">
            <span className="text-gray-600 select-none mr-2">1</span>
            <span className="text-sky-300">export</span> <span className="text-gray-200">function</span>{' '}
            <span className="text-[#FFD700]">Build()</span>
          </p>
          <p className="text-gray-500">
            <span className="text-gray-600 select-none mr-2">2</span>
            <span className="text-gray-200">{'  return <Great />;'}</span>
          </p>
          <p className="text-gray-500">
            <span className="text-gray-600 select-none mr-2">3</span>
            <span className="text-gray-200">{'}'}</span>
          </p>
        </div>
      </motion.div>

      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 right-4 rounded-lg border border-[#FFD700]/30 bg-black/80 px-2.5 py-1.5 text-[11px] font-semibold text-[#FFD700]"
      >
        React
      </motion.span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 -right-3 rounded-lg border border-white/10 bg-black/80 px-2.5 py-1.5 text-[11px] font-semibold text-white"
      >
        Next.js
      </motion.span>
    </div>
  )
}

const features = [
  {
    icon: <Smartphone size={22} />,
    num: '01',
    title: 'Responsive & Adaptive Design',
    desc: 'Pixel-perfect implementations that adapt intelligently across every device, breakpoint, and orientation — from mobile devices to large 4K displays.',
  },
  {
    icon: <Gauge size={22} />,
    num: '02',
    title: 'Performance Engineering',
    desc: 'Sub-second load times through code splitting, lazy loading, caching, and image optimization pipelines designed for excellent Lighthouse performance.',
  },
  {
    icon: <Search size={22} />,
    num: '03',
    title: 'SEO Architecture',
    desc: 'Technical SEO built into the foundation — structured data, canonical URLs, dynamic sitemaps, optimized metadata, and search-friendly architecture.',
  },
  {
    icon: <Layers size={22} />,
    num: '04',
    title: 'Scalable System Design',
    desc: 'Future-proof architectures designed for horizontal scaling, allowing applications to grow with increasing users and business requirements.',
  },
  {
    icon: <Accessibility size={22} />,
    num: '05',
    title: 'Accessibility First',
    desc: 'Accessible implementations with keyboard navigation, screen-reader support, semantic HTML, and strong color contrast standards.',
  },
  {
    icon: <DownloadCloud size={22} />,
    num: '06',
    title: 'Progressive Web Apps',
    desc: 'Offline-capable, installable PWAs that deliver fast, app-like experiences directly through the web.',
  },
]

const techGroups = [
  { name: 'Frontend', icon: <PanelTop size={18} />, items: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router DOM'] },
  { name: 'Backend', icon: <Server size={18} />, items: ['Node.js', 'Express.js'] },
  { name: 'Database', icon: <Database size={18} />, items: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { name: 'State & API', icon: <Waypoints size={18} />, items: ['Axios', 'Redux Toolkit', 'React Redux'] },
  { name: 'Deployment', icon: <Rocket size={18} />, items: ['Vercel'] },
  { name: 'UI & Animation', icon: <Sparkles size={18} />, items: ['Framer Motion', 'React Icons'] },
]

const processSteps = [
  { title: 'Discovery & Scope Definition', desc: 'Understand business goals, target users, requirements and technical constraints.' },
  { title: 'Technical Architecture Planning', desc: 'Define the application architecture, technology stack, database structure and APIs.' },
  { title: 'UI/UX Design & Prototyping', desc: 'Create intuitive interfaces, wireframes and interactive prototypes.' },
  { title: 'Agile Frontend Development', desc: 'Build responsive, accessible and high-performance interfaces.' },
  { title: 'Backend & API Integration', desc: 'Develop APIs, database systems, authentication and business logic.' },
  { title: 'QA, Testing & Accessibility Audit', desc: 'Test functionality, responsiveness, performance, security and accessibility.' },
  { title: 'CI/CD Setup & Deployment', desc: 'Configure production deployment, environments and continuous delivery.' },
  { title: 'Post-Launch Monitoring & Support', desc: 'Monitor application health, resolve issues and continuously optimize the product.' },
]

const lifecycleSteps = [
  { num: '01', title: 'Discovery', desc: 'Define goals, users, and technical constraints.' },
  { num: '02', title: 'Design', desc: 'Wireframes, visual design, and interactive prototypes.' },
  { num: '03', title: 'Frontend', desc: 'Build responsive, accessible user interfaces.' },
  { num: '04', title: 'Backend', desc: 'APIs, database, authentication, and business logic.' },
  { num: '05', title: 'Integration', desc: 'Connect third-party services and external systems.' },
  { num: '06', title: 'QA & Audit', desc: 'Performance, security, accessibility, and functionality testing.' },
  { num: '07', title: 'Launch', desc: 'Staged rollout to production with monitoring.' },
  { num: '08', title: 'Sustain', desc: 'Ongoing updates, optimizations, and technical support.' },
]

const faqs = [
  {
    q: 'How long does a typical web application project take?',
    a: 'Timelines depend on project complexity, the number of pages, third-party integrations and custom functionality. A focused marketing site can take 2–4 weeks, while a full custom web application typically spans 6–12 weeks. We provide a clear roadmap and milestone schedule before development begins.',
  },
  {
    q: 'What makes your approach different from a typical agency?',
    a: "Vexorix is a development-focused studio. We obsess over performance, scalable architecture and modern technologies, and every engineering decision is tied to your business goals — faster load times, better conversion, lower maintenance, and room to grow.",
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. After launch we can provide ongoing maintenance, monitoring, security updates and continuous optimization — including bug fixes, dependency upgrades, and performance tuning to keep your application healthy around the clock.',
  },
  {
    q: 'Can you migrate or rebuild our existing website?',
    a: 'Absolutely. Existing websites can be redesigned, rebuilt or migrated to modern technologies. We assess your current stack, preserve what works, and move your content, SEO equity and functionality into a faster, more maintainable foundation.',
  },
  {
    q: 'Do you work with design teams or handle design in-house?',
    a: 'Both. We work comfortably alongside your existing design team, or we can handle UI/UX implementation end-to-end as part of the project — from wireframes and prototypes to polished, production-ready interfaces.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-[#FFD700]/25"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
      >
        <span className="text-sm sm:text-base font-semibold text-white">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 w-7 h-7 rounded-full border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
          <Plus size={15} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-5 sm:px-6 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-[#FFE44D]/5 to-[#FFE44D]/10" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD700]/15 rounded-full blur-3xl animate-pulse-glow" aria-hidden="true" />
      <Helmet>
        <title>Web Development Services | Vexorix Technologies</title>
        <meta name="description" content="Vexorix builds modern, scalable web applications — React, Next.js, Node.js, PostgreSQL, MongoDB. Performance, SEO and accessibility engineered from day one." />
        <link rel="canonical" href="https://vexorixtechnologies.in/services/web-development" />
      </Helmet>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0f]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/vexorix.tech.png" alt="Vexorix Logo" className="h-9 w-9 object-contain" />
            <span className="text-base sm:text-lg font-bold gradient-text">Vexorix</span>
          </Link>
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-[#FFD700] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <section className="relative pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-2 mb-5"
              >
                <span className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFE44D] px-3 py-1 text-[10px] sm:text-[11px] font-bold text-black">
                  Most Popular
                </span>
                {['React', 'Next.js', 'Node.js', 'TypeScript'].map(tech => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] sm:text-[11px] text-gray-300">
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                Web <span className="gradient-text">Development</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl"
              >
                We engineer modern, scalable web applications that accelerate business growth. Our full-stack expertise
                spans cutting-edge frontend frameworks, robust backend systems, and cloud-ready architectures —
                delivering solutions users love and search engines reward.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl"
              >
                <StatCounter prefix="<" value={1.2} suffix="s" label="Avg. Load Time" decimals={1} />
                <StatCounter value={98} suffix="+" label="Lighthouse Score" />
                <StatCounter value={60} suffix="+" label="Projects Delivered" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </section>

        <section id="overview" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="Overview" title={<>Engineering beyond the <span className="gradient-text">website</span></>} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="lg:col-span-2 space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              {[
                "In today's digital economy, your web presence is your most powerful sales asset. We go beyond building websites — we architect digital experiences that are fast, accessible, and built to scale.",
                'Every project starts with a deep discovery phase where we align technical execution with your business objectives and user needs. Our engineering approach leverages React and Next.js at its core, unlocking server-side rendering, static generation, and edge delivery for exceptional performance.',
                'We obsess over Core Web Vitals, accessibility (WCAG 2.1 AA), and SEO architecture from day one — not as an afterthought.',
                'Security is woven into the development lifecycle. We implement secure coding practices, dependency audits, CSP headers, and authentication best practices.',
                'Post-launch, we provide proactive monitoring, automated alerting, and rapid incident response so your application stays healthy around the clock.',
              ].map((paragraph, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15} className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-lg">At a Glance</h3>
                {[
                  { icon: <Zap size={17} />, label: 'Core Web Vitals focused' },
                  { icon: <Accessibility size={17} />, label: 'WCAG 2.1 AA accessible' },
                  { icon: <Search size={17} />, label: 'SEO-first architecture' },
                  { icon: <Shield size={17} />, label: 'Security built-in' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="Capabilities" title={<>Key <span className="gradient-text">Features</span></>} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <Reveal key={feature.num} delay={(idx % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#FFD700]/30 hover:bg-white/[0.05] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]"
                    >
                      {feature.icon}
                    </motion.div>
                    <span className="text-xs font-bold text-white/20 tracking-widest">{feature.num}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-base sm:text-lg">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="technologies" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="Stack" title={<>Techno<span className="gradient-text">logies</span></>} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techGroups.map((group, idx) => (
              <Reveal key={group.name} delay={(idx % 3) * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-9 h-9 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                      {group.icon}
                    </span>
                    <h3 className="font-bold">{group.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:border-[#FFD700]/40 hover:text-[#FFD700] cursor-default"
                      >
                        <Check size={12} className="text-[#FFD700]/70" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="How We Work" title={<>Our <span className="gradient-text">Process</span></>} />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#FFD700]/50 via-white/10 to-transparent" aria-hidden="true" />
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <Reveal key={step.title} delay={idx * 0.03}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="relative pl-12 sm:pl-16 group"
                  >
                    <span className="absolute left-3 sm:left-4 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#FFD700]/60 bg-[#0a0a0f] group-hover:bg-[#FFD700] transition-colors" aria-hidden="true"
                      style={{ boxShadow: '0 0 12px rgba(255,215,0,0.35)' }}
                    />
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors group-hover:border-[#FFD700]/25">
                      <span className="text-[10px] font-bold text-[#FFD700]/70 tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                      <h3 className="font-bold mt-1">{step.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="lifecycle" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="End to End" title={<>Web Development <span className="gradient-text">Lifecycle</span></>} />

          <Reveal>
            <div className="glass rounded-2xl p-5 sm:p-8">
              <div className="hidden lg:flex items-center justify-between mb-8 px-2" aria-hidden="true">
                {lifecycleSteps.map(step => (
                  <div key={step.num} className="relative flex-1 flex flex-col items-center">
                    <span className="w-9 h-9 rounded-full border border-[#FFD700]/40 bg-[#0a0a0f] flex items-center justify-center text-[11px] font-bold text-[#FFD700]">
                      {step.num}
                    </span>
                    {step.num !== '08' && <span className="absolute top-[18px] left-[58%] w-full h-px bg-gradient-to-r from-[#FFD700]/50 to-white/10" />}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {lifecycleSteps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: idx * 0.04, duration: 0.4 }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#FFD700]/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#FFD700]/80">{step.num}</span>
                      <ArrowRight size={13} className="text-white/20" />
                    </div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-xs mt-1.5 leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="faq" className="pb-16 sm:pb-24 pt-4">
          <SectionHeading eyebrow="Support" title={<>Frequently Asked <span className="gradient-text">Questions</span></>} />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        <section id="cta" className="pb-16 sm:pb-24 pt-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#FFD700]/20 bg-gradient-to-br from-[#FFD700]/10 via-white/[0.03] to-[#FFE44D]/5 px-6 py-14 sm:py-20 text-center">
              <div className="absolute -top-24 right-10 w-72 h-72 bg-[#FFD700]/15 rounded-full blur-3xl" aria-hidden="true" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Ready to <span className="gradient-text">get started?</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
                Let's discuss how web development can transform your business.
              </p>
              <Link
                to="/#footer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold text-black hover:scale-105 transition-transform"
              >
                Get in Touch
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="pb-16 sm:pb-20 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link
              to="/services/full-stack-application"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all hover:border-[#FFD700]/30"
            >
              <span className="inline-flex items-center gap-2 text-xs text-gray-400 group-hover:text-[#FFD700] transition-colors">
                <ArrowLeft size={15} />
                Previous Service
              </span>
              <h3 className="font-bold text-lg mt-2">Full Stack Application</h3>
            </Link>
            <Link
              to="/services/mobile-app-development"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 text-right transition-all hover:border-[#FFD700]/30"
            >
              <span className="inline-flex items-center gap-2 text-xs text-gray-400 group-hover:text-[#FFD700] transition-colors ml-auto">
                Next Service
                <ArrowRight size={15} />
              </span>
              <h3 className="font-bold text-lg mt-2">Mobile App Development</h3>
            </Link>
          </div>
        </section>
      </div>

      <footer className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold gradient-text">Vexorix Technologies</h2>
            <p className="text-gray-500 text-sm mt-1">© 2026 Vexorix. All rights reserved.</p>
          </div>
          <Link to="/" className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}