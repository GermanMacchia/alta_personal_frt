
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
export const Botonera: FC<Props> = ( { isUser, data } ) => {

    const [ isEditOpen, setIsEditOpen ] = useState( false )
    const [ isInfoOpen, setIsInfoOpen ] = useState( false )
    const [ isConfirmDeleteOpen, setIsConfirmDeleteOpen ] = useState( false )
    const { areaDelete } = useAreaForm()

    const handleOpenEdit = () => {
        setIsEditOpen( !isEditOpen )
    }

    const handleOpenInfo = () => {
        setIsInfoOpen( !isInfoOpen )
    }

    const handleConfirmDelete = () => {
        setIsConfirmDeleteOpen( !isConfirmDeleteOpen )
    }

    return (
        <>
            { areaDelete.isError && <AlertSnackBar isOpen={ true } severity='error' message={ ( areaDelete.error as any ).response.data } /> }
            { areaDelete.isSuccess && <AlertSnackBar isOpen={ true } severity='success' message={ areaDeleteSuccessMsg } /> }
            { isEditOpen && <WithModal open={ isEditOpen } handleClose={ handleOpenEdit } children={ <h1>EDIT</h1> } /> }
            { isInfoOpen && <WithModal open={ isInfoOpen } handleClose={ handleOpenInfo } children={ <h1>INFO</h1> } /> }
            {
                isConfirmDeleteOpen
                && <ConfirmDelete
                    handleOpen={ handleConfirmDelete }
                    isOpen={ isConfirmDeleteOpen }
                    deleteHandler={ areaDelete }
                    data={ data } />
            }
            {
                isUser &&
                <IconButton aria-label="file" onClick={ handleOpenInfo } >
                    <BadgeIcon sx={ styles } />
                </IconButton>
            }
            <IconButton aria-label="edit" onClick={ handleOpenEdit } >
                <BorderColorIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="remove" onClick={ handleConfirmDelete }>
                {
                    isUser
                        ? <PersonRemoveIcon sx={ styles } />
                        : <DeleteIcon sx={ styles } />
                }
            </IconButton>
        </>
    )
}
