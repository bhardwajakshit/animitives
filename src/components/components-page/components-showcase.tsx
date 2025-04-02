import { ComponentConfigs } from '@/core/configs/component-configs'
import { useState, useEffect } from 'react'

export const ComponentsShowcase = () => {
  const components = [
    {
      id: 'text1',
      Component: ComponentConfigs.texts.components[0].ComponentComponent,
    },
    {
      id: 'perspective',
      Component: ComponentConfigs.perspective.components[0].ComponentComponent,
    },
    {
      id: 'text2',
      Component: ComponentConfigs.texts.components[1].ComponentComponent,
    },
    {
      id: 'card',
      Component: ComponentConfigs.cards.components[2].ComponentComponent,
    },
    {
      id: 'number',
      Component: ComponentConfigs.numbers.components[2].ComponentComponent,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [components.length])

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-full max-w-lg flex-col items-center justify-center overflow-hidden py-8">
        <div className="relative h-56 w-full">
          {components.map(({ id, Component }, index) => (
            <div
              key={id}
              className={`absolute left-0 top-0 h-full w-full transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? 'z-10 translate-x-0 opacity-100'
                  : index ===
                      (currentIndex - 1 + components.length) % components.length
                    ? 'z-0 -translate-x-full opacity-0'
                    : 'z-0 translate-x-full opacity-0'
              }`}
              aria-hidden={index !== currentIndex}
            >
              <div className="flex h-full w-full items-center justify-center">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
