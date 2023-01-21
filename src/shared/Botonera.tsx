
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC, useState } from 'react'
import { WithModal } from './WithModal'

const styles = {
    margin: '0.9rem',
    '&:hover': {
        color: "#0e6983"
    }
}

interface Props {
    data: any
    isArea?: boolean
}

export const Botonera: FC<Props> = ( { isArea, data } ) => {

    const [ isEditOpen, setIsEditOpen ] = useState( false )
    const [ isInfoOpen, setIsInfoOpen ] = useState( false )

    const handleOpenEdit = () => {
        setIsEditOpen( !isEditOpen )
    }

    const handleOpenInfo = () => {
        setIsInfoOpen( !isInfoOpen )
    }

    return (
        <>
            { isEditOpen && <WithModal open={ isEditOpen } handleClose={ handleOpenEdit } children={ <h1>EDIT</h1> } /> }
            { isInfoOpen && <WithModal open={ isInfoOpen } handleClose={ handleOpenInfo } children={ <h1>INFO</h1> } /> }
            <IconButton aria-label="file" onClick={ handleOpenInfo } >
                <BadgeIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="edit" onClick={ handleOpenEdit } >
                <BorderColorIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="remove">
                {
                    isArea
                        ? <DeleteIcon sx={ styles } />
                        : <PersonRemoveIcon sx={ styles } />
                }
            </IconButton>
        </>
    )
}
