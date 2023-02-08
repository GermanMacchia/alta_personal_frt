import IconButton from '@mui/material/IconButton/IconButton'
import { styles } from './styles'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import { Empleado } from '../../interfaces/empleado.interface'
import { useAvatar } from '../../hooks/useAvatar'
import { FC, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { CircularProgress, Box } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

interface Actions {
  handler: (event: any) => void
  deleter?: () => void
}

const OptionButtons: FC<Actions> = ({ handler, deleter }) => {
  return (
    <Box display='flex' sx={styles.column.imageContainer.avatarChange}>
      <IconButton
        onClick={deleter}
        sx={{
          ...styles.column.imageContainer._deletePicture,
        }}
        aria-label='delete picture'>
        <HighlightOffIcon />
      </IconButton>
      <IconButton
        aria-label='upload picture'
        component='label'
        sx={{
          ...styles.column.imageContainer._addPicture,
        }}>
        <input hidden accept='image/*' type='file' onChange={handler} />
        <ChangeCircleIcon />
      </IconButton>
    </Box>
  )
}

const AddAvatar: FC<Actions> = ({ handler }) => {
  return (
    <IconButton
      aria-label='upload picture'
      component='label'
      sx={{ color: 'white' }}>
      <input hidden accept='image/*' type='file' onChange={handler} />
      <AddAPhotoIcon sx={{ fontSize: '50px' }} />
    </IconButton>
  )
}

interface Props {
  empleado: Empleado
}

export const AvatarContainer: FC<Props> = ({ empleado }) => {
  const [change, setChange] = useState(false)
  const { avatar, isLoading, handleNewAvatar, preview, deleteAvatar } =
    useAvatar(empleado._id as string)

  const handleChangeAvatar = (event: any) => {
    setChange(true)
    handleNewAvatar(event, empleado)
  }

  return (
    <>
      {(avatar || isLoading) && !change ? (
        <>
          <OptionButtons handler={handleChangeAvatar} deleter={deleteAvatar} />
          <Avatar
            variant='circular'
            src={avatar && avatar!.url}
            sx={styles.column.imageContainer.avatar}>
            {isLoading && <CircularProgress thickness={4} color='success' />}
          </Avatar>
        </>
      ) : (
        <>
          {preview && (
            <OptionButtons
              handler={handleChangeAvatar}
              deleter={deleteAvatar}
            />
          )}
          <Avatar
            sx={{
              ...styles.column.imageContainer.avatar,
              ...styles.column.imageContainer._addPicture,
            }}
            src={preview}
            alt='user circle'>
            <AddAvatar handler={handleChangeAvatar} />
          </Avatar>
        </>
      )}
    </>
  )
}
