import React, { useEffect, useRef, useState } from 'react'
import Matter, {
  Engine,
  Runner,
  Composite,
  Bodies,
  Mouse,
  MouseConstraint,
} from 'matter-js'
import { buttons } from './buttons'

export const HeroShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [buttonItems, setButtonItems] = useState<any[]>([])
  const engineRef = useRef<Matter.Engine | null>(null)
  const runnerRef = useRef<Matter.Runner | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const engine = Engine.create()
    engineRef.current = engine
    const world = engine.world
    const buttonComposite = Composite.create()
    const defaultButtonWidth = 120
    const defaultButtonHeight = 50

    const createButtons = () => {
      const centerX = window.innerWidth / 2
      const baseY = 300

      const getRandomOffset = () => (Math.random() - 0.5) * 200

      return buttons.map((config) => {
        const width = config.width || defaultButtonWidth
        const height = config.height || defaultButtonHeight
        const x = centerX + getRandomOffset()
        const y = baseY

        const body = Bodies.rectangle(x, y, width, height, {
          friction: 1,
          density: 0.1,
        })

        Composite.add(buttonComposite, body)
        return { body, config, width, height }
      })
    }

    let items = createButtons()
    Composite.add(world, buttonComposite)

    const wallThickness = 100
    const createWalls = () => [
      Bodies.rectangle(
        window.innerWidth / 2,
        -wallThickness / 2,
        window.innerWidth,
        wallThickness,
        { isStatic: true }
      ),
      Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + wallThickness / 2,
        window.innerWidth,
        wallThickness,
        { isStatic: true }
      ),
      Bodies.rectangle(
        -wallThickness / 2,
        window.innerHeight / 2,
        wallThickness,
        window.innerHeight,
        { isStatic: true }
      ),
      Bodies.rectangle(
        window.innerWidth + wallThickness / 2,
        window.innerHeight / 2,
        wallThickness,
        window.innerHeight,
        { isStatic: true }
      ),
    ]

    let walls = createWalls()
    Composite.add(world, walls)

    const mouse = Mouse.create(containerRef.current)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2 },
    })
    Composite.add(world, mouseConstraint)

    const runner = Runner.create()
    runnerRef.current = runner
    Runner.run(runner, engine)

    const updatePositions = () => {
      setButtonItems(
        items.map(({ body, config, width, height }) => ({
          body,
          config,
          width,
          height,
        }))
      )
      animationRef.current = requestAnimationFrame(updatePositions)
    }
    updatePositions()

    const handleResize = () => {
      Composite.clear(world, false)
      Composite.clear(buttonComposite, false)

      items = createButtons()
      walls = createWalls()

      Composite.add(world, buttonComposite)
      Composite.add(world, walls)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (runnerRef.current) Runner.stop(runnerRef.current)
      if (engineRef.current) Engine.clear(engineRef.current)
      Composite.clear(world, false)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute left-0 top-0 h-full w-full">
      {buttonItems.map(({ body, config, width, height }, index) => {
        const ButtonComponent = config.ButtonComponent
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: `${width}px`,
              height: `${height}px`,
              transform: `translate(${body.position.x - width / 2}px, ${
                body.position.y - height / 2
              }px) rotate(${body.angle}rad)`,
            }}
            className="select-none"
          >
            <ButtonComponent {...(config.customizationOptions || {})}>
              {config.label}
            </ButtonComponent>
          </div>
        )
      })}
    </div>
  )
}
