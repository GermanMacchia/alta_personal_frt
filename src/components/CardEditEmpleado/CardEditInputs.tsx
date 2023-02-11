import { Box, Typography } from '@mui/material'
import { TextInputBlock } from '../EmpleadoForm/TextInputBlock'
import { FC } from 'react'
import { Label, styles } from './styles'
import { AreaSelect } from '../EmpleadoForm/AreaSelect'
import { useFormContext } from 'react-hook-form'
import { IsDevCheckbox } from '../EmpleadoForm/IsDevCheckbox'
import Input from '@mui/material/Input'

interface Props {
  isActive: any
}
export const CardEditInputs: FC<Props> = ({ isActive }) => {
  const { getValues, register } = useFormContext()
  const fecha = new Date(getValues().fechaNac)
  const date = `(${fecha?.getDate()} / ${fecha?.getMonth()} / ${fecha?.getFullYear()})`

  return (
    <Box sx={styles.modal.container.inputs}>
      <TextInputBlock
        nombreActivo={isActive.nombre}
        apellidoActivo={isActive.apellido}
        descripcionActiva={isActive.descripcion}
      />
      <Label>
        <Typography fontWeight={400} display={'inline-block'}>
          DNI &nbsp;
        </Typography>
        <Typography
          fontWeight={400}
          color={'primary.main'}
          display={'inline-block'}>
          *
        </Typography>
        <Input
          disabled={isActive.dni}
          {...register('dni')}
          placeholder={getValues().dni}
          type='text'
        />
      </Label>
      <Label>
        <Typography fontWeight={400} display={'inline-block'}>
          F. Nacimiento &nbsp;
        </Typography>
        <Typography
          fontWeight={400}
          color={'primary.main'}
          display={'inline-block'}>
          *
        </Typography>{' '}
        <Box>
          <Typography variant='caption'>{date}</Typography>
        </Box>
        <Box>
          <Input
            disabled={isActive.fechaNac}
            type='date'
            {...register('fechaNac')}
          />
        </Box>
      </Label>
      <Label>
        <Typography fontWeight={400} display={'inline-block'}>
          Área &nbsp;
        </Typography>
        <Typography
          fontWeight={400}
          color={'primary.main'}
          display={'inline-block'}>
          *
        </Typography>
        <Box>
          <AreaSelect
            initialValue={getValues().area}
            isDisabled={isActive.area}
          />
        </Box>
      </Label>
      <Label>
        <IsDevCheckbox
          isDisabled={isActive.esDesarrollador}
          isChecked={getValues().esDesarrollador}
        />
      </Label>
    </Box>
  )
}
