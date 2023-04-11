import { LogoPurpleIcon } from '../../../assets'

export function Logo() {
  return (
    <div className='w-full flex items-center gap-5'>
      <img src={LogoPurpleIcon} alt='Logo da página' />
      <h1 className='w-5/6 text-xl text-gray-800 max-[365px]:text-base max-[450px]:text-lg'>
        <strong className='text-2xl text-primary-color max-[365px]:text-lg max-[450px]:text-xl'>
          RCA:
        </strong>{' '}
        Register Calls Application
      </h1>
    </div>
  )
}
