import { ChildrenProps } from '../../types'
import { Menu } from '../Menu/Menu'

export function BaseLayout({ children }: ChildrenProps) {
  return (
    <div className='w-screen h-screen bg-primary-color flex pt-3'>
      <div className='w-1/6'>
        <Menu />
      </div>
      <div className='w-5/6 h-full bg-white rounded-tl-[32px] pt-12 px-14'>
        {children}
      </div>
    </div>
  )
}
