import { FC } from 'react'
import { styles } from './styles'
import { Empleado, Area } from '../../interfaces'
import { Box, Typography, CardMedia, CardContent, Card } from '@mui/material'
import { capitalize } from '../../helpers'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import IconButton from '@mui/material/IconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import userImage from '../../assets/user-circle.png'

interface Props {
	empleado: Empleado
	areas: Area[]
	handleClose: () => void
}

export const CardInfo: FC<Props> = ({ empleado, handleClose, areas }) => {
	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'end' }}>
				<IconButton onClick={handleClose}>
					<CloseIcon color='error' sx={{ fontSize: '25px' }} />
				</IconButton>
			</Box>
			<Card sx={styles.container}>
				<Box sx={styles.container.column}>
					<CardMedia
						component='img'
						image={userImage}
						alt='user circle'
						sx={styles.container.image}
					/>
					<Box sx={{ margin: '1rem' }}>
						<Typography
							sx={{ fontSize: '20px', fontWeight: '700' }}
							gutterBottom
							variant='h1'>
							{capitalize(empleado.nombre) + ' ' + capitalize(empleado.apellido)}
						</Typography>
						<br />
						<Typography sx={styles.container.font} variant='body1'>
							DNI
						</Typography>
						<Typography gutterBottom variant='caption' sx={styles.container.section}>
							{empleado.dni}
						</Typography>
						<br />
						<br />
						<Typography variant='body1' sx={styles.container.font}>
							FNac
						</Typography>
						<Typography gutterBottom variant='caption' sx={styles.container.section}>
							{new Date(empleado.fechaNac).toLocaleDateString()}
						</Typography>
						<br />
						<br />
						<Typography variant='body1' sx={styles.container.font}>
							Developer
						</Typography>
						<Typography gutterBottom variant='caption' sx={styles.container.section}>
							{empleado.esDesarrollador ? (
								<CheckIcon color='success' />
							) : (
								<NotInterestedIcon color='error' />
							)}
						</Typography>
					</Box>
				</Box>
				<Box sx={{ ...styles.container.column, ...styles.container.right }}>
					<CardContent>
						<Typography variant='body1' sx={styles.container.font}>
							Descripción
						</Typography>
						<Typography gutterBottom variant='caption' sx={styles.container.section}>
							{empleado.descripcion}
						</Typography>
						<br />
						<br />
						<Typography variant='body1' sx={styles.container.font}>
							Área
						</Typography>
						<Typography gutterBottom variant='caption' sx={styles.container.section}>
							{areas
								.find((area: Area) => area._id === empleado.area)
								?.nombre.toUpperCase()}
						</Typography>
						<br />
						<br />
						<Typography variant='body1' sx={styles.container.font}>
							Otros
						</Typography>
						<Typography
							align='left'
							gutterBottom
							maxHeight='10px'
							variant='caption'
							sx={styles.container.section}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores
							necessitatibus, impedit
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</>
	)
}
