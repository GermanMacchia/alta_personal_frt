import React from 'react'
import { WithFormProvider } from '../shared'
import { AreaForm } from '../components/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { Box, LinearProgress } from '@mui/material'
import { AlertSnackBar } from '../shared/AlertSnackBar'
import { AreaList } from '../components/AreaList'

const messageSuccess = 'Los datos fueron actualizados'
const style = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '40px auto',
        width: '100vw',
    },
    loading: {
        height: '20px',
        marginTop: '10px'
    }
}

export const ListaArea = () => {
    const { altaArea, areas } = useAreaForm()
    const areaForm = () => <AreaForm isLoading={ altaArea.isLoading } />

    if ( areas.isLoading ) return <LinearProgress sx={ style.loading } color="success" />
    const tablaVacia = areas?.data.length === 0

    return (
        <Box sx={ style.container } >
            { altaArea.isSuccess && <AlertSnackBar severity='success' message={ messageSuccess } isOpen={ true } /> }
            { tablaVacia && <h2>Tabla sin datos</h2> }
            { !tablaVacia && <AreaList areas={ areas.data } /> }

            <WithFormProvider children={ areaForm() } handleSubmit={ altaArea.mutateAsync } />
        </Box>
    )
}
