import { LinearProgress } from "@mui/material"
import { Tabla } from "../components/Tabla"
import { useEmpleadoList } from '../hooks/useEmpleadoList'

const style = {
    loading: {
        height: '20px',
        marginTop: '10px'
    }
}

export const EmpleadosList = () => {
    const { empleados: { data, isLoading }, areas } = useEmpleadoList()

    if ( areas.error ) return <h4>Error de conexión</h4>
    if ( areas.isLoading || isLoading ) return <LinearProgress sx={ style.loading } color="success" />
    if ( data.length === 0 ) return <h2>Tabla sin datos</h2>
    return (
        <div>
            <Tabla areas={ areas.data } empleados={ data } />
        </div>
    )
}
