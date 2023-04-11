import { ChildrenProps } from '../types'

export function TitleBar({ children }: ChildrenProps) {
  return (
    <div
      className='
          w-full 
          mt-12
          py-1 
          flex 
          items-center 
          justify-evenly 
          rounded 
          bg-secondary-color
          text-white'
    >
      {children}
    </div>
  )
}
