import { Link } from 'react-router-dom'
import { ChatIcon, ProfileIcon, SearchIcon } from '../../assets'
import { BtnPrimary } from '../components/Buttons/BtnPrimary'
import { BtnSecondary } from '../components/Buttons/BtnSecondary'
import { BaseLayout } from '../components/Layout/BaseLayout'
import { Title } from '../components/Title'
import { TitleBar } from '../components/TitleBar'

export function DashboardPage() {
  return (
    <BaseLayout>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img src={ChatIcon} alt='icon de chat' />
          <h1 className='text-2xl font-light'>Atendimentos</h1>
        </div>
        <Link to={'/profile'}>
          <img
            src={ProfileIcon}
            alt='imagem de perfil'
            className='w-10 h-10 rounded-full cursor-pointer'
          />
        </Link>
      </div>

      <div className='mt-8 w-full h-9 flex justify-between items-center gap-4'>
        <div className='w-36 h-full'>
          <BtnPrimary>Buscar</BtnPrimary>
        </div>
        <div className='h-full w-full flex items-center border border-primary-color rounded'>
          <img src={SearchIcon} alt='imagem de uma lupa' className='px-4' />
          <input
            type='text'
            required
            placeholder='procurar chamados...'
            className='w-full outline-none border-none'
          />
        </div>
        <Link to={'/call/create'} className='w-52 h-full'>
          <BtnSecondary>Novo Chamado</BtnSecondary>
        </Link>
      </div>

      <TitleBar>
        <Title>Cliente</Title>
        <Title>Assunto</Title>
        <Title>Status</Title>
        <Title>Cadastrado em</Title>
      </TitleBar>
    </BaseLayout>
  )
}
