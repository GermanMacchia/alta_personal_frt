import { SnackbarCloseReason } from '@mui/base'
import { Alert, Snackbar } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'


const mensajeError = 'Error en alta'
const ErrorSnackBar = ( handleClose: any, open: boolean, errors: any ) => {
    return (
        <Snackbar
            open={ open }
            autoHideDuration={ 5000 }
            onClose={ handleClose }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'center',
            } }
        >
            <Alert severity="error">{ errors[ 'custom' ]?.message }</Alert>
        </Snackbar>
    )
}

interface Props {
    children: React.ReactNode,
    handleSubmit: ( data: any ) => Promise<unknown>,
}

export const WithFormProvider: FC<Props> = ( { children, handleSubmit } ) => {
    const methods = useForm()
    const { errors } = methods.formState
    const { clearErrors, setError } = methods
    const [ open, setOpen ] = useState( false )

    const handleClose = ( _event: any, reason: SnackbarCloseReason ) => {
        if ( reason === 'clickaway' ) {
            return
        }
        setOpen( false )
        clearErrors( 'custom' )
    }

    const onSubmit = async ( data: any ) => {
        try {
            await handleSubmit( data )
        } catch ( error ) {
            console.error( error )
            setError( 'custom', { type: 'validate', message: mensajeError } )
        }
    }

    useEffect( () => {
        if ( errors[ 'custom' ] ) {
            setOpen( true )
        }
    }, [ errors[ 'custom' ] ] )

    return (
        <FormProvider { ...methods }>
            { errors[ 'custom' ] && ErrorSnackBar( handleClose, open, errors ) }
            <form onSubmit={ methods.handleSubmit( onSubmit ) }>
                { children }
            </form>
        </FormProvider>
    )
}
