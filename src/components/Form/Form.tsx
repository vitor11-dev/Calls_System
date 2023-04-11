import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  EmailIcon,
  EyeIcon,
  EyeSlashIcon,
  LockIcon,
  UserBlackIcon,
  UserProfileIcon,
} from '../../../assets'
import { api } from '../../services/api'
import { FormType, PasswordType } from '../../types'
import { BtnPrimary } from '../Buttons/BtnPrimary'

export function Form(props: FormType) {
  const [typePass, setTypePass] = useState<PasswordType>('password')
  const [handleEye, setHandleEye] = useState<string>(EyeIcon)

  const [name, setName] = useState<string>('')
  const [profile, setProfile] = useState<string | null>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function togglePass() {
    if (typePass === 'password') {
      setTypePass('text')
      setHandleEye(EyeSlashIcon)
      return
    }
    setTypePass('password')
    setHandleEye(EyeIcon)
  }

  function setUserProfile(file: File | null) {
    if (!file) return null

    const reader = new FileReader()
    reader.onload = () => setProfile(reader.result as string)
    reader.readAsDataURL(file)
  }

  async function submitForm() {
    if (props.type === 'login') {
      //login
      return
    }

    const user = {
      name,
      email,
      password,
      profile: profile,
    }

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    api
      .post('/user/create', user, header)
      .then(response => {
        console.log(response.data)

        localStorage.setItem('user', JSON.stringify(response.data))
      })
      .catch(err => console.log(err))
  }

  return (
    <form
      className='mt-2 grid'
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        submitForm()
      }}
    >
      {props.type === 'register' && (
        <div className='mt-2 grid'>
          <span className='my-1 text-xs text-gray-600'>Nome</span>
          <div className='h-10 flex items-center rounded border-solid border border-primary-color'>
            <img
              src={UserBlackIcon}
              alt='Icone de usuário'
              className='w-2/12 h-6'
            />
            <input
              type='text'
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
              placeholder='Digite seu nome'
              className='w-11/12 border border-none outline-none text-gray-800'
            />
          </div>
        </div>
      )}

      <div className='mt-2 grid'>
        <span className='my-1 text-xs text-gray-600'>E-mail</span>
        <div className='h-10 flex items-center rounded border-solid border border-primary-color'>
          <img src={EmailIcon} alt='Icone de email' className='w-2/12 h-6' />
          <input
            type='email'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            placeholder='example@gmail.com'
            className='w-11/12 border border-none outline-none text-gray-800'
          />
        </div>
      </div>

      <div className='mt-2 grid'>
        <span className='my-1 text-xs text-gray-600'>Password</span>
        <div className='h-10 flex items-center rounded border-solid border border-primary-color'>
          <img src={LockIcon} alt='Icone de email' className='w-2/12 h-6' />
          <input
            type={typePass}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
            placeholder='Digite uma senha'
            className='w-10/12 border border-none outline-none'
          />
          <img
            src={handleEye}
            alt='Icone de email'
            onClick={togglePass}
            className='w-2/12 h-6 cursor-pointer'
          />
        </div>
      </div>

      {props.type === 'register' && (
        <div className='mt-2 grid'>
          <span className='my-1 text-xs text-gray-600'>Imagem de Perfil</span>
          <div className='h-10 flex items-center rounded border-solid border border-primary-color'>
            <img
              src={UserProfileIcon}
              alt='Icone de calendario'
              className='w-2/12 h-6'
            />
            <input
              type='file'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  setUserProfile(e.target.files[0])
                } else {
                  setUserProfile(null)
                }
              }}
              accept='image/*'
              className='w-11/12 border border-none outline-none text-sm text-gray-800'
            />
          </div>
        </div>
      )}

      {props.type === 'login' && (
        <Link
          to={'/forgot'}
          className='text-xs text-primary-color w-full flex justify-end cursor-pointer mt-1'
        >
          Esqueceu a senha?
        </Link>
      )}

      <div className='mt-5 h-14'>
        <BtnPrimary onClick={submitForm}>
          {' '}
          {props.type === 'login' ? 'Entrar' : 'Registar'}{' '}
        </BtnPrimary>
      </div>

      {props.type === 'login' && (
        <p className='mt-7 w-full text-center text-sm max-[450px]:text-xs'>
          Ainda não tem uma conta?{' '}
          <Link
            to={'/register'}
            className='text-primary-color font-bold w-full m-auto cursor-pointer'
          >
            Inscreva-se
          </Link>
        </p>
      )}
    </form>
  )
}
