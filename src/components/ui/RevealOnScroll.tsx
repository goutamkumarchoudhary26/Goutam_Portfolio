import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

import { fadeInUp } from '@lib/motion'

interface RevealOnScrollProps {
  children: ReactNode
  variants?: Variants
  className?: string
  as?: 'div' | 'section' | 'li'
}

export function RevealOnScroll({
  children,
  variants = fadeInUp,
  className,
  as = 'div',
}: RevealOnScrollProps) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
