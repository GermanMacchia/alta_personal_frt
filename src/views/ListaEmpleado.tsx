import { LinearProgress } from '@mui/material'
import { EmpleadosList } from '../components/EmpleadoList'
import { useEmpleadoList } from '../hooks/useEmpleadoList'
import { Empleado } from '../interfaces/empleado.interface'

const style = {
  loading: {
    height: '6px',
    marginTop: '5px',
  },
}

export const ListaEmpleado = () => {
  const {
    empleados: { data, isLoading, isRefetching },
    areas,
  } = useEmpleadoList()

  if (areas.error) return <h4>Error de conexión</h4>
  if (areas.isLoading || isLoading || isRefetching)
    return <LinearProgress sx={style.loading} color='success' />
  if (data.length === 0) return <h2>Tabla sin datos</h2>

  return (
    <EmpleadosList
      areas={areas.data}
      empleados={data.sort((a: Empleado, b: Empleado) => a.dni - b.dni)}
    />
  )
}
