import { FieldTextProps } from '../types'

export function FieldText(props: FieldTextProps) {
  return (
    <div className='w-full'>
      <small>{props.label}</small>
      <div
        className='
      p-2
      rounded
      border
      border-primary-color
    '
      >
        {props.children}
      </div>
    </div>
  )
}
