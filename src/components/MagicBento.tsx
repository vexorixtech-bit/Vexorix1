import { memo, useMemo, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Check, Copy, Code2 } from 'lucide-react'
import './MagicBento.css'

function mulberry32(seed: number) {
  return function () {
    let value = (seed += 0x6d2b79f5)
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

const StarField = memo(function StarField({ count = 42, seed = 11 }: { count?: number; seed?: number }) {
  const stars = useMemo(() => {
    const rand = mulberry32(seed)
    return Array.from({ length: count }, () => ({
      top: rand() * 100,
      left: rand() * 100,
      size: 1 + rand() * 2,
      delay: rand() * 4,
      duration: 2.2 + rand() * 3.5,
    }))
  }, [count, seed])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star-dot"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
})

interface MagicCardProps {
  className?: string
  tilt?: boolean
  children: ReactNode
}

function MagicCard({ className = '', tilt = true, children }: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rippleId = useRef(0)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 220, damping: 22 })
  const magnetX = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 18 })
  const magnetY = useSpring(useTransform(my, [0, 1], [-7, 7]), { stiffness: 200, damping: 18 })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
    el.style.setProperty('--spot-x', `${x * 100}%`)
    el.style.setProperty('--spot-y', `${y * 100}%`)
  }

  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const id = rippleId.current++
    setRipples(state => [...state, { x, y, id }])
    window.setTimeout(() => {
      setRipples(state => state.filter(r => r.id !== id))
    }, 700)
  }

  return (
    <motion.div
      ref={ref}
      tabIndex={0}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      style={tilt ? { rotateX, rotateY, x: magnetX, y: magnetY, transformPerspective: 1000 } : undefined}
      className={`bento-card ${className}`}
    >
      <div className="bento-spotlight" />
      <div className="bento-content">{children}</div>
      {ripples.map(ripple => (
        <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
    </motion.div>
  )
}

const techStack = ['React', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS']

const codeLines = [
  { text: '// turning ideas into solutions', color: 'text-gray-500' },
  { text: 'const idea = "solve real problems";', color: 'text-[#FFD700]' },
  { text: 'const stack = [web, ai, cloud];', color: 'text-[#FFE44D]' },
  { text: 'const product = build(idea, stack);', color: 'text-[#FDE68A]' },
  { text: 'deploy(product); // worldwide ✦', color: 'text-[#FFD700]' },
] as const

const newsroomLines = [
  { text: '// the inside scoop', color: 'text-gray-500' },
  { text: 'const mission = "real-world products";', color: 'text-[#FFD700]' },
  { text: 'const tech = [web, ai/ml, cloud];', color: 'text-[#FFE44D]' },
  { text: 'const arch = "cloud-ready";', color: 'text-[#FDE68A]' },
  { text: 'ship(mission); // grow daily ✦', color: 'text-[#FFD700]' },
] as const

type CodeLine = { text: string; color: string }

interface CodeEditorProps {
  title?: string
  lines?: readonly CodeLine[]
}

function CodeEditor({ title = 'solution.ts — Vexorix', lines = codeLines }: CodeEditorProps) {
  return (
    <div className="code-window rounded-xl overflow-hidden text-left mt-5">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-[10px] text-gray-400 tracking-wide">{title}</span>
      </div>
      <div className="px-4 py-3 space-y-1.5 text-[11px] sm:text-xs leading-relaxed">
        {lines.map((line, i) => (
          <p key={i} className={line.color}>
            <span className="text-gray-600 select-none mr-3">{i + 1}</span>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  )
}

export function MagicBento() {
  const [copied, setCopied] = useState(false)
  return (
    <section id="bento" className="pt-16 sm:pt-24 pb-2 sm:pb-4">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <MagicCard className="md:row-span-2 p-7 sm:p-10 flex flex-col justify-center min-h-[320px]">
            <StarField count={54} seed={42} />
            <div className="bento-content relative z-10 flex flex-col justify-center h-full">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#FFD700]/80 mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[#FFE44D]/60" /> About
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                We craft exceptional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE44D] to-[#FDE68A]">
                  digital experiences
                </span>{' '}
                on web and mobile.
              </h3>
              <p className="mt-5 text-white/55 text-sm sm:text-base max-w-md">
                Landing pages to full platforms — built for performance, scale and beauty.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] sm:text-xs font-medium text-[#FFD700]">
                {['Web', 'Mobile', 'AI / ML', 'Cloud'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </MagicCard>

          <MagicCard className="p-6 sm:p-8 min-h-[180px] flex flex-col items-start justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Let's build something <span className="gradient-text">extraordinary</span> together.
            </h3>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText('vexorixtechnologies@gmail.com')
                setCopied(true)
                setTimeout(() => setCopied(false), 2500)
              }}
              className="inline-flex items-center gap-2 mt-5 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#FFD700]/40 rounded-full font-semibold hover:bg-[#FFD700]/10 transition-all text-xs sm:text-sm text-[#FFD700]"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#FFD700]" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={14} className="text-[#FFD700]" />
                  Copy my email address
                </>
              )}
            </button>
          </MagicCard>

          <MagicCard className="p-6 sm:p-8 min-h-[180px]">
            <p className="text-white/60 text-sm sm:text-base">Always pushing the boundaries of</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              My <span className="gradient-text">Tech Stack</span>
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {techStack.map(tech => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-xs font-medium text-white/90 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MagicCard>

          <MagicCard className="p-6 sm:p-8">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 mb-4">
              <Code2 size={20} className="text-[#FFD700]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Passionate about solving problems,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFE44D]">
                one line of code at a time.
              </span>
            </h3>
            <CodeEditor />
          </MagicCard>

          <MagicCard className="p-6 sm:p-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]/80 mb-1">
              The Inside Scoop
            </p>
            <CodeEditor title="scoop.ts — Vexorix" lines={newsroomLines} />
            <p className="mt-4 text-white/55 text-xs sm:text-sm leading-relaxed">
              Creating real-world web solutions powered by React, Node.js, Firebase, and AWS.
            </p>
            <p className="mt-1 text-white/40 text-[11px] sm:text-xs">
              React · Node.js · Firebase · AWS
            </p>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFE44D] to-[#F59E0B]" />
          </MagicCard>
        </div>
      </div>
    </section>
  )
}

export type { MagicCardProps }

export default MagicBento