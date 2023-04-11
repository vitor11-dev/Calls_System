import { AuthTitle } from '../components/Form/AuthTitle'
import { Form } from '../components/Form/Form'
import { BgImage } from '../components/Layout/BgImage'
import { Logo } from '../components/Layout/Logo'

export function RegisterPage() {
  return (
    <div className='w-screen h-screen bg-white flex'>
      <BgImage />

      <div className='w-1/2 h-full py-10 px-28 max-sm:px-14 max-[810px]:w-screen max-lg:px-10'>
        <Logo />

        <div className='mt-8'>
          <AuthTitle />
        </div>

        <Form type='register' />
      </div>
    </div>
  )
}
