import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    CircularProgress
} from '@mui/material'
import { FC } from 'react'

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