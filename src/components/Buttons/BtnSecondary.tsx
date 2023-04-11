import { AddIcon } from '../../../assets'
import { ChildrenProps } from '../../types'

export function BtnSecondary({ children }: ChildrenProps) {
  return (
    <button
      type='submit'
      className='
        w-full 
        h-full 
        flex
        items-center
        justify-evenly
        text-sm 
        text-white 
        rounded  
        bg-green-600 
        hover:bg-green-500 
        cursor-pointer 
        transition-colors 
        max-[450px]:h-10'
    >
      <img src={AddIcon} alt='icone de adição' className='h-2/3' />
      {children}
    </button>
  )
}
