import { FC } from 'react'
import { styles } from './styles'
import { WithFormProvider } from '../../shared'
import { Box, IconButton } from '@mui/material'
import { CardEditArea } from './CardEditArea'
import { useAreaForm } from '../../hooks'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  handleClose: () => void
  area: any
}

export const CardEditAreaForm: FC<Props> = ({ handleClose, area }) => {
  const { areaEdit } = useAreaForm()

  const card = () => <CardEditArea area={area} isLoading={areaEdit.isLoading} />

  return (
    <Box sx={styles.modal}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton onClick={handleClose}>
          <CloseIcon color='error' sx={{ fontSize: '35px' }} />
        </IconButton>
      </Box>
      <WithFormProvider children={card()} handleSubmit={areaEdit.mutateAsync} />
    </Box>
  )
}
