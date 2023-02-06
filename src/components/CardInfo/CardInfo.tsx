import { FC } from 'react'
import { styles } from './styles'
import { Empleado, Area } from '../../interfaces'
import {
  Box,
  Typography,
  CardContent,
  Card,
  CircularProgress,
} from '@mui/material'
import { capitalize } from '../../helpers'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import IconButton from '@mui/material/IconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useAvatar } from '../../hooks/useAvatar'
import Avatar from '@mui/material/Avatar'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
interface Props {
  empleado: Empleado
  areas: Area[]
  handleClose: () => void
}

export const CardInfo: FC<Props> = ({ empleado, handleClose, areas }) => {
  const { avatar, isLoading } = useAvatar(empleado._id as string)

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton onClick={handleClose}>
          <CloseIcon color='error' sx={{ fontSize: '25px' }} />
        </IconButton>
      </Box>
      <Card sx={styles.container}>
        <Box sx={styles.column}>
          <Box sx={styles.column.imageContainer}>
            {isLoading && (
              <Avatar
                variant='circular'
                sx={styles.column.imageContainer.avatar}>
                <CircularProgress size={60} thickness={4} color='success' />
              </Avatar>
            )}
            {!avatar && !isLoading && (
              <IconButton
                aria-label='upload picture'
                component='label'
                sx={{ color: 'white' }}>
                <Avatar
                  variant='circular'
                  sx={{
                    ...styles.column.imageContainer.avatar,
                    ...styles.column.imageContainer.avatar._addPicture,
                  }}>
                  <input hidden accept='image/*' type='file' />
                  <AddAPhotoIcon sx={{ fontSize: '50px' }} />
                </Avatar>
              </IconButton>
            )}
            {avatar && (
              <>
                <IconButton
                  aria-label='upload picture'
                  component='label'
                  sx={styles.column.imageContainer.avatarChange}>
                  <input hidden accept='image/*' type='file' />
                  <ChangeCircleIcon />
                </IconButton>
                <Avatar
                  sx={styles.column.imageContainer.avatar}
                  src={avatar!.url}
                  alt='user circle'
                />
              </>
            )}
          </Box>
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
            width: { xs: '70vw', md: '30vw' },
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
                F. Nacimiento
              </Typography>

              <Typography
                gutterBottom
                variant='caption'
                sx={styles.container.section}>
                {new Date(empleado.fechaNac).toLocaleDateString()}
              </Typography>
            </Box>
            <Box sx={styles.container.section}>
              <Typography variant='body1' sx={styles.container.section.font}>
                Área
              </Typography>
              <Typography
                gutterBottom
                variant='caption'
                sx={styles.container.section}>
                {areas
                  .find((area: Area) => area._id === empleado.area)
                  ?.nombre.toUpperCase()}
              </Typography>
            </Box>
            <Box sx={styles.container.section}>
              <Typography variant='body1' sx={styles.container.section.font}>
                Developer
              </Typography>
              <Typography
                gutterBottom
                variant='caption'
                sx={styles.container.section}>
                {empleado.esDesarrollador ? (
                  <CheckIcon color='success' />
                ) : (
                  <NotInterestedIcon color='error' />
                )}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ margin: { xs: '-25px 0', md: 0 } }}>
            <Box sx={styles.container.section}>
              <Typography variant='body1' sx={styles.container.section.font}>
                Descripción
              </Typography>
              <Typography
                gutterBottom
                variant='caption'
                sx={styles.container.section}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                maiores necessitatibus, impedit
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
