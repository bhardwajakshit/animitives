import { Arrow } from '@/components/common/arrow'

type ButtonBeamBWProps = {
  label?: string
}

const DEFAULT_PROPS = {
  label: 'Hover Me',
}

export const ButtonBeamBW = ({
  label = DEFAULT_PROPS.label,
}: ButtonBeamBWProps) => {
  return (
    <div className="group relative overflow-hidden rounded-full p-[1px] shadow drop-shadow-[0_0_20px_#FFF] filter transition-all duration-300 hover:brightness-150">
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg,#000_0_340deg,#fff_360deg)]"></span>

      <button className="relative flex w-full items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-all duration-300">
        {label}
        <Arrow />
      </button>
    </div>
  )
}

export const getButtonBeamBWSource = ({
  label = DEFAULT_PROPS.label,
}: ButtonBeamBWProps) => {
  return `
export const ButtonBeamBW = () => {
  return (
    <div className="group relative overflow-hidden rounded-full p-[1px] shadow drop-shadow-[0_0_20px_#fff] filter transition-all duration-300 hover:brightness-150">
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg,#000_0_340deg,#fff_360deg)]"></span>

      <button className="relative flex w-full items-center gap-2 rounded-lg bg-black px-5 py-2 text-base font-medium text-white transition-all duration-300">    
        ${label}
        <Arrow />    
      </button>
    </div>
  );
};`.trim()
}
