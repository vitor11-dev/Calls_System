import { createContext } from 'react'
import { UserContext } from './AuthTypes'

export const AuthContext = createContext<UserContext>({} as UserContext)
