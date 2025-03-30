import { ButtonComponent } from '@/core/configs/button-configs'
import { SelectedButtonProps } from '@/app/buttons/page'
import { ArrowUpRight } from 'lucide-react'
import ButtonCarousel from './button-carousel'

type ButtonCardProps = {
  id: string
  ButtonComponent: ButtonComponent
  getSource: (props: any) => string
  variants?: { [key: string]: any }
  carousel: boolean
  customizationOptions?: { [key: string]: any }
  onOpenModal: ({
    id,
    ButtonComponent,
    getSource,
    variants,
    customizationOptions,
  }: SelectedButtonProps) => void
}

export const ButtonCard = ({
  id,
  ButtonComponent,
  getSource,
  variants,
  carousel,
  customizationOptions,
  onOpenModal,
}: ButtonCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className="group/button-div relative flex h-44 w-56 cursor-pointer flex-col items-center justify-center rounded-2xl border border-stone-200 bg-stone-100 p-1 shadow-sm transition-all duration-300 hover:border-stone-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
      onClick={() =>
        onOpenModal({
          id,
          ButtonComponent,
          getSource,
          variants,
          carousel,
          customizationOptions,
        })
      }
    >
      <span className="absolute right-1 top-1 -translate-x-0.5 translate-y-0.5 opacity-0 transition-all duration-300 group-hover/button-div:translate-x-0 group-hover/button-div:translate-y-0 group-hover/button-div:opacity-100">
        <ArrowUpRight
          size={24}
          className="rounded-full bg-stone-200 p-1 text-stone-500 dark:bg-neutral-800 dark:text-stone-400"
        />
      </span>

      <div onClick={handleClick}>
        {ButtonComponent ? (
          variants && carousel ? (
            <ButtonCarousel
              ButtonComponent={ButtonComponent}
              variants={variants}
            />
          ) : (
            <ButtonComponent />
          )
        ) : null}
      </div>
    </div>
  )
}
