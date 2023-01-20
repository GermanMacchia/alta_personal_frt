import { LinearProgress } from "@mui/material"
import { Tabla } from "../components/Tabla"
import { usePersonal } from '../hooks/usePersonal'

const style = {
    loading: {
        height: '20px',
        marginTop: '10px'
    }
}

export const UserList = () => {
    const { empleados, areas } = usePersonal()

    if ( areas.error ) return <h4>Error de conexión</h4>
    if ( areas.isLoading || empleados.isLoading ) return <LinearProgress sx={ style.loading } color="success" />
    return (
        <div>
            <Tabla areas={ areas } empleados={ empleados } />
        </div>
    )
}
