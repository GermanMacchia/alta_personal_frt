import { LinearProgress } from '@mui/material'
import { EmpleadosList } from '../components/EmpleadoList'
import { useEmpleadoList } from '../hooks/useEmpleadoList'

const style = {
	loading: {
		height: '10px',
		marginTop: '5px',
	},
}

export const ListaEmpleado = () => {
	const {
		empleados: { data, isLoading },
		areas,
	} = useEmpleadoList()

	if (areas.error) return <h4>Error de conexión</h4>
	if (areas.isLoading || isLoading)
		return <LinearProgress sx={style.loading} color='success' />
	if (data.length === 0) return <h2>Tabla sin datos</h2>

	return <EmpleadosList areas={areas.data} empleados={data} />
}
