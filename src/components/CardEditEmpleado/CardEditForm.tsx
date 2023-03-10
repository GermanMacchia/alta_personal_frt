import { FC } from 'react'
import { styles } from './styles'
import { WithFormProvider } from '../../shared'
import { CardEdit } from './CardEdit'
import { Box, IconButton } from '@mui/material'
import { useEmpleadoList } from '../../hooks'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  handleClose: () => void
  empleado: any
}

export const CardEditForm: FC<Props> = ({ handleClose, empleado }) => {
  const { empleadoEdit } = useEmpleadoList()

  const card = () => (
    <CardEdit data={empleado} isLoading={empleadoEdit.isLoading} />
  )

  return (
    <Box sx={styles.modal}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton onClick={handleClose}>
          <CloseIcon color='error' sx={{ fontSize: '25px' }} />
        </IconButton>
      </Box>
      <WithFormProvider
        children={card()}
        handleSubmit={empleadoEdit.mutateAsync}
      />
    </Box>
  )
}
