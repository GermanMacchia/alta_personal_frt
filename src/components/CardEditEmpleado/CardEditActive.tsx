
import { FormControlLabel, FormGroup, FormLabel, Switch, Box, Button } from '@mui/material'
import { FormControl } from '@mui/material/'
import { useEmpleadoEdit } from '../../hooks/useEmpleadoEdit'
import { styles } from './styles'
import { BloqueText } from '../EmpleadoForm/BloqueText'

export const CardEditActive = () => {
    const { state, handleChange, } = useEmpleadoEdit()

    return (
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
            <Box sx={ { display: 'flex' } } >
                <Box>
                    <BloqueText nombreActivo={ state.nombre } apellidoActivo={ state.apellido } descripcionActiva={ state.descripcion } />
                </Box>
                <Box>
                </Box>
                <Box sx={ styles.containter.switchs }>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend">EDIT</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={ state.nombre } onChange={ handleChange } name="nombre" />
                                }
                                label="Nombre"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={ state.apellido } onChange={ handleChange } name="apellido" />
                                }
                                label="Apellido"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={ state.descripcion } onChange={ handleChange } name="descripcion" />
                                }
                                label="Descripción"
                            />
                            {/* <FormControlLabel
                            control={
                                <Switch checked={ state.dni } onChange={ handleChange } name="dni" />
                            }
                            label="Dni"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={ state.fechaNac } onChange={ handleChange } name="fechaNac" />
                            }
                            label="FNac"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={ state.area } onChange={ handleChange } name="area" />
                            }
                            label="Área"
                        />
                        <FormControlLabel
                            control={
                                <Switch checked={ state.esDesarrollador } onChange={ handleChange } name="esDesarrollador" />
                            }
                            label="Es Dev"
                        /> */}

                        </FormGroup>
                    </FormControl>
                </Box >
            </Box>
            <Button variant='contained' type="submit">Enviar</Button>
        </Box>
    )
}
