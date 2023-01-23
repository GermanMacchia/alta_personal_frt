import React, { useState } from 'react'
import { styles } from './styles'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { useMatches, useNavigate } from 'react-router'

const botones = [
  {
    label: 'Plantilla',
    icon: <ListIcon />,
    link: '/lista-empleados'
  },
  {
    label: 'Alta Empleados',
    icon: <GroupAddIcon />,
    link: '/alta-empleados'
  },
  {
    label: 'Areas',
    icon: <AccountTreeIcon />,
    link: '/lista-areas'
  },
  {
    label: 'Acerca',
    icon: <InfoIcon />,
    link: '/about'
  }
]

export const Navbar = () => {
  const [ value, setValue ] = useState( 0 )
  const navigate = useNavigate()
  const match = useMatches()
  const condition = match[ 1 ].pathname === '/'
  return (
    <>
      <h1 style={ styles.title }>Alta Usuarios</h1>
      <Box sx={ styles.container }>
        <h2 style={ styles.container.subtitle as React.CSSProperties }>GOTAM-UPE</h2>
      </Box>
      <BottomNavigation
        sx={ { ...styles.navbar, ...( condition && styles.blur ) } }
        showLabels
        value={ value }
        onChange={ ( event, newValue ) => {
          setValue( newValue )
        } }
      >
        { botones.map( btn => <BottomNavigationAction disabled={ condition } onClick={ () => navigate( btn.link ) } key={ btn.label } label={ btn.label } icon={ btn.icon } /> ) }
      </BottomNavigation>
    </>
  )
}
