import { WithFormProvider } from '../shared'
import { AltaAreaForm } from '../components/AreaForm/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { Box, LinearProgress } from '@mui/material'
import { ListaArea } from "../components/ListaArea"
import { AlertSnackBar } from '../shared/AlertSnackBar'

const style = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '40px',
        width: '100vw',
    },
    loading: {
        height: '20px',
        marginTop: '10px'
    }
}

const messageSuccess = 'Los datos fueron actualizados'
export const AreasList = () => {
    const { altaArea, areas } = useAreaForm()

    const areaForm = () => <AltaAreaForm isLoading={ altaArea.isLoading } />

    if ( areas.isLoading ) return <LinearProgress sx={ style.loading } color="success" />

    return (
        <Box sx={ style.container } >
            { altaArea.isSuccess && <AlertSnackBar severity='success' message={ messageSuccess } isOpen={ true } /> }
            <ListaArea areas={ areas.data } />
            <WithFormProvider children={ areaForm() } handleSubmit={ altaArea.mutateAsync } />
        </Box>
    )
}
