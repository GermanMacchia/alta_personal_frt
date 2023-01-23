import { Label } from './styles'
import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { Container } from "@mui/system"
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { FC, useEffect } from 'react'
import { Input } from '../../shared'
import { AreaInput } from './AreaInput'


interface Props {
    isLoading: boolean
}

export const AreaForm: FC<Props> = ( { isLoading } ) => {
    const { reset } = useFormContext()

    useEffect( () => {
        if ( !isLoading ) {
            reset()
        }
    }, [ isLoading ] )

    return (
        <Container sx={ styles.container } maxWidth="sm">
            <Box >
                <Typography sx={ styles.title }>
                    Alta Área
                </Typography>
                <Typography sx={ styles.subtitle }>
                    Define el nombre de una nueva área en que pueda desempeñarse un empleado
                </Typography>
            </Box>
            <AreaInput />
            <Button variant="contained" type="submit" disableElevation sx={ styles.button }>
                { isLoading ? <CircularProgress /> : 'Enviar' }
            </Button>
        </Container >
    )
}
