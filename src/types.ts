import { ReactNode } from 'react'

export type PasswordType = 'text' | 'password'

export interface FormType {
  type: 'login' | 'register'
}

export interface ChildrenProps {
  children: ReactNode
}

export interface FieldTextProps extends ChildrenProps {
  label: string
}

export interface ButtonProps extends ChildrenProps {
  onClick: () => Promise<void>
}
