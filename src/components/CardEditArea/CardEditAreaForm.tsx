import { FC } from "react"
import { styles } from './styles'
import { WithFormProvider } from '../../shared/WithFormProvider'
import { Box, Button } from '@mui/material'
import { CardEditArea } from "./CardEditArea"
import { useAreaForm } from '../../hooks/useAreaForm'

interface Props {
    handleClose: () => void,
    area: any
}

export const CardEditAreaForm: FC<Props> = ( { handleClose, area } ) => {
    const { areaEdit } = useAreaForm()

    const card = () => <CardEditArea area={ area } isLoading={ areaEdit.isLoading } />

    return (
        <Box sx={ styles.modal }>
            <WithFormProvider children={ card() } handleSubmit={ areaEdit.mutateAsync } />
            <Box sx={ styles.modal.cerrar }>
                <Button variant='outlined' color='success' onClick={ handleClose }>Cerrar</Button>
            </Box>
        </Box>
    )
}
