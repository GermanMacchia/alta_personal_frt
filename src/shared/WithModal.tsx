import { FC, ReactNode } from 'react'
import { Modal, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '5px inset #51716d',
    background: 'green',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    color: 'black',
  },
}

interface Props {
  open: boolean
  children?: ReactNode
  handleClose?: () => void
}

export const WithModal: FC<Props> = ({ open, children, handleClose }) => {
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={styles.container}>
        {handleClose && (
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <IconButton onClick={handleClose}>
              <CloseIcon color='error' sx={{ fontSize: '35px' }} />
            </IconButton>
          </Box>
        )}
        {children}
      </Box>
    </Modal>
  )
}
