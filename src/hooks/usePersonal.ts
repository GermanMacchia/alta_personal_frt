import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../api/api"
import { sleep } from '../helpers/sleep'
import { Empleado } from '../interfaces/empleado.interface'

const fetchEmpleados = async () => {
    await sleep( 1 )
    const { data } = await api.get( '/api/empleado' )
    return data
}

const fetchAreas = async () => {
    await sleep( 1 )
    const { data } = await api.get( '/api/area' )
    return data
}

const deleteEmpleado = async ( id: string ) => {
    await sleep( 1 )
    return await api.delete( `/api/empleado/${ id }` )
}

const editEmpleado = async ( data: Empleado ) => {
    await sleep( 1 )
    return await api.patch( `/api/empleado/${ data._id }`, data )
}

export const usePersonal = () => {

    const areaQuery = useQuery(
        [ 'areas' ],
        fetchAreas,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )

    const empleadosQuery = useQuery(
        [ 'empleados' ],
        fetchEmpleados,
        {
            enabled: areaQuery.data ? true : false,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
        }
    )

    const empleadoDelete = useMutation(
        ( id: string ) => deleteEmpleado( id ),
        {
            onSuccess: () => {
                empleadosQuery.refetch()
            },
        } )

    const empleadoEdit = useMutation(
        ( data: any ) => editEmpleado( data ),
        {
            onSuccess: () => {
                empleadosQuery.refetch()
            },
        } )


    return {
        empleados: empleadosQuery,
        areas: areaQuery,
        empleadoDelete: empleadoDelete,
        empleadoEdit: empleadoEdit
    }
}