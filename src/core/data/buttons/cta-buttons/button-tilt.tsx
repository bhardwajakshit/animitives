import React, { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useTransform,
} from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonTiltProps = {
  label?: string
  borderRadius?: string
}

const DEFAULT_PROPS = {
  label: 'Hover Me',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'relative inline-flex w-fit items-center justify-center overflow-hidden bg-neutral-950 px-6 py-2 text-sm font-medium text-neutral-200'

export const ButtonTilt = ({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonTiltProps) => {
  const divRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
  })
  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
  })

  const smoothRotateX = useTransform(springY, [-0.5, 0.5], [16, -16])
  const smoothRotateY = useTransform(springX, [-0.5, 0.5], [-16, 16])

  const transform = useMotionTemplate`rotateX(${smoothRotateX}deg) rotateY(${smoothRotateY}deg)`

  const shineX = useMotionValue(0)
  const shineY = useMotionValue(0)
  const shineOpacity = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)

    shineX.set(e.clientX - rect.left)
    shineY.set(e.clientY - rect.top)
    shineOpacity.set(0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    shineOpacity.set(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      className={cn(BASE_CLASS, borderRadius)}
    >
      {label}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          width: '100%',
          height: '200%',
          top: shineY,
          left: shineX,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)',
          opacity: shineOpacity,
          willChange: 'transform, opacity',
        }}
      />
    </motion.div>
  )
}

export const getButtonTiltSource = ({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonTiltProps) => {
  const btnClass = cn(BASE_CLASS, borderRadius)

  return `
import React, { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useTransform,
} from 'framer-motion'
import { cn } from '@/lib/cn'

export const ButtonTilt = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
  })
  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
  })

  const smoothRotateX = useTransform(springY, [-0.5, 0.5], [16, -16])
  const smoothRotateY = useTransform(springX, [-0.5, 0.5], [-16, 16])

  const transform = useMotionTemplate\`rotateX(\${smoothRotateX}deg) rotateY(\${smoothRotateY}deg)\`

  const shineX = useMotionValue(0)
  const shineY = useMotionValue(0)
  const shineOpacity = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)

    shineX.set(e.clientX - rect.left)
    shineY.set(e.clientY - rect.top)
    shineOpacity.set(0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    shineOpacity.set(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      className="${btnClass}"
    >
      ${label}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          width: '100%',
          height: '200%',
          top: shineY,
          left: shineX,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)',
          opacity: shineOpacity,
          willChange: 'transform, opacity',
        }}
      />
    </motion.div>
  )
};`.trim()
}
