import { FormControl } from '@mui/material/'
import { Box, FormLabel, FormControlLabel, Switch } from '@mui/material'
import { styles } from './styles'
import { FC, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { useFormContext } from 'react-hook-form'
import { AreaInput } from '../AreaForm/AreaInput'


interface Props {
    area: any
}

export const CardEditArea: FC<Props> = ( { area } ) => {
    const [ state, setState ] = useState( true )
    const { setValue } = useFormContext()

    useEffect( () => {
        setValue( '_id', area._id )
        setValue( 'nombre', area.nombre.toUpperCase() )
    }, [ area ] )

    return (
        <Box sx={ styles.modal }>
            <Box sx={ { ...styles.containter } }>
                <Box sx={ { display: 'flex', justifyContent: 'space-between', width: '40vw' } }>
                    <Box >
                        <AreaInput active={ state } />
                    </Box >
                    <Box sx={ styles.containter.switchs }>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel component="legend">EDIT</FormLabel>
                            <FormControlLabel
                                control={
                                    <Switch checked={ state } onChange={ () => setState( !state ) } name="nombre" />
                                }
                                label="Nombre"
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Button sx={ { width: '100%', marginTop: '0.5rem' } } variant='contained' type="submit">Enviar</Button>
            </Box>
        </Box >
    )
}
