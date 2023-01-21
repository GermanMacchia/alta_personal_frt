
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC } from 'react'

const styles = {
    '&:hover': {
        color: "#0e6983"
    }
}

interface Props {
    isData?: boolean
}

export const Botonera: FC<Props> = ( { isData } ) => {
    return (
        <>
            <IconButton aria-label="file" >
                <BadgeIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="edit" >
                <BorderColorIcon sx={ styles } />
            </IconButton>
            <IconButton aria-label="remove"  >
                {
                    isData
                        ? <DeleteIcon sx={ styles } />
                        : <PersonRemoveIcon sx={ styles } />
                }
            </IconButton>
        </>
    )
}
