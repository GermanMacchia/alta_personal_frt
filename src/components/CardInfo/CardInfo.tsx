
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Empleado, Area } from '../../interfaces'
import { FC } from 'react'
import { styles } from './styles'
import { primeraMayuscula } from '../../helpers/primeraMayuscula'
import { Box } from '@mui/material'
import { usePersonal } from '../../hooks/usePersonal'


interface Props {
    empleado: Empleado
    handleClose: () => void
}

export const CardInfo: FC<Props> = ( { empleado, handleClose } ) => {

    const { areas } = usePersonal()

    return (
        <Card sx={ styles.container }>
            <Box sx={ styles.container.column }>
                <CardMedia

                    component="img"
                    image="/src/assets/User_Circle.png"
                    alt="user circle"
                    sx={ styles.container.image }
                />
                <Box sx={ { margin: '1rem' } }>
                    <Typography gutterBottom variant="h5" component="div">
                        { primeraMayuscula( empleado.nombre ) + ' ' + primeraMayuscula( empleado.apellido ) }
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
                        { areas.data.find( ( area: Area ) => area._id === empleado.area ).nombre.toUpperCase() }
                    </Typography>
                    <Typography gutterBottom maxHeight='10px' variant="body2" >
                        <p><b>Otros:</b></p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores necessitatibus, impedit
                    </Typography>
                </CardContent>
                <CardActions sx={ styles.container.actions }>
                    <Button variant='contained' color='success' onClick={ handleClose } size="small">Cerrar</Button>
                </CardActions>
            </Box>
        </Card >
    )
}