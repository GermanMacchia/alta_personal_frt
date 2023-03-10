import { FC } from 'react'
import { styles } from './styles'
import { Empleado, Area } from '../../interfaces'
import { Box, Typography, CardContent, Card, IconButton } from '@mui/material'
import { capitalize } from '../../helpers'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import CloseIcon from '@mui/icons-material/Close'
import { AvatarContainer } from './AvatarContainer'

interface Props {
  empleado: Empleado
  areas: Area[]
  handleClose: () => void
}

export const CardInfo: FC<Props> = ({ empleado, handleClose, areas }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}>
        <IconButton onClick={handleClose}>
          <CloseIcon color='error' sx={{ fontSize: '25px' }} />
        </IconButton>
      </Box>
      <Card sx={styles.container}>
        <Box sx={styles.column}>
          <Box sx={styles.column.imageContainer}>
            <AvatarContainer empleado={empleado} />
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
            ...styles.container.cardContent,
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
                ??rea
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
                Descripci??n
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
