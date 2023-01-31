import { useMutation } from '@tanstack/react-query'
import { authSignin } from '../api/apiAuth'
import { User } from '../interfaces/user.interface'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

export const useAuthForm = () => {
	const navigate = useNavigate()
	const [token, setToken] = useState('')

	const setLocalStorageToken = (data: string) => {
		localStorage.setItem('user', JSON.stringify(data))
	}

	const getLocalStorageToken = () => {
		JSON.parse(localStorage.getItem('user')!)
	}

	const signIn = useMutation((usuario: User) =>
		authSignin(usuario).then(data => setToken(data))
	)

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
	}
}
