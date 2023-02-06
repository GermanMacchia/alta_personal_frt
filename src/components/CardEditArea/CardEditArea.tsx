import { FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { styles } from './styles'
import {
  Box,
  FormLabel,
  FormControlLabel,
  Switch,
  CircularProgress,
  Button,
  FormControl,
} from '@mui/material'
import { AreaInput } from '../AreaForm'
import { Area } from '../../interfaces'

interface Props {
  area: Area
  isLoading: boolean
}

export const CardEditArea: FC<Props> = ({ area, isLoading }) => {
  const [isActive, setIsActive] = useState(true)
  const { setValue } = useFormContext()

  useEffect(() => {
    setValue('_id', area._id)
    setValue('nombre', area.nombre.toUpperCase())
  }, [area])

  return (
    <Box sx={styles.modal.container}>
      <Box sx={styles.modal.container.flex}>
        <Box sx={styles.modal.container.flex.switch}>
          <FormControl component='fieldset' variant='standard'>
            <FormLabel
              component='legend'
              sx={styles.modal.container.flex.switch.label}
              color='success'>
              EDITAR
            </FormLabel>
            <FormControlLabel
              control={
                <Switch
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                  name='nombre'
                />
              }
              label='Nombre'
            />
          </FormControl>
        </Box>
        <Box>
          <AreaInput active={isActive} />
        </Box>
      </Box>
      <Button
        disabled={isActive}
        sx={styles.modal.container.submit}
        variant='contained'
        type='submit'>
        {isLoading ? <CircularProgress /> : 'Enviar'}
      </Button>
    </Box>
  )
}
