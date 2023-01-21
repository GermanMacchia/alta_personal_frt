import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from "../api/api"
import { sleep } from '../helpers/sleep'
import { AreaForm } from '../interfaces/area-form.interface'

const fetchAreas = async () => {
    await sleep( 1 )
    const { data } = await api.get( '/api/area' )
    return data
}

const postAreas = async ( nuevaArea: AreaForm ) => {
    const { nombre } = nuevaArea
    await sleep( 1 )
    return await api.post( '/api/area', { nombre } )
}

export const useAreaForm = () => {

    const areaQuery = useQuery(
        [ 'areasList' ],
        fetchAreas,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )

    const areaMutation = useMutation(
        ( nuevaArea: AreaForm ) => postAreas( nuevaArea ),
        {
            onSuccess: () => {
                areaQuery.refetch()
            },
        } )

    return {
        altaArea: areaMutation,
        areas: areaQuery
    }


}