// import { sleep } from '../helpers'

import { Empleado } from '../interfaces'
import { api } from './api'

export const fetchEmpleados = async () => {
	// await sleep(1)
	const { data } = await api({ method: 'get', url: '/api/empleado' })
	return data
}

export const deleteEmpleado = async (id: string) => {
	// await sleep(1)
	return await api({ method: 'delete', url: `/api/empleado/${id}` })
}

export const editEmpleado = async (data: Empleado) => {
	// await sleep(1)
	return await api({
		method: 'patch',
		url: `/api/empleado/${data._id}`,
		data: data,
	})
}

export const postEmpleado = async (nuevoEmpleado: Empleado) => {
	// await sleep(1)
	return await api({ method: 'post', url: '/api/empleado', data: nuevoEmpleado })
}
