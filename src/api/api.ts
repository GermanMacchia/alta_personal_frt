import axios from 'axios'

const base = axios.create({
	baseURL: import.meta.env.VITE_URL_API,
})

const api = async ({ ...options }) => {
	base.defaults.headers.common.Authorization = JSON.parse(
		localStorage.getItem('user')!
	)
	const onSuccess = (response: any) => response
	const onError = (error: any) => {
		return error
	}
	return await base(options).then(onSuccess).catch(onError)
}

export { api }
