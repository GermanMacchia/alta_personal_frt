import { Box, Checkbox } from '@mui/material'
import { ChangeEvent, FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Typography } from '@mui/material/'

interface Props {
	trigger: boolean
}

export const IsDevCheckbox: FC<Props> = ({ trigger }) => {
	const [checked, setChecked] = useState(false)
	const { register } = useFormContext()

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	useEffect(() => {
		setChecked(false)
	}, [trigger])

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Typography style={{ color: '#242424' }}>Desarrollador</Typography>
			<Checkbox
				{...register('esDesarrollador')}
				checked={checked}
				onChange={handleChange}
				sx={{ margin: '0 1rem 0.2rem', color: 'grey' }}
				color='success'
			/>
		</Box>
	)
}
