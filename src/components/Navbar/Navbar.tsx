import { FC, ReactNode, useState } from 'react'
import { useNavigate, useMatches } from 'react-router-dom'
import { styles } from './styles'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from '@mui/material'
import { buttons } from './buttons'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import { useMediaQuery } from '@mui/material'
import { useAuthForm } from '../../hooks/useAuthForm'

const signout = {
  label: 'SignOut',
  icon: <LogoutIcon />,
  link: '/',
}

interface Props {
  children: ReactNode
}

export const Navbar: FC<Props> = ({ children }) => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const [_, match] = useMatches()
  const condition = match.pathname === '/' || match.pathname === '/registro'
  const matchMedia = useMediaQuery('(min-width:600px)')
  const { signOut } = useAuthForm()

  return (
    <>
      <Box sx={styles.container}>
        <Typography variant='h1' sx={styles.container.title}>
          Alta Empleados
        </Typography>
        <Box>
          <IconButton
            aria-label='signOut'
            sx={styles.container.signout}
            disabled={condition}
            onClick={signOut}>
            {signout.icon}
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.banner}>
        <Typography variant='h2' sx={styles.banner.subtitle}>
          GOTAM-UPE
        </Typography>
      </Box>
      {children}
      <BottomNavigation
        sx={{
          ...styles.navbar,
          ...(condition && styles.navbar.__blur),
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        {buttons.map(btn => (
          <BottomNavigationAction
            disabled={condition}
            onClick={() => navigate(btn.link)}
            key={btn.label}
            label={matchMedia && btn.label}
            icon={btn.icon}
          />
        ))}
      </BottomNavigation>
    </>
  )
}