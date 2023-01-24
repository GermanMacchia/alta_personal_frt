import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { styles } from './styles'

export const SignIn = () => {
  const navigate = useNavigate()

  return (
    <Box sx={ styles.container }>
      <h1>Sign In</h1>
      <Button variant="contained" color="success"
        onClick={ () => navigate( '/lista-empleados' ) }>
        Login
      </Button>
    </Box>
  )
}
