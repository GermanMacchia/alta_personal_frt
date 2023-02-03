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
import { TextInputBlock } from '../EmpleadoForm'
import { useEmpleadoList } from '../../hooks'
import { FC } from 'react'

interface Props {
	isLoading: boolean
}

export const CardEditActive: FC<Props> = ({ isLoading }) => {
	const { isActive, handleActiveCheck } = useEmpleadoList()

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
						</FormGroup>
					</FormControl>
				</Box>
				<Box sx={styles.modal.container.inputs}>
					<TextInputBlock
						nombreActivo={isActive.nombre}
						apellidoActivo={isActive.apellido}
						descripcionActiva={isActive.descripcion}
					/>
				</Box>
			</Box>
			<Button sx={styles.modal.container.submit} variant='contained' type='submit'>
				{isLoading ? <CircularProgress /> : 'Enviar'}
			</Button>
		</Box>
	)
}
