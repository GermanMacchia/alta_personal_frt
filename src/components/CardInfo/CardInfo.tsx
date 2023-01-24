import { FC } from 'react'
import { styles } from './styles'
import { Empleado, Area } from '../../interfaces'
import { Box, Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material'
import { useEmpleadoList } from '../../hooks'
import { capitalize } from '../../helpers'

interface Props {
    empleado: Empleado
    areas: Area[]
    handleClose: () => void
}

export const CardInfo: FC<Props> = ( { empleado, handleClose, areas } ) => {

    return (
        <Card sx={ styles.container }>
            <Box sx={ styles.container.column }>
                <CardMedia
                    component="img"
                    image="/src/assets/user-circle.png"
                    alt="user circle"
                    sx={ styles.container.image }
                />
                <Box sx={ { margin: '1rem' } }>
                    <Typography gutterBottom variant="h5" component="div">
                        { capitalize( empleado.nombre ) + ' ' + capitalize( empleado.apellido ) }
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>DNI:</b> { ' ' }
                        { empleado.dni }
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>FNac:</b>{ ' ' }
                        { new Date( empleado.fechaNac ).toLocaleDateString() }
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>Es Desarrollador:</b>{ ' ' }
                        { empleado.esDesarrollador ? 'Si' : 'No' }
                    </Typography>
                </Box>
            </Box>
            <Box sx={ { ...styles.container.column, ...styles.container.right } }>
                <CardContent>
                    <Typography gutterBottom variant="body2" >
                        <p><b>Descripción:</b></p>
                        { empleado.descripcion }
                    </Typography>
                    <Typography gutterBottom variant="body2" >
                        <p><b>Área:</b></p>
                        { areas.find( ( area: Area ) => area._id === empleado.area )?.nombre.toUpperCase() }
                    </Typography>
                    <Typography gutterBottom maxHeight='10px' variant="body2" >
                        <p><b>Otros:</b></p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores necessitatibus, impedit
                    </Typography>
                </CardContent>
                <CardActions sx={ styles.container.actions }>
                    <Button variant='outlined' color='success' onClick={ handleClose } size="small">Cerrar</Button>
                </CardActions>
            </Box>
        </Card >
    )
}