
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC, useState } from 'react'
import { WithModal } from './WithModal'
import { useAreaForm } from '../hooks/useAreaForm'
import { ConfirmDelete } from './ConfirmDelete'
import { AlertSnackBar } from './AlertSnackBar'
import { usePersonal } from '../hooks/usePersonal'

const styles = {
    margin: '0.4rem',
    '&:hover': {
        color: "#0e6983"
    }
}

interface Props {
    data: any
    isUser?: boolean
}

const areaDeleteSuccessMsg = "Area eliminada"
const empleadoDeleteSuccessMsg = "Empleado borrado"
export const Botonera: FC<Props> = ( { isUser = false, data } ) => {

    const [ isEditOpen, setIsEditOpen ] = useState( false )
    const [ isEditAreaOpen, setIsEditAreaOpen ] = useState( false )
    const [ isInfoOpen, setIsInfoOpen ] = useState( false )
    const [ isConfirmDeleteAreaOpen, setIsConfirmDeleteAreaOpen ] = useState( false )
    const [ isConfirmDeleteOpen, setIsConfirmDeleteOpen ] = useState( false )
    const { areaDelete } = useAreaForm()
    const { empleadoDelete } = usePersonal()


    return (
        <>
            { empleadoDelete.isError && <AlertSnackBar isOpen={ true } severity='error' message={ ( empleadoDelete.error as any ).response.data } /> }
            { empleadoDelete.isSuccess && <AlertSnackBar isOpen={ true } severity='success' message={ empleadoDeleteSuccessMsg } /> }
            { areaDelete.isError && <AlertSnackBar isOpen={ true } severity='error' message={ ( areaDelete.error as any ).response.data } /> }
            { areaDelete.isSuccess && <AlertSnackBar isOpen={ true } severity='success' message={ areaDeleteSuccessMsg } /> }
            { <WithModal open={ isEditAreaOpen } handleClose={ () => setIsEditAreaOpen( !isEditAreaOpen ) } children={ <h1>EDIT Area</h1> } /> }
            { <WithModal open={ isInfoOpen } handleClose={ () => setIsInfoOpen( !isInfoOpen ) } children={ <h1>INFO User</h1> } /> }
            { <WithModal open={ isEditOpen } handleClose={ () => setIsEditOpen( !isEditOpen ) } children={ <h1>EDIT User</h1> } /> }
            { <ConfirmDelete
                handleOpen={ () => setIsConfirmDeleteAreaOpen( !isConfirmDeleteAreaOpen ) }
                isOpen={ isConfirmDeleteAreaOpen }
                deleteHandler={ areaDelete }
                data={ data } />
            }
            {
                <ConfirmDelete
                    handleOpen={ () => setIsConfirmDeleteOpen( !isConfirmDeleteOpen ) }
                    isOpen={ isConfirmDeleteOpen }
                    deleteHandler={ empleadoDelete }
                    data={ data } />
            }
            {
                isUser &&
                <IconButton aria-label="file" onClick={ () => setIsInfoOpen( !isInfoOpen ) } >
                    <BadgeIcon sx={ styles } />
                </IconButton>
            }
            <IconButton aria-label="edit"
                onClick={
                    isUser
                        ? () => setIsEditOpen( !isEditOpen )
                        : () => setIsEditAreaOpen( !isEditAreaOpen )
                }
            >
                <BorderColorIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="remove"
                onClick={
                    isUser
                        ? () => setIsConfirmDeleteOpen( !isConfirmDeleteOpen )
                        : () => setIsConfirmDeleteAreaOpen( !isConfirmDeleteAreaOpen )
                }
            >
                {
                    isUser
                        ? <PersonRemoveIcon sx={ styles } />
                        : <DeleteIcon sx={ styles } />
                }
            </IconButton>
        </>
    )
}
