import { ButtonProps } from '../../types'

export function BtnPrimary({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type='submit'
      className='w-full h-full text-center text-base text-white rounded  bg-primary-color hover:bg-secondary-color cursor-pointer transition-colors max-[450px]:h-10'
    >
      {children}
    </button>
  )
}
