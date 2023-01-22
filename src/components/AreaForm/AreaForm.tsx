import { Label } from './styles'
import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { Container } from "@mui/system"
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { FC, useEffect } from 'react'
import { Input } from '../../shared'


interface Props {
    isLoading: boolean
}

export const AltaAreaForm: FC<Props> = ( { isLoading } ) => {
    const { register, reset } = useFormContext()

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
            <Box sx={ styles.form }>
                <input { ...register( 'formType' ) } type="hidden" value="AltaArea" />
                <Label>
                    <Box sx={ styles.tag }>
                        <Typography fontWeight={ 400 } display={ 'inline-block' }>
                            Nombre &nbsp;
                        </Typography>
                        <Typography fontWeight={ 400 } color={ 'primary.main' } display={ 'inline-block' }>
                            *
                        </Typography>
                    </Box>
                    <Input
                        name="nombre"
                        rules={ {
                            required: 'Nombre es requerido',
                            pattern: {
                                value: /\w/g,
                                message: 'Solo se permiten letras',
                            },
                        } }
                        placeholder="Administración"
                        type="text"
                    />
                </Label>

                <Button variant="contained" type="submit" disableElevation sx={ styles.button }>
                    { isLoading ? <CircularProgress /> : 'Enviar' }
                </Button>
            </Box>
        </Container >
    )
}
