import { Snackbar, Alert, AlertColor } from '@mui/material'
import { FC, useState } from 'react'
import Button from '@mui/material/Button'

interface Props {
    isOpen: boolean,
    severity: AlertColor
    message: string
}

export const AlertSnackBar: FC<Props> = ( { isOpen, severity, message } ) => {
    const [ open, setOpen ] = useState( isOpen )

    const handleClick = () => {
        setOpen( true )
    }

    const handleClose = ( event: React.SyntheticEvent | Event, reason?: string ) => {
        if ( reason === 'clickaway' ) {
            return
        }
        setOpen( false )
    }

    return (
        <>
            <Snackbar
                open={ open }
                onClick={ handleClose }
                autoHideDuration={ 1500 }
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'right',
                } }
            >
                <Alert severity={ severity }>{ message }</Alert>
            </Snackbar ></>
    )
}

