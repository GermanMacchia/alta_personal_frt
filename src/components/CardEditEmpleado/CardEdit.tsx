import { FC, useEffect } from 'react'
import { styles } from './styles'
import { CardEditActive } from './CardEditActive'
import { Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { capitalize } from '../../helpers'

interface Props {
	data: any
	isLoading: boolean
}

export const CardEdit: FC<Props> = ({ data, isLoading }) => {
	const { setValue } = useFormContext()

	useEffect(() => {
		setValue('_id', capitalize(data._id))
		setValue('nombre', capitalize(data.nombre))
		setValue('apellido', capitalize(data.apellido))
		setValue('descripcion', data.descripcion)
		setValue('dni', data.dni)
		setValue('fechaNac', data.fechaNac)
		setValue('area', data.area)
		setValue('esDesarrollador', data.esDesarrollador)
	}, [data])

	return (
		<Box sx={styles.frame}>
			<CardEditActive isLoading={isLoading} />
		</Box>
	)
}
