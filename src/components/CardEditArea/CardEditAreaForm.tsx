import { FC } from "react"
import { WithFormProvider } from '../../shared/WithFormProvider'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { styles } from './styles'
import { CardEditArea } from "./CardEditArea"
import { useAreaForm } from '../../hooks/useAreaForm'


interface Props {
    handleClose: () => void,
    area: any
}

export const CardEditAreaForm: FC<Props> = ( { handleClose, area } ) => {
    const { areaEdit } = useAreaForm()

    const card = () => <CardEditArea area={ area } />

    return (
        <Box sx={ styles.modal }>
            <WithFormProvider children={ card() } handleSubmit={ areaEdit.mutateAsync } />
            <Box sx={ styles.modal.buttonModal }>
                <Button variant='outlined' color='success' onClick={ handleClose }>Cerrar</Button>
            </Box>
        </Box>
    )
}
