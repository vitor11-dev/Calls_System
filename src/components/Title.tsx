import { ChildrenProps } from '../types'

export function Title({ children }: ChildrenProps) {
  return (
    <h3
      className='
        text-base
        text-bold
        uppercase
      '
    >
      {children}
    </h3>
  )
}
