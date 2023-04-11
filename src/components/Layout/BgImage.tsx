import { BgIcon } from '../../../assets'

export function BgImage() {
  return (
    <div className='w-1/2 h-full max-[810px]:hidden'>
      <img
        src={BgIcon}
        alt='Imagem de fundo azul'
        className='w-full h-full object-cover'
      />
    </div>
  )
}
