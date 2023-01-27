import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { styles } from './styles'

export const SignIn = () => {
	const navigate = useNavigate()

	return (
		<Box sx={styles.container}>
			<h1>Sign In</h1>
			<Button
				sx={styles.container.login}
				variant='contained'
				color='success'
				onClick={() => navigate('/alta_personal_frt/lista-empleados')}>
				Login
			</Button>
		</Box>
	)
}
