import { styles } from './styles'
import { FormControlLabel, FormGroup, FormLabel, Switch, Box, Button } from '@mui/material'
import { FormControl } from '@mui/material'
import { BloqueText } from '../EmpleadoForm'
import { useEmpleadoList } from '../../hooks'

export const CardEditActive = () => {
    const { isActive, handleActiveCheck } = useEmpleadoList()

    return (
        <Box sx={ styles.modal.container } >
            <Box sx={ styles.modal.container.form } >
                <Box>
                    <BloqueText nombreActivo={ isActive.nombre } apellidoActivo={ isActive.apellido } descripcionActiva={ isActive.descripcion } />
                </Box>
                <Box>
                </Box>
                <Box sx={ styles.modal.container.form.__switch }>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend">EDIT</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={ isActive.nombre } onChange={ handleActiveCheck } name="nombre" />
                                }
                                label="Nombre"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={ isActive.apellido } onChange={ handleActiveCheck } name="apellido" />
                                }
                                label="Apellido"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={ isActive.descripcion } onChange={ handleActiveCheck } name="descripcion" />
                                }
                                label="Descripción"
                            />
                        </FormGroup>
                    </FormControl>
                </Box >
            </Box>
            <Button sx={ styles.modal.container.submit } variant='contained' type="submit">Enviar</Button>
        </Box>
    )
}
