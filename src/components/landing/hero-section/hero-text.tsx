import { Sketch } from '../../../../public/icons/sketch'

export const HeroText = () => {
  return (
    <div className="flex max-w-lg flex-col items-center gap-4 text-center">
      <h1 className="relative text-4xl font-medium">
        Craft animated{' '}
        <span className="absolute -right-16 bottom-12 rotate-12">
          <Sketch />
        </span>
        eye-catching interfaces in no time.
      </h1>
      <p className="max-w-md text-sm font-normal">
        An open-source collection of animated components and buttons.
        Effortlessly copy-paste, customize, and integrate.
      </p>
    </div>
  )
}
