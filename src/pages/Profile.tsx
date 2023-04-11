import { Link } from 'react-router-dom'
import { ProfileIcon, UserBlackIcon } from '../../assets'
import { BtnSecondary } from '../components/Buttons/BtnSecondary'
import { FieldText } from '../components/FieldText'
import { BaseLayout } from '../components/Layout/BaseLayout'

export function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user')!)

  return (
    <BaseLayout>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img src={UserBlackIcon} alt='icon de usuario' />
          <h1 className='text-2xl font-light mt-1'>Perfil</h1>
        </div>
        <Link to={'/user/update'} className='w-40 h-9'>
          <BtnSecondary>Atualizar Perfil</BtnSecondary>
        </Link>
      </div>

      <div
        className='
          w-full
          h-auto
          mt-20
          grid
          place-items-center
        '
      >
        <div
          className='
            w-1/3
            grid
            place-items-center
            gap-3
        '
        >
          <img
            src={user.profile ?? ProfileIcon}
            alt='icon de perfil'
            className='
            w-14
            h-14
            rounded-full
            cursor-pointer
          '
          />
          <FieldText label='Nome'>{user.name}</FieldText>
          <FieldText label='E-mail'>{user.email}</FieldText>
        </div>
      </div>
    </BaseLayout>
  )
}
