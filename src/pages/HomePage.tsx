import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowUpRight, UtensilsCrossed, Sprout, GraduationCap, Camera, Dumbbell, CalendarHeart, Store, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { FaHome, FaUser, FaSlidersH, FaCommentAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { SiReact, SiTailwindcss, SiVite, SiNodedotjs, SiMongodb } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { Dock, type DockItem } from '../components/Dock'
import MagicBento from '../components/MagicBento'
import Carousel, { type CarouselItem } from '../components/Carousel/Carousel'
import { services } from '../data/services'
import LogoLoop from '../components/LogoLoop/LogoLoop'

const testimonialItems: CarouselItem[] = [
  {
    id: 1,
    title: 'U-ME Couple Cafe',
    description: 'Vexorix built our website from scratch — fast, beautiful, and customers love it.',
    icon: <UtensilsCrossed className="carousel-icon" />,
  },
  {
    id: 2,
    title: 'Nithish Makeover Artistry',
    description: 'The portfolio site looks premium and loads super fast. Bookings have noticeably increased.',
    icon: <Sparkles className="carousel-icon" />,
  },
  {
    id: 3,
    title: 'Vikram Gym',
    description: 'Professional and genuinely skilled. The gym site brings membership enquiries almost every week.',
    icon: <Dumbbell className="carousel-icon" />,
  },
  {
    id: 4,
    title: 'School Management Software',
    description: 'They handled everything from design to deployment — the dashboard runs our whole operation.',
    icon: <GraduationCap className="carousel-icon" />,
  },
]

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Years of Experience', value: 1, suffix: '+' },
  { label: 'Clients Served', value: 8, suffix: '+' },
]

const dockItems: DockItem[] = [
  { id: 'home', label: 'Home', icon: <FaHome size={20} /> },
  { id: 'bento', label: 'About', icon: <FaUser size={20} /> },
  { id: 'projects', label: 'Projects', icon: <FaSlidersH size={20} /> },
  { id: 'testimonials', label: 'Testimonials', icon: <FaCommentAlt size={20} /> },
  { href: 'tel:+919655058949', label: 'Call', icon: <FaPhoneAlt size={20} /> },
  { href: 'https://wa.me/919655058949', label: 'WhatsApp', icon: <FaWhatsapp size={20} /> },
  { href: 'mailto:vexorixtechnologies@gmail.com', label: 'Mail', icon: <FaEnvelope size={20} /> },
  { id: 'contact', label: 'Get in touch', icon: <FaPaperPlane size={20} /> },
]

const recentProjects = [
  { name: 'U-ME Couple Cafe', category: 'Café · Food & Beverage', initial: 'UC', image: '/uandme.jpeg', preview: 'bg-gradient-to-br from-[#1f2937] to-[#111827]', desc: 'A warm, cozy online presence for a couple-themed café.', stack: ['React', 'Tailwind CSS', 'Vite'], url: 'https://u-me-couple-cafe.vercel.app/', icon: <UtensilsCrossed size={20} /> },
  { name: 'Pannai 2 Pattanam', category: 'Food & Agriculture', initial: 'P2', image: '/p2p.jpeg', preview: 'bg-gradient-to-br from-[#14532d] to-[#052e16]', desc: 'A tasteful website showcasing local food & hospitality.', stack: ['React', 'Tailwind CSS', 'Vite'], url: 'https://pannai2-pattanam.vercel.app/', icon: <Sprout size={20} /> },
  { name: 'Nithish Makeup Artist', category: 'Makeup Artist', initial: 'NM', image: '/nithishemakeup.png', preview: 'bg-gradient-to-br from-[#1c1917] to-[#292524]', desc: 'An elegant portfolio for bridal & professional makeup artistry.', stack: ['React', 'Tailwind CSS', 'Vite'], url: 'https://nithish-makeover-artistry.vercel.app/', icon: <Sparkles size={20} /> },
  { name: 'School Management Software', category: 'Software · Education', initial: 'SM', image: '/school.png', preview: 'bg-gradient-to-br from-[#1e3a8a] to-[#172554]', desc: 'A dashboard for managing students, staff, and school operations.', stack: ['React', 'Node.js', 'MongoDB'], url: 'https://frontend-xi-tawny-85.vercel.app/', icon: <GraduationCap size={20} /> },
  { name: 'i5_Photography', category: 'Photography', initial: 'i5', image: '/phot.png', preview: 'bg-gradient-to-br from-[#111827] to-[#030712]', desc: 'A stunning gallery-driven site for a professional photographer.', stack: ['React', 'Tailwind CSS', 'Vite'], url: 'https://vicky-photography.vercel.app/', icon: <Camera size={20} /> },
  { name: 'Vikram Gym', category: 'Gym & Fitness', initial: 'VG', image: '/gym.png', preview: 'bg-gradient-to-br from-[#7c2d12] to-[#431407]', desc: 'A high-energy site for memberships, training, and fitness.', stack: ['React', 'Tailwind CSS', 'Vite'], url: 'https://vikramgym.vercel.app/', icon: <Dumbbell size={20} /> },
  { name: 'NK Events', category: 'Events', initial: 'NK', image: '/nk.png', preview: 'bg-gradient-to-br from-[#3b0764] to-[#1e1b4b]', desc: 'An event planning & booking presence coming soon.', stack: ['React', 'Tailwind CSS'], url: '', icon: <CalendarHeart size={20} /> },
  { name: 'Jayam Super Market', category: 'Super Market', initial: 'JS', image: '/jayam.png', preview: 'bg-gradient-to-br from-[#134e4a] to-[#042f2e]', desc: 'A modern storefront for a local supermarket, coming soon.', stack: ['React', 'Tailwind CSS'], url: '', icon: <Store size={20} /> },
]

const clientLogos = [
  { src: '/uandme.jpeg', alt: 'U-ME Couple Cafe' },
  { src: '/nithishemakeup.png', alt: 'Nithish Makeover Artistry' },
  { src: '/gym.png', alt: 'Vikram Gym' },
  { src: '/phot.png', alt: 'i5 Photography' },
  { src: '/nk.png', alt: 'NK Events' },
  { src: '/p2p.jpeg', alt: 'Pannai 2 Pattanam' },
]

const stackIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: '#61DAFB' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  Vite: { icon: SiVite, color: '#646CFF' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
}

function HomePage() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activePhases, setActivePhases] = useState<number[]>([])
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const targets = stats.map(s => s.value)
        const interval = setInterval(() => {
          setCounts(prev => {
            const next = prev.map((c, i) => Math.min(c + 1, targets[i]))
            if (next.every((c, i) => c === targets[i])) {
              clearInterval(interval)
            }
            return next
          })
        }, 120)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [showAllProjects])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-28 sm:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-[#FFE44D]/5 to-[#FFE44D]/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-[#FFE44D]/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" aria-hidden="true" style={{ animationDelay: '1.5s' }}></div>
      <Helmet>
        <title>Vexorix Technologies</title>
        <meta name="description" content="Vexorix — Professional Web Development, Full Stack application, App Developnment ,Digital Marketing, UI & UX Design in Dharmapuri , India." />
        <meta name="keywords" content="web developer Chennai, digital marketing Chennai, graphic design Chennai, freelance web developer Chennai" />
        <link rel="canonical" href="https://vexorixtechnologies.in/" />
        <meta property="og:title" content="Vexorix Technologies" />
        <meta property="og:description" content="Vexorix — Professional Web Development, Full Stack application, App Developnment ,Digital Marketing, UI & UX Design in Dharmapuri , India." />
        <meta property="og:image" content="https://vexorixtechnologies.in/vexorix.tech.png" />
        <meta property="og:url" content="https://vexorixtechnologies.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vexorix Technologies" />
        <meta name="twitter:description" content="Vexorix — Professional Web Development, Full Stack application, App Developnment ,Digital Marketing, UI & UX Design in Dharmapuri , India." />
        <meta name="twitter:image" content="https://vexorixtechnologies.in/vexorix.tech.png" />
      </Helmet>

      <section id="home" className="min-h-[50vh] flex flex-col items-center relative pt-0 sm:pt-0 pb-10 sm:pb-14 fade-in">

        <div className="relative z-10 text-center px-6 animate-slide-up">
<div className="-mb-1 inline-block">
            <img src="/vexorix.tech.png" alt="Vexorix Logo" className="w-52 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.5)] sm:animate-float" style={{backgroundColor: 'transparent'}} />
          </div>
          <p className="flex w-fit mx-auto items-center gap-1.5 text-xs sm:text-sm font-sans tracking-[0.15em] text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/25 rounded-full px-5 py-1.5 mb-3">
            <Sparkles size={13} className="text-[#FFD700] shrink-0" />
            Building the future, one product at a time
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5 max-w-4xl mx-auto">
            Crafting Tomorrow's <span className="gradient-text whitespace-nowrap">Digital Solutions</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 max-w-3xl mx-auto text-center">
            We design and build scalable web applications, cloud infrastructure, and<br />
            digital products that help businesses grow and innovate with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-7">
            {['End-to-End Development', 'Cloud-Native Architecture', 'Scalable & Secure'].map(feature => (
              <span key={feature} title={feature} className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFE44D] flex items-center justify-center shrink-0">
                  <Check size={10} strokeWidth={3} className="text-black" />
                </span>
                {feature}
              </span>
            ))}
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('contact')} className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base text-black">
              Start a Project ➜
            </button>
            <button onClick={() => scrollToSection('projects')} className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold hover:scale-105 transition-transform hover:bg-white/10 text-sm sm:text-base">
              View Our Work
            </button>
          </div>
        </div>

        <div ref={statsRef} className="relative z-10 w-full max-w-2xl mx-auto px-6 mt-20 sm:mt-28">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className={`glass rounded-2xl p-3 sm:p-5 reveal delay-${idx + 1}`}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1">{counts[idx]}{stat.suffix}</div>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-22 sm:mt-30 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">
            Proud to Work with <span className="gradient-text">Growing Businesses</span>
          </h2>
          <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
            <LogoLoop
              logos={clientLogos}
              speed={45}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              ariaLabel="Businesses we work with"
            />
          </div>
        </div>
      </section>

      <MagicBento />

      <section id="services" className="pt-16 sm:pt-35 pb-6 sm:pb-10 px-4 sm:px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link
                key={service.num}
                to={service.path}
                aria-label={service.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 reveal delay-${idx + 1} transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FFD700]/40 hover:shadow-[0_20px_50px_-15px_rgba(255,215,0,0.25)]`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 -right-1 text-[6rem] sm:text-[6.5rem] leading-none font-bold text-white/[0.05] transition-colors duration-300 select-none group-hover:text-[#FFD700]/10"
                >
                  {service.num}
                </span>

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                    <Icon size={22} />
                  </div>
                  <span className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-300 transition-all duration-300 group-hover:border-[#FFD700]/40 group-hover:text-[#FFD700] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h3 className="relative z-10 text-lg sm:text-xl font-bold mt-4">{service.title}</h3>
                <p className="relative z-10 text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 mb-5">
                  {service.desc}
                </p>

                <div className="relative z-10 mt-auto border-t border-white/10 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.badges.map(badge => (
                      <span
                        key={badge}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-gray-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 glass rounded-2xl p-6 sm:p-8 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Have a project in mind?</h3>
              <p className="text-gray-400 text-sm sm:text-base mt-2">Let's build something amazing together.</p>
            </div>
            <button type="button" onClick={() => scrollToSection('contact')} className="inline-block px-8 sm:px-10 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base text-black shrink-0">
              Start a Project <span className="font-bold">→</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-16 sm:pt-35">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Development Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20">
            {[
              {
                num: '01',
                title: 'Requirements Analysis & Architecture Design',
                desc: "I start by analyzing business goals, user needs, and technical requirements to build a strong foundation. This phase involves defining the system architecture, tech stack, and data flow while ensuring scalability and security. Using tools like React, Node.js, MongoDB, and AWS S3, I design a solution tailored to the project's objectives with clear documentation and a roadmap for development.",
              },
              {
                num: '02',
                title: 'Iterative Development & CI/CD',
                desc: "Development follows an agile, sprint-based model focused on incremental delivery and transparency. Each sprint includes coding, testing, and integration, supported by automated CI/CD pipelines for continuous builds and deployments. Regular demos and reviews ensure alignment with project goals, maintain code quality, and enable quick adjustments based on feedback.",
              },
              {
                num: '03',
                title: 'Security Hardening & Deployment',
                desc: "Before launch, I conduct security checks, performance tuning, and final testing to ensure reliability. The application is containerized using Docker and deployed to a secure production environment, with monitoring and logging set up for stability. Post-deployment, I provide maintenance, updates, and optimization to ensure smooth and secure operation.",
              },
            ].map((phase, idx) => (
              <div
                key={phase.num}
                onClick={() => setActivePhases((prev) => prev.includes(idx) ? prev : [...prev, idx])}
                className={`group/card relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 min-h-[25rem] sm:min-h-[30rem] transition-all duration-300 hover:border-[#FFD700]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-15px_rgba(255,215,0,0.25)] reveal delay-${idx + 1} ${activePhases.includes(idx) ? 'md:hover:border-[#FFD700]/40' : ''}`}
              >
                <div className="relative flex-1 overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#FFD700]/70">Phase</span>
                    <div className={`text-7xl sm:text-8xl font-bold leading-none text-white/60 mt-1 mb-6 transition-colors duration-300 md:group-hover/card:text-[#FFD700]/25`}>
                      {phase.num}
                    </div>
                    <div className={`flex flex-col items-center justify-center min-h-full py-2 text-center transition-opacity duration-300 md:group-hover/card:opacity-100 ${activePhases.includes(idx) ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                      <h3 className="font-bold text-xl sm:text-2xl mb-3">{phase.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 sm:px-6 pt-16 sm:pt-35 pb-6 sm:pb-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Recent Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20">
            {(showAllProjects ? recentProjects : recentProjects.slice(0, 6)).map(project => {
              const content = (
                <>
                  <div className={`relative h-36 sm:h-40 overflow-hidden ${project.image ? '' : project.preview}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.5) 1px, transparent 0)',
                            backgroundSize: '22px 22px',
                          }}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.15),transparent_60%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl sm:text-2xl font-bold transition-transform duration-300 group-hover:scale-110">
                            {project.initial}
                          </div>
                        </div>
                        <span className="absolute bottom-2.5 right-3 text-[9px] uppercase tracking-widest text-white/60">
                          Sample UI
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFD700]/60">{project.category}</p>
                      <ArrowUpRight size={16} className="text-white/20 transition-all duration-300 group-hover:text-[#FFD700] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mt-1.5">{project.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">{project.desc}</p>
                    <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                      {project.stack.map(tech => {
                        const StackIcon = stackIcons[tech]
                        return StackIcon ? (
                          <span
                            key={tech}
                            className="w-7 h-7 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center transition-transform group-hover:scale-110"
                            title={tech}
                          >
                            <StackIcon.icon size={15} color={StackIcon.color} />
                          </span>
                        ) : (
                          <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-gray-300">
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                    {project.url ? (
                      <span className="mt-auto pt-3 text-xs font-semibold text-[#FFD700]/70 group-hover:text-[#FFD700] inline-flex items-center gap-1 transition-colors">
                        View
                        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    ) : (
                      <span className="mt-auto pt-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Coming Soon</span>
                    )}
                  </div>
                </>
              )
              const cardClass = `group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col transition-all duration-300 hover:border-[#FFD700]/40 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,215,0,0.25)]`
              return project.url ? (
                <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {content}
                </a>
              ) : (
                <div key={project.name} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>

          {recentProjects.length > 6 && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAllProjects(v => !v)}
                className="rounded-full px-8 py-3 sm:py-3.5 font-semibold inline-flex items-center gap-2 cursor-pointer bg-gradient-to-r from-[#FFD700] to-[#FFE44D] text-black border border-[#FFD700] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(255,215,0,0.5)]"
              >
                {showAllProjects ? (
                  <>Show Less <ChevronUp size={17} /></>
                ) : (
                  <>View More Projects <ChevronDown size={17} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="testimonials" className="px-4 sm:px-6 pt-16 sm:pt-35 pb-6 sm:pb-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              What our <span className="gradient-text">clients say about us</span>
            </h2>
          </div>

          <div className="flex justify-center mt-16 sm:mt-20 reveal">
            <div style={{ height: '440px' }} className="relative w-full max-w-[340px] sm:max-w-none sm:w-auto">
              <Carousel
                items={testimonialItems}
                baseWidth={320}
                autoplay
                autoplayDelay={4000}
                pauseOnHover
                loop
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 sm:py-14 px-4 sm:px-6 pt-6 sm:pt-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Ready to take <span className="gradient-text">your</span> digital<br className="hidden sm:block" /> presence to the next level?
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-4 sm:mt-5">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
          <a
            href="https://wa.me/919655058949?text=Hello%20Vexorix%20%F0%9F%91%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 sm:mt-10 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] text-black rounded-full font-semibold hover:scale-105 transition-transform text-lg sm:text-xl"
          >
            Let's get in touch <FaPaperPlane size={20} className="inline-block" />
          </a>
        </div>
      </section>

      <footer id="footer" className="pt-8 sm:pt-10 pb-0 sm:pb-1 px-4 sm:px-6 scroll-mt-24 reveal">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold gradient-text">Vexorix Technologies</h2>
            <p className="text-gray-500 text-sm mt-1">Copyright © 2026 All rights reserved</p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="https://www.instagram.com/vexorix.tech?stkn=aHV4cWsxemdwNHMx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/vexorix-technologies-0a746a417" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors text-lg" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      <Dock items={dockItems} onNavigate={scrollToSection} />
    </div>
  )
}

export default HomePage