import { useRef, useState, type ReactNode } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import './Dock.css'

export type DockItem = {
  id?: string
  label: string
  icon: ReactNode
  href?: string
}

function DockIcon({
  mouseX,
  item,
  onNavigate,
}: {
  mouseX: MotionValue<number>
  item: DockItem
  onNavigate: (id: string) => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [46, 96, 46])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 12 })
  const iconScaleSync = useTransform(distance, [-150, 0, 150], [1, 1.6, 1])
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 160, damping: 12 })

  return (
    <div className="dock-icon relative flex flex-col items-center">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.85 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="dock-tooltip pointer-events-none absolute -top-11 whitespace-nowrap rounded-lg bg-black/85 px-3 py-1.5 text-xs font-medium text-white border border-[#FFD700]/20 backdrop-blur-md"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.button
        ref={ref}
        style={{ width }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          mouseX.set(Infinity)
        }}
        onClick={() => {
          if (item.href) {
            window.open(item.href, '_blank', 'noopener,noreferrer')
          } else if (item.id) {
            onNavigate(item.id)
          }
        }}
        aria-label={item.label}
        className="dock-btn flex h-[44px] items-center justify-center rounded-xl border border-[#FFD700]/20 bg-neutral-900/80 text-[#FFD700] backdrop-blur-md transition-colors hover:bg-neutral-800/90"
      >
        <motion.span style={{ scale: iconScale }} className="flex items-center justify-center">
          {item.icon}
        </motion.span>
      </motion.button>
    </div>
  )
}

export function Dock({ items, onNavigate }: { items: DockItem[]; onNavigate: (id: string) => void }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock-container fixed z-50 flex items-end gap-1.5 rounded-2xl border border-white/10 bg-black/55 px-2.5 pb-2.5 pt-2 backdrop-blur-xl shadow-[0_10px_50px_rgba(255,215,0,0.12)] supports-[backdrop-filter]:bg-black/55"
    >
      {items.map((item, index) => (
        <DockIcon key={item.id ?? `dock-${index}`} mouseX={mouseX} item={item} onNavigate={onNavigate} />
      ))}
    </div>
  )
}