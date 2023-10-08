import { ComponentProps } from 'react'

type InputProps = Omit<ComponentProps<'input'>, 'className' | 'style'>

export function Input(props: InputProps) {
  return (
    <div className="p-px bg-base-gray-800 focus-within:bg-linear-gradient rounded-[5px] h-fit flex justify-center items-center">
      <input
        type="text"
        className="px-3 py-4 rounded-[5px] focus:outline-none focus:border-0 bg-base-gray-800 min-w-[290px] placeholder-base-gray-400 text-base leading-chubby font-normal text-base-white"
        placeholder="Digite seu e-mail"
        {...props}
      />
    </div>
  )
}
