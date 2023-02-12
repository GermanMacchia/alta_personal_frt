import { styles } from './styles'
import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  Box,
  Button,
  CircularProgress,
} from '@mui/material'
import { FormControl } from '@mui/material'
import { useEmpleadoList } from '../../hooks'
import { FC } from 'react'
import { CardEditInputs } from './CardEditInputs'

interface Props {
  isLoading: boolean
}

export const CardEditActive: FC<Props> = ({ isLoading }) => {
  const { isActive, handleActiveCheck } = useEmpleadoList()
  const isAnySecureOpen = Object.values(isActive).some(e => !e)

  return (
    <Box sx={styles.modal.container}>
      <Box sx={styles.modal.container.form}>
        <Box sx={styles.modal.container.form.switch}>
          <FormControl component='fieldset' variant='standard'>
            <FormLabel
              component='legend'
              color='success'
              sx={styles.modal.container.form.switch.label}>
              EDITAR
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.dni}
                    onChange={handleActiveCheck}
                    name='dni'
                  />
                }
                label='Dni'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.nombre}
                    onChange={handleActiveCheck}
                    name='nombre'
                  />
                }
                label='Nombre'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.apellido}
                    onChange={handleActiveCheck}
                    name='apellido'
                  />
                }
                label='Apellido'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.descripcion}
                    onChange={handleActiveCheck}
                    name='descripcion'
                  />
                }
                label='Descripción'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.fechaNac}
                    onChange={handleActiveCheck}
                    name='fechaNac'
                  />
                }
                label='F. Nac'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.area}
                    onChange={handleActiveCheck}
                    name='area'
                  />
                }
                label='Área'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive.esDesarrollador}
                    onChange={handleActiveCheck}
                    name='esDesarrollador'
                  />
                }
                label='Desarrollador'
              />
            </FormGroup>
          </FormControl>
        </Box>
        <CardEditInputs isActive={isActive} />
      </Box>
      <Button
        sx={styles.modal.container.submit}
        variant='contained'
        disabled={!isAnySecureOpen}
        type='submit'>
        {isLoading ? <CircularProgress /> : 'Enviar'}
      </Button>
    </Box>
  )
}
