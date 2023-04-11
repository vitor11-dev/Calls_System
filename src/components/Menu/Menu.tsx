import {
  ChatWhiteIcon,
  LogoWhiteIcon,
  UsersWhiteIcon,
  UserWhiteIcon,
} from '../../../assets'
import { NavLink } from './NavLink'

export function Menu() {
  return (
    <div className='ml-9 mt-8 grid gap-12'>
      <img src={LogoWhiteIcon} alt='logo da página' />
      <nav className='grid gap-2'>
        <NavLink to='/dashboard' img={ChatWhiteIcon} name='Chamados' />
        <NavLink to='/clients' img={UsersWhiteIcon} name='Clientes' />
        <NavLink to='/profile' img={UserWhiteIcon} name='Perfil' />
      </nav>
    </div>
  )
}
