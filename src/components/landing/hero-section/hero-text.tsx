import { Sketch } from '../../../../public/icons/sketch'

export const HeroText = () => {
  return (
    <div className="flex max-w-lg flex-col items-center gap-4 text-center">
      <h1 className="relative text-2xl font-medium text-neutral-950 dark:text-neutral-50 sm:text-4xl">
        Craft animated{' '}
        <span className="absolute bottom-12 right-2 rotate-12 sm:-right-16">
          <Sketch />
        </span>
        eye-catching interfaces in no time.
      </h1>
      <p className="max-w-xs text-sm font-normal text-neutral-600 dark:text-neutral-400 md:max-w-lg md:text-[15px] 2xl:max-w-lg 2xl:text-base">
        An open-source collection of animated components and buttons.
        Effortlessly copy-paste, customize, and integrate.
      </p>
    </div>
  )
}
