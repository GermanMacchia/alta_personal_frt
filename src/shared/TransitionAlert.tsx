import Box from '@mui/material/Box'
import Alert, { AlertColor } from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
import { FC, useState } from 'react'

export const TransitionAlert: FC<{ status: AlertColor }> = ( { status } ) => {

    const [ open, setOpen ] = useState( true )
    let message, severity: AlertColor

    switch ( status ) {
        case 'success':
            message = 'La datos fueron actualizados'
            severity = 'success'
            break
        case 'error':
            message = 'Algo salió mal'
            severity = 'error'
            break
        default:
            message: ""
            severity = 'info'
    }

    return (
        <Box sx={ { width: '20%', position: 'absolute', right: 20 } }>
            <Collapse in={ open }>
                <Alert
                    severity={ severity }
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={ () => {
                                setOpen( false )
                            } }
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={ { mb: 2 } }
                >
                    { message }
                </Alert>
            </Collapse>
        </Box>
    )
}