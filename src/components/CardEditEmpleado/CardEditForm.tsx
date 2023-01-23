import { FC } from 'react'
import { WithFormProvider } from '../../shared/WithFormProvider'
import { CardEdit } from './CardEdit'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { usePersonal } from '../../hooks/usePersonal'
import { styles } from './styles'

interface Props {
    handleClose: () => void,
    empleado: any
}

export const CardEditForm: FC<Props> = ( { handleClose, empleado } ) => {
    const { empleadoEdit } = usePersonal()

    const card = () => <CardEdit data={ empleado } />

    return (
        <Box sx={ styles.modal }>
            <WithFormProvider children={ card() } handleSubmit={ empleadoEdit.mutateAsync } />
            <Box sx={ styles.modal.buttonModal }>
                <Button variant='outlined' color='success' onClick={ handleClose }>Cerrar</Button>
            </Box>
        </Box>
    )
}
