import { Link } from 'react-router-dom'

interface NavProps {
  img: string
  name: string
  to: string
}

export function NavLink(props: NavProps) {
  return (
    <Link to={props.to}>
      <div className='flex gap-3 items-center cursor-pointer'>
        <img src={props.img} alt='Icone de usuário' className='w-7 h-7' />
        <h2 className='text-white text-lg font-light cursor-pointer mt-1'>
          {props.name}
        </h2>
      </div>
    </Link>
  )
}
