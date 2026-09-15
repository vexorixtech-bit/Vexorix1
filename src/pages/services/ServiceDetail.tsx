import { useState, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import { nextServiceOf, prevServiceOf, type Service, type ServiceFaq } from '../../data/services'

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function FaqItem({ f, isOpen, onToggle }: { f: ServiceFaq; isOpen: boolean; onToggle: () => void }) {
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
        <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]"
        >
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
            <p className="px-5 sm:px-6 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServiceDetail({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const prev = prevServiceOf(service.path)
  const next = nextServiceOf(service.path)
  const Icon = service.icon
  const words = service.title.split(' ')
  const lastWord = words.pop() ?? ''
  const rest = words.join(' ')

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-28 sm:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-[#FFE44D]/5 to-[#FFE44D]/10" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD700]/15 rounded-full blur-3xl animate-pulse-glow" aria-hidden="true"></div>
      <Helmet>
        <title>{service.title} | Vexorix Technologies</title>
        <meta name="description" content={`${service.title} by Vexorix — ${service.desc}`} />
        <link rel="canonical" href={`https://vexorixtechnologies.in${service.path}`} />
      </Helmet>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0f]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/vexorix.tech.png" alt="Vexorix Logo" className="h-9 w-9 object-contain" />
            <span className="text-base sm:text-lg font-bold gradient-text">Vexorix Technologies</span>
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
        <section className="pt-14 sm:pt-20 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#FFD700]/25 bg-[#FFD700]/5 px-4 py-1.5 mb-6"
              >
                <span className="w-8 h-8 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                  <Icon size={16} />
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#FFD700]">
                  Service {service.num}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                {rest} <span className="gradient-text">{lastWord}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl"
              >
                {service.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                {service.badges.map(badge => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] sm:text-xs text-gray-300"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 flex-wrap mt-8"
              >
                <a
                  href="https://wa.me/919655058949?text=Hello%20Vexorix%20%F0%9F%91%8B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold text-black hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Start a Project
                  <ArrowRight size={17} />
                </a>
                <a
                  href="https://www.instagram.com/vexorix.tech?stkn=aHV4cWsxemdwNHMx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 sm:px-8 py-3 sm:py-3.5 glass rounded-full font-semibold hover:scale-105 transition-transform hover:bg-white/10 text-sm sm:text-base"
                >
                  View Our Work
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[#FFD700]/10 blur-3xl" aria-hidden="true"></div>
              <div className="relative rounded-2xl border border-white/10 bg-[#0d0d12]/90 p-6 sm:p-8 overflow-hidden">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#FFD700]/70 mb-6">
                  What you get
                </h2>
                <ul className="space-y-5">
                  {service.features.slice(0, 4).map((feature, idx) => {
                    const FeatureIcon = feature.icon
                    return (
                      <motion.li
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-10 h-10 shrink-0 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                          <FeatureIcon size={18} />
                        </span>
                        <div>
                          <p className="font-semibold text-sm">{feature.title}</p>
                          <p className="text-gray-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                        </div>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="overview" className="pt-2 pb-16 sm:pb-24">
          <Reveal className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]/80 mb-3">
              Overview
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What <span className="gradient-text">{service.title.toLowerCase()}</span> means
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="lg:col-span-2 space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              {service.overview.map((paragraph, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15} className="lg:col-span-1">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Service {service.num}</h3>
                <div className="flex flex-wrap gap-2">
                  {service.badges.map(badge => (
                    <span
                      key={badge}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-gray-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <Link
                  to="/#footer"
                  className="inline-flex items-center gap-2 mt-6 text-xs font-semibold text-[#FFD700] hover:gap-3 transition-all"
                >
                  Discuss this service
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="pt-2 pb-16 sm:pb-24">
          <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]/80 mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Included in <span className="gradient-text">{service.title.toLowerCase()}</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, idx) => {
              const FeatureIcon = feature.icon
              return (
                <Reveal key={feature.title} delay={(idx % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#FFD700]/30 hover:bg-white/[0.05] hover:-translate-y-1">
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className="inline-flex w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 items-center justify-center text-[#FFD700] mb-4"
                    >
                      <FeatureIcon size={22} />
                    </motion.span>
                    <h3 className="font-bold mb-2 text-base sm:text-lg">{feature.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="faq" className="pt-2 pb-16 sm:pb-24">
          <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]/80 mb-3">
              Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-3">
            {service.faq.map((f, idx) => (
              <FaqItem
                key={f.q}
                f={f}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-[#FFD700]/20 bg-gradient-to-br from-[#FFD700]/10 via-white/[0.03] to-[#FFE44D]/5 px-6 py-14 sm:py-16 text-center mb-16 sm:mb-20">
          <div className="absolute -top-24 right-10 w-72 h-72 bg-[#FFD700]/15 rounded-full blur-3xl" aria-hidden="true"></div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Let's discuss how {service.title.toLowerCase()} can transform your business.
          </p>
          <Link
            to="/#footer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFE44D] rounded-full font-semibold text-black hover:scale-105 transition-transform"
          >
            Get in Touch
            <ArrowRight size={17} />
          </Link>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {prev && (
              <Link
                to={prev.path}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all hover:border-[#FFD700]/30"
              >
                <span className="inline-flex items-center gap-2 text-xs text-gray-400 group-hover:text-[#FFD700] transition-colors">
                  <ArrowLeft size={15} />
                  Previous Service
                </span>
                <h3 className="font-bold text-lg mt-2">{prev.title}</h3>
              </Link>
            )}
            {next && (
              <Link
                to={next.path}
                className="group ml-auto rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 text-right transition-all hover:border-[#FFD700]/30"
              >
                <span className="inline-flex items-center gap-2 text-xs text-gray-400 group-hover:text-[#FFD700] transition-colors ml-auto">
                  Next Service
                  <ArrowRight size={15} />
                </span>
                <h3 className="font-bold text-lg mt-2">{next.title}</h3>
              </Link>
            )}
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

export default ServiceDetail