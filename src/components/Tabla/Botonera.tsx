
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BadgeIcon from '@mui/icons-material/Badge'

export const Botonera = () => {
    return (
        <>
            <IconButton aria-label="file" >
                <BadgeIcon />
            </IconButton>
            <IconButton aria-label="edit" >
                <BorderColorIcon />
            </IconButton>
            <IconButton aria-label="remove"  >
                <PersonRemoveIcon />
            </IconButton>
        </>
    )
}
