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
				<Box sx={styles.column}>
					<CardMedia
						component='img'
						image={userImage}
						alt='user circle'
						sx={styles.column.image}
					/>
					<Typography
						sx={{ fontSize: '20px', fontWeight: '700' }}
						gutterBottom
						variant='h1'>
						{capitalize(empleado.nombre) + ' ' + capitalize(empleado.apellido)}
					</Typography>
				</Box>
				<CardContent
					sx={{
						...styles.container,
						borderTop: { xs: '3px double #00c5ca', md: 'none' },
						padding: 3,
					}}>
					<Box>
						<Box sx={styles.container.section}>
							<Typography sx={styles.container.section.font} variant='body1'>
								DNI
							</Typography>
							<Typography gutterBottom variant='caption'>
								{empleado.dni}
							</Typography>
						</Box>
						<Box sx={styles.container.section}>
							<Typography variant='body1' sx={styles.container.section.font}>
								FNac
							</Typography>

							<Typography gutterBottom variant='caption' sx={styles.container.section}>
								{new Date(empleado.fechaNac).toLocaleDateString()}
							</Typography>
						</Box>
						<Box sx={styles.container.section}>
							<Typography variant='body1' sx={styles.container.section.font}>
								Área
							</Typography>
							<Typography gutterBottom variant='caption' sx={styles.container.section}>
								{areas
									.find((area: Area) => area._id === empleado.area)
									?.nombre.toUpperCase()}
							</Typography>
						</Box>
						<Box sx={styles.container.section}>
							<Typography variant='body1' sx={styles.container.section.font}>
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
					<Box>
						<Box sx={styles.container.section}>
							<Typography variant='body1' sx={styles.container.section.font}>
								Descripción
							</Typography>
							<Typography gutterBottom variant='caption' sx={styles.container.section}>
								{empleado.descripcion}
							</Typography>
						</Box>
						<Box sx={styles.container.section}>
							<Typography variant='body1' sx={styles.container.section.font}>
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
						</Box>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}
