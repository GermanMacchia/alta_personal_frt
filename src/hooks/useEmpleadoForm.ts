import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from "../api/api"
import { sleep } from '../helpers/sleep'
import { EmpleadoForm } from '../interfaces/empleado-form.interface'

const fetchAreas = async () => {
    await sleep( 1 )
    const { data } = await api.get( '/api/area' )
    return data
}


const postEmpleado = async ( nuevoEmpleado: EmpleadoForm ) => {
    await sleep( 1 )
    return await api.post( '/api/empleado', nuevoEmpleado )
}



export const useEmpleadoForm = () => {

    const areaQuery = useQuery(
        [ 'areas' ],
        fetchAreas,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )

    const altaEmpleadoMutation = useMutation(
        ( nuevoEmpleado: EmpleadoForm ) => postEmpleado( nuevoEmpleado ),
    )


    return {
        areas: areaQuery.data,
        altaEmpleado: altaEmpleadoMutation,

    }


}