import { FC } from 'react'
import { styles } from './styles'
import { Empleado, Area } from '../../interfaces'
import {
	Box,
	Typography,
	Button,
	CardMedia,
	CardContent,
	CardActions,
	Card,
} from '@mui/material'
import { capitalize } from '../../helpers'
<<<<<<< HEAD
import userImage from '../../assets/user-circle.png'
=======
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import IconButton from '@mui/material/IconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close'
>>>>>>> main

interface Props {
	empleado: Empleado
	areas: Area[]
	handleClose: () => void
}

export const CardInfo: FC<Props> = ({ empleado, handleClose, areas }) => {
	return (
<<<<<<< HEAD
		<Card sx={styles.container}>
			<Box sx={styles.container.column}>
				<CardMedia
					component='img'
					image={userImage}
					alt='user circle'
					sx={styles.container.image}
				/>
				<Box sx={{ margin: '1rem' }}>
					<Typography gutterBottom variant='h5' component='div'>
						{capitalize(empleado.nombre) + ' ' + capitalize(empleado.apellido)}
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						<b>DNI:</b> {empleado.dni}
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						<b>FNac:</b> {new Date(empleado.fechaNac).toLocaleDateString()}
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						<b>Es Desarrollador:</b> {empleado.esDesarrollador ? 'Si' : 'No'}
					</Typography>
				</Box>
			</Box>
			<Box sx={{ ...styles.container.column, ...styles.container.right }}>
				<CardContent>
					<Typography gutterBottom variant='body2'>
						<p>
							<b>Descripción:</b>
						</p>
						{empleado.descripcion}
					</Typography>
					<Typography gutterBottom variant='body2'>
						<p>
							<b>Área:</b>
						</p>
						{areas
							.find((area: Area) => area._id === empleado.area)
							?.nombre.toUpperCase()}
					</Typography>
					<Typography gutterBottom maxHeight='10px' variant='body2'>
						<p>
							<b>Otros:</b>
						</p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores
						necessitatibus, impedit
					</Typography>
				</CardContent>
				<CardActions sx={styles.container.actions}>
					<Button
						variant='outlined'
						color='success'
						onClick={handleClose}
						size='small'>
						Cerrar
					</Button>
				</CardActions>
=======
		<>
			<Box sx={{ display: 'flex', justifyContent: 'end' }}>
				<IconButton onClick={handleClose}>
					<CloseIcon color='error' sx={{ fontSize: '35px' }} />
				</IconButton>
>>>>>>> main
			</Box>
			<Card sx={styles.container}>
				<Box sx={styles.container.column}>
					<CardMedia
						component='img'
						image='/src/assets/user-circle.png'
						alt='user circle'
						sx={styles.container.image}
					/>
					<Box sx={{ margin: '1rem' }}>
						<Typography sx={{ fontSize: '20px' }} gutterBottom variant='h1'>
							{capitalize(empleado.nombre) + ' ' + capitalize(empleado.apellido)}
						</Typography>
						<Typography gutterBottom variant='body2' sx={styles.container.section}>
							<Typography variant='body1'>DNI:</Typography>
							{empleado.dni}
						</Typography>
						<Typography gutterBottom variant='body2' sx={styles.container.section}>
							<Typography variant='body1'>FNac:</Typography>
							{new Date(empleado.fechaNac).toLocaleDateString()}
						</Typography>
						<Typography gutterBottom variant='body2' sx={styles.container.section}>
							<Typography variant='body1'>Developer:</Typography>
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
						<Typography gutterBottom variant='body2' sx={styles.container.section}>
							<Typography variant='body1'>Descripción:</Typography>
							{empleado.descripcion}
						</Typography>
						<Typography gutterBottom variant='body2' sx={styles.container.section}>
							<Typography variant='body1'>Área:</Typography>
							{areas
								.find((area: Area) => area._id === empleado.area)
								?.nombre.toUpperCase()}
						</Typography>
						<Typography
							align='left'
							gutterBottom
							maxHeight='10px'
							variant='body2'
							sx={styles.container.section}>
							<Typography variant='body1'>Otros:</Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores
							necessitatibus, impedit
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</>
	)
}
