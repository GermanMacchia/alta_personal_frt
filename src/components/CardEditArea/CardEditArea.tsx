import { FC, useState, useEffect } from 'react'
<<<<<<< HEAD
import { FormControl } from '@mui/material/'
import { Box, FormLabel, FormControlLabel, Switch } from '@mui/material'
import { styles } from './styles'
import Button from '@mui/material/Button'
=======
>>>>>>> main
import { useFormContext } from 'react-hook-form'
import { styles } from './styles'
import { Box, FormLabel, FormControlLabel, Switch, CircularProgress, Button, FormControl } from '@mui/material'
import { AreaInput } from '../AreaForm'
import { Area } from '../../interfaces'

interface Props {
    area: Area
    isLoading: boolean
}

export const CardEditArea: FC<Props> = ( { area, isLoading } ) => {
    const [ isActive, setIsActive ] = useState( true )
    const { setValue } = useFormContext()

    useEffect( () => {
        setValue( '_id', area._id )
        setValue( 'nombre', area.nombre.toUpperCase() )
    }, [ area ] )

    return (
        <Box sx={ styles.modal.container }>
            <Box sx={ styles.modal.container.flex }>
                <Box >
                    <AreaInput active={ isActive } />
                </Box >
                <Box sx={ styles.modal.container.flex.switch }>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={ styles.modal.container.flex.switch.tag } color='warning'>EDITAR</FormLabel>
                        <FormControlLabel
                            control={
                                <Switch checked={ isActive } onChange={ () => setIsActive( !isActive ) } name="nombre" />
                            }
                            label="Nombre"
                        />
                    </FormControl>
                </Box>
            </Box>
            <Button sx={ styles.modal.container.submit } variant='contained' type="submit">
                { isLoading ? <CircularProgress /> : 'Enviar' }
            </Button>
        </Box>
    )
}
