import { FC, useEffect, useState } from 'react'
import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { Container } from '@mui/system'
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { TextInputBlock } from './TextInputBlock'
import { DataInputBlock } from './DataInputBlock'
import { IsDevCheckbox } from './IsDevCheckbox'
import Paper from '@mui/material/Paper'
import { SelectImage } from './SelectImage'

interface Props {
  isLoading: boolean
}

export const EmpleadoForm: FC<Props> = ({ isLoading }) => {
  const { register, reset } = useFormContext()
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTrigger(!trigger)
      reset()
    }
  }, [isLoading])

  return (
    <Container sx={styles.container}>
      <Paper elevation={0} sx={styles.container.paper}>
        <Box display='flex' alignItems='flex-start'>
          <Box>
            <Typography sx={styles.container.title}>Alta Empleado</Typography>
            <Typography variant='caption' color='GrayText'>
              Introduzca los datos del empleado
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container.form}>
          <input {...register('formType')} type='hidden' value='AltaEmpleado' />
          <Box sx={styles.container.form.inputData}>
            <TextInputBlock />
            <DataInputBlock trigger={trigger} />
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            width='100%'
            gap={{ xs: 1, md: 6 }}>
            <IsDevCheckbox trigger={trigger} />
            <SelectImage trigger={trigger} />
          </Box>
          <Button
            variant='contained'
            type='submit'
            disableElevation
            sx={styles.container.form.submit}>
            {isLoading ? <CircularProgress /> : 'Enviar'}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
