import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from '@mui/material'
import { FC } from 'react'

interface Props {
  handleOpen: () => void
  isOpen: boolean
  deleteHandler: any
  data: any
}

export const ConfirmDelete: FC<Props> = ({
  isOpen,
  handleOpen,
  deleteHandler,
  data,
}) => {
  const handleConfirm = async () => {
    await deleteHandler.mutateAsync(data._id).finally(() => handleOpen())
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleOpen}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{'Borrar datos'}</DialogTitle>
      <DialogContent sx={{ margin: '0 auto' }}>
        {deleteHandler.isLoading ? (
          <CircularProgress />
        ) : (
          <DialogContentText id='alert-dialog-description'>
            Seguro deseas borrar {data.nombre?.toUpperCase()}{' '}
            {data.apellido?.toUpperCase()}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions
        sx={{ display: 'flex', justifyContent: 'center', padding: 2.5 }}>
        <Button
          variant='contained'
          color='error'
          disabled={deleteHandler.isLoading}
          onClick={handleOpen}>
          Cancelar
        </Button>
        <Button
          variant='contained'
          color='success'
          disabled={deleteHandler.isLoading}
          onClick={handleConfirm}
          autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
