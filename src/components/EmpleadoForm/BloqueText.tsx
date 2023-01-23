import { Input } from '../../shared'
import { Label, styles } from './styles'
import { Box, Typography } from '@mui/material'


export const BloqueText = () => {
    return (
        <Box sx={ styles.form }>
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
                        required: 'requerido',
                        pattern: {
                            value: /\w/g,
                            message: 'Solo se permiten letras',
                        },
                    } }
                    placeholder="Juan"
                    type="text"
                />
            </Label>
            <Label>
                <Box sx={ styles.tag }>
                    <Typography fontWeight={ 400 } display={ 'inline-block' }>
                        Apellido &nbsp;
                    </Typography>
                    <Typography fontWeight={ 400 } color={ 'primary.main' } display={ 'inline-block' }>
                        *
                    </Typography>
                </Box>
                <Input
                    name="apellido"
                    rules={ {
                        required: 'requerido',
                        pattern: {
                            value: /\w/g,
                            message: 'Solo se permiten letras',
                        },
                    } }
                    placeholder="Gómez"
                    type="text"
                />
            </Label>
            <Label>
                <Box sx={ styles.tag }>
                    <Typography fontWeight={ 400 } display={ 'inline-block' }>
                        Descripción &nbsp;
                    </Typography>
                    <Typography fontWeight={ 400 } color={ 'primary.main' } display={ 'inline-block' }>
                        *
                    </Typography>
                </Box>
                <Input
                    name="descripcion"
                    rules={ {
                        required: 'requerido',
                        pattern: {
                            value: /\w/g,
                            message: 'Solo se permiten letras',
                        },
                    } }
                    placeholder="Desarrollo Cloud"
                    type="text"
                />
            </Label>
        </Box>
    )
}