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
    console.log( nuevoEmpleado )
    await sleep( 1 )
    return await api.post( '/api/empleado', nuevoEmpleado )
}

const deleteEmpleado = async ( id: string ) => {
    await sleep( 1 )
    return await api.delete( `/api/empleado/${ id }` )
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

    const areaMutation = useMutation(
        ( nuevoEmpleado: EmpleadoForm ) => postEmpleado( nuevoEmpleado ),
        {
            onSuccess: () => {
            },
        } )


    const areaDelete = useMutation(
        ( id: string ) => deleteEmpleado( id ),
        {
            onSuccess: () => {
            },
        } )


    return {
        areas: areaQuery.data,
        altaEmpleado: areaMutation,
        empleadoDelete: areaDelete,
    }


}