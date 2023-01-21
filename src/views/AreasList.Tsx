import { WithFormProvider } from '../shared'
import { AltaAreaForm } from '../components/AltaAreaForm/AltaAreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { Box, LinearProgress } from '@mui/material'
import { ListaArea } from "../components/ListaArea"
import { TransitionAlert } from '../shared/TransitionAlert'

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

export const AreasList = () => {
    const { altaArea, areas } = useAreaForm()

    const areaForm = () => <AltaAreaForm isLoading={ altaArea.isLoading } />

    if ( areas.isLoading ) return <LinearProgress sx={ style.loading } color="success" />

    return (
        <Box sx={ style.container } >
            { altaArea.isSuccess && <TransitionAlert status='success' /> }
            <ListaArea areas={ areas.data } />
            <WithFormProvider children={ areaForm() } handleSubmit={ altaArea.mutateAsync } />
        </Box>
    )
}
