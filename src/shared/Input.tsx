import { Box, Typography, TextField } from '@mui/material/'
import { useFormContext } from 'react-hook-form'
import { FC, useEffect } from 'react'
import { useMediaQuery } from '@mui/material'

interface Props {
	name: string
	rules: any
	disabled?: boolean
	placeholder: string
	type?: string
}

const styles = {
	errors: {
		position: 'absolute',
		margin: { xs: '-6vh 27vw', md: '-7vh 8vw' },
	},
}

export const Input: FC<Props> = ({
	name,
	rules,
	placeholder,
	type = 'string',
	disabled,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '5px' }}>
			<TextField
				{...register(name, { ...rules })}
				type={type}
				InputProps={{
					style: {
						color: '#242424',
					},
				}}
				disabled={disabled}
				variant='standard'
				placeholder={placeholder}
				color='success'
			/>
			<br />
			{errors[name] && (
				<Typography
					variant='caption'
					sx={styles.errors}
					color='#fc746d'
					className='errorText'>
					{(errors as any)[name].message}
				</Typography>
			)}
		</Box>
	)
}
