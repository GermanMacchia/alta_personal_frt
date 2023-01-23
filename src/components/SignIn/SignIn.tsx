import React from 'react'
import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router'

const styles = {
  container: {
    width: 500,
    border: '1px solid whitesmoke',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justyfyContent: 'space-between',
    margin: '20vh auto',
    padding: '20px'
  }
}

export const SignIn = () => {
  const navigate = useNavigate()

  return (
    <Box sx={ styles.container }>
      <h1>Sign In</h1>
      <Button variant="contained" color="success" onClick={ () => navigate( '/alta_personal_frt/lista-empleados' ) }>Login</Button>
    </Box>
  )
}
