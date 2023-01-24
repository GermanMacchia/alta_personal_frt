import { FC } from 'react'
<<<<<<< HEAD
=======
import { styles } from './styles'
>>>>>>> main
import { WithFormProvider } from '../../shared/WithFormProvider'
import { CardEdit } from './CardEdit'
import { Box, Button } from '@mui/material'
import { useEmpleadoList } from '../../hooks'

interface Props {
    handleClose: () => void,
    empleado: any
}

export const CardEditForm: FC<Props> = ( { handleClose, empleado } ) => {
    const { empleadoEdit } = useEmpleadoList()

    const card = () => <CardEdit data={ empleado } />

    return (
        <Box sx={ styles.modal }>
            <WithFormProvider children={ card() } handleSubmit={ empleadoEdit.mutateAsync } />
            <Box sx={ styles.modal.cerrar }>
                <Button variant='outlined' color='success' onClick={ handleClose }>Cerrar</Button>
            </Box>
        </Box>
    )
}
