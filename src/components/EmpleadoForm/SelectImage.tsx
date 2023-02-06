import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import CheckIcon from '@mui/icons-material/Check'
import { TextField } from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

export const SelectImage: FC<{ trigger?: boolean }> = ({ trigger }) => {
  const [fileName, setFileName] = useState('')
  const { setValue } = useFormContext()

  const addImage = (event: any) => {
    if (event.target.files[0]) {
      setValue('avatar', event.target.files[0])
      setFileName(event.target.files[0].name)
    }
  }

  const deleteImage = () => {
    setFileName('')
    setValue('avatar', '')
  }

  useEffect(() => {
    deleteImage()
  }, [trigger])

  return (
    <ImageSelect
      name={fileName}
      handleFile={(e: any) => addImage(e)}
      deleteImage={() => deleteImage()}
    />
  )
}

interface Props {
  handleFile: (e: any) => void
  deleteImage: () => void
  name: string
}

const ImageSelect: FC<Props> = ({ handleFile, deleteImage, name }) => {
  return (
    <Box
      onClick={deleteImage}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10.5rem',
      }}>
      <Box mr={1}>
        <Fab
          size='small'
          variant='circular'
          color={name ? 'success' : 'primary'}
          component='label'>
          <input hidden accept='image/*' type='file' onChange={handleFile} />
          {name ? (
            <CheckIcon />
          ) : (
            <PhotoCameraIcon sx={{ color: 'white', fontSize: '20px' }} />
          )}
        </Fab>
      </Box>
      <TextField
        fullWidth
        disabled
        placeholder={name ? name : 'Subir Imagen'}
        variant='standard'
      />
    </Box>
  )
}
