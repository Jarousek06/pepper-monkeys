import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

/** Word-by-word blur-to-sharp reveal. */
export function BlurWords({ text, delay = 0, className = '', style }: { text: string; delay?: number; className?: string; style?: CSSProperties }) {
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          style={{ display: 'inline-block', marginRight: '.25em' }}
          initial={{ opacity: 0, filter: 'blur(18px)', y: 40 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + i * 0.13, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}
