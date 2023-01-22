import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { Area, Empleado } from '../interfaces/'
import { CircularProgress } from '@mui/material'


interface Props {
    handleOpen: () => void
    isOpen: boolean
    deleteHandler: any
    data: any
}

export const ConfirmDelete: FC<Props> = ( { isOpen, handleOpen, deleteHandler, data } ) => {

    const handleConfirm = async () => {
        await deleteHandler.mutateAsync( data._id )
            .finally( () => handleOpen() )
    }

    return (
        <div>
            <Dialog
                open={ isOpen }
                onClose={ handleOpen }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    { 'Borrar datos' }
                </DialogTitle>
                <DialogContent sx={ { margin: '0 auto' } }>
                    { deleteHandler.isLoading
                        ? <CircularProgress />
                        : <DialogContentText id="alert-dialog-description">
                            Seguro deseas borrar { data.nombre.toUpperCase() }  { data.apellido?.toUpperCase() }
                        </DialogContentText>
                    }
                </DialogContent>
                <DialogActions>
                    <Button disabled={ deleteHandler.isLoading } onClick={ handleOpen }>Cancelar</Button>
                    <Button disabled={ deleteHandler.isLoading } onClick={ handleConfirm } autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}