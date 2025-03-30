import { ButtonProps } from './button-modal'

type LabelInputProps = {
  label?: string
  onLabelChange: (newLabel: string | undefined) => void
}

export const LabelInput = ({ label, onLabelChange }: LabelInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.length > 0 ? e.target.value : undefined
    onLabelChange(newValue)
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xs font-medium">Label</h2>
      <input
        type="text"
        value={label || ''}
        onChange={handleChange}
        placeholder="Custom Label"
        className="w-full rounded-lg border border-neutral-100 bg-transparent px-2 py-1 text-sm placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-200 focus:outline-none"
      />
    </div>
  )
}

type VariantsSelectorProps<P> = {
  variants: { [key: string]: P }
  currentProps: ButtonProps
  onVariantSelect: (variant: P) => void
}

export const VariantsSelector = <P extends ButtonProps>({
  variants,
  currentProps,
  onVariantSelect,
}: VariantsSelectorProps<P>) => {
  console.log({
    variants,
    currentProps,
    onVariantSelect,
  })
  return (
    <div className="space-y-1">
      <h1 className="text-xs font-medium">Variants</h1>
      <div className="dark:bg-code-background grid grid-cols-4 gap-2.5 rounded-lg bg-neutral-200 p-2.5">
        {Object.keys(variants).map((key) => (
          <button
            key={key}
            className={`size-6 rounded-md ${variants[key].color} ${
              currentProps === variants[key] &&
              'ring-2 ring-black ring-offset-2'
            }`}
            onClick={() => onVariantSelect(variants[key])}
          />
        ))}
      </div>
    </div>
  )
}

type RadiusOption = {
  id: number
  value: string
  label: string
}

type BorderRadiusSelectorProps = {
  selectedRadius: string | null
  onRadiusChange: (value: string) => void
}

export const BorderRadiusSelector = ({
  selectedRadius,
  onRadiusChange,
}: BorderRadiusSelectorProps) => {
  const radiusOptions: RadiusOption[] = [
    { id: 1, value: '', label: 'None' },
    { id: 2, value: 'rounded', label: '4px' },
    { id: 3, value: 'rounded-md', label: '6px' },
    { id: 4, value: 'rounded-lg', label: '8px' },
    { id: 5, value: 'rounded-xl', label: '12px' },
    { id: 6, value: 'rounded-full', label: 'Full' },
  ]

  return (
    <div className="space-y-1">
      <h2 className="text-xs font-medium">Border</h2>
      <div className="dark:bg-code-background grid grid-cols-3 gap-2 rounded-lg bg-neutral-200 p-3">
        {radiusOptions.map((option) => (
          <button
            key={option.id}
            className={`border px-7 py-2.5 ${
              selectedRadius === option.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-transparent bg-neutral-400 dark:bg-neutral-600'
            } ${option.value}`}
            onClick={() => onRadiusChange(option.value)}
          />
        ))}
      </div>
    </div>
  )
}
