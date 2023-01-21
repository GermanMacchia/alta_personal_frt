import { useQuery } from "@tanstack/react-query"
import { api } from "../api/api"
import { sleep } from '../helpers/sleep'

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
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )

    return {
        empleados: empleadosQuery,
        areas: areaQuery
    }
}
