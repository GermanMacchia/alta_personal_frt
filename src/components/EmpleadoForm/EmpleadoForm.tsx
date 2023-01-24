import { FC, useEffect, useState } from 'react'
import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { Container } from "@mui/system"
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { BloqueText } from './BloqueText'
import { BloqueData } from './BloqueData'
import { DevCheckbox } from './DevCheckbox'

interface Props {
    isLoading: boolean
}

export const EmpleadoForm: FC<Props> = ( { isLoading } ) => {
    const { register, reset } = useFormContext()

    useEffect( () => {
        if ( !isLoading ) {
            reset()
        }
    }, [ isLoading ] )

    return (
        <Container sx={ styles.container } maxWidth="sm">
            <Box >
                <Typography sx={ styles.container.title }>
                    Alta Empleado
                </Typography>
                <Typography sx={ styles.container.subtitle }>
                    Introduzca los datos del empleado
                </Typography>
            </Box>
            <Box sx={ styles.container.form }>
                <input { ...register( 'formType' ) } type="hidden" value="AltaEmpleado" />
                <Box sx={ styles.container.form.__inputData }>
                    <BloqueText />
                    <BloqueData />
                </Box>
                <DevCheckbox />
                <Button variant="contained" type="submit" disableElevation sx={ styles.container.form.submit }>
                    { isLoading ? <CircularProgress /> : 'Enviar' }
                </Button>
            </Box>
        </Container >
    )
}
