'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

type ImageTrailCursorProps = {
  images: string[]
  children: React.ReactNode
  trailDistance?: number
  trailDuration?: number
  imageSize?: { width: number; height: number }
  cursorSize?: number
  bgColor?: string
}

export const ImageTrailCursor = ({
  images,
  children,
  trailDistance = 60,
  trailDuration = 0.4,
  imageSize = { width: 80, height: 96 },
  cursorSize = 15,
  bgColor = 'bg-gray-300/80',
}: ImageTrailCursorProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const lastPosition = useRef({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState<boolean>(true)
  const [trail, setTrail] = useState<
    { id: number; x: number; y: number; src: string }[]
  >([])
  const imageIndex = useRef(0)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const smoothX = useSpring(cursorX, { stiffness: 400, damping: 30, mass: 0.5 })
  const smoothY = useSpring(cursorY, { stiffness: 400, damping: 30, mass: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { left, top } = ref.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      cursorX.set(x)
      cursorY.set(y)

      if (
        Math.abs(x - lastPosition.current.x) > trailDistance ||
        Math.abs(y - lastPosition.current.y) > trailDistance
      ) {
        lastPosition.current = { x, y }
        const currentImage = images[imageIndex.current % images.length]
        imageIndex.current += 1

        setTrail((prev) => [
          ...prev.slice(-9),
          { id: Date.now(), x, y, src: currentImage },
        ])

        setTimeout(
          () => setTrail((prev) => prev.slice(1)),
          trailDuration * 1000
        )
      }
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    const handleMouseEnter = () => {
      setCursorHidden(false)
    }

    const container = ref.current
    if (!container) return

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, images, trailDistance, trailDuration])

  if (!images || images.length === 0) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className="relative h-full w-full"
      style={{ cursor: 'none' }}
    >
      {children}
      <motion.div
        className={`pointer-events-none absolute left-0 top-0 z-50 rounded-full ${bgColor}`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorHidden ? 0 : cursorSize,
          height: cursorHidden ? 0 : cursorSize,
          opacity: cursorHidden ? 0 : 1,
        }}
      />
      {trail.map((item) => (
        <motion.div
          key={item.id}
          className="absolute bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.src})`,
            left: item.x,
            top: item.y,
            width: imageSize.width,
            height: imageSize.height,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: trailDuration, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

// Example Usage
export const ImageTrailCursorDemo = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <ImageTrailCursor
        images={[
          '/images/image1.jpg',
          '/images/image2.jpg',
          '/images/image3.jpg',
          '/images/image4.jpg',
          '/images/image5.jpg',
          '/images/image6.jpg',
          '/images/image7.gif',
          '/images/image8.gif',
        ]}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <h1 className="text-xs font-normal text-black dark:text-white">
            Move the cursor around
          </h1>
        </div>
      </ImageTrailCursor>
    </div>
  )
}
