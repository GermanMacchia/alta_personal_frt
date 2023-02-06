import { useMutation } from '@tanstack/react-query'
import { authSignin, authSignup } from '../api/apiAuth'
import { User } from '../interfaces/user.interface'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

export const useAuthForm = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')

  const setLocalStorageToken = (data: string) => {
    localStorage.setItem('user', JSON.stringify(data))
  }

  const signIn = useMutation((usuario: User) =>
    authSignin(usuario).then(data => setToken(data))
  )

  const signUp = useMutation((usuario: User) => authSignup(usuario))

  useEffect(() => {
    if (token) {
      setLocalStorageToken(token)
      navigate('/lista-empleados')
    }
  }, [token])

  const signOut = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return {
    signIn,
    signOut,
    signUp,
  }
}
