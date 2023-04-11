import { Link } from 'react-router-dom'
import { UsersBlackIcon } from '../../assets'
import { BtnSecondary } from '../components/Buttons/BtnSecondary'
import { BaseLayout } from '../components/Layout/BaseLayout'
import { Title } from '../components/Title'
import { TitleBar } from '../components/TitleBar'

export function ClientPage() {
  return (
    <BaseLayout>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img src={UsersBlackIcon} alt='icon de usuarios' />
          <h1 className='text-2xl font-light mt-1'>Clientes</h1>
        </div>
        <Link to={'/clients/create'} className='w-40 h-9'>
          <BtnSecondary>Novo Cliente</BtnSecondary>
        </Link>
      </div>

      <TitleBar>
        <Title>Nome</Title>
        <Title>Cnpj</Title>
        <Title>Endereço</Title>
      </TitleBar>
    </BaseLayout>
  )
}
