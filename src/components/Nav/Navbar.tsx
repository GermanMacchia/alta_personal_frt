import { useState } from 'react'
import { styles } from './styles'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

const botones = [
  {
    label: 'Plantilla',
    icon: <ListIcon />
  }, {
    label: 'Alta Usuarios',
    icon: <GroupAddIcon />,
  }, {
    label: 'Acerca',
    icon: <InfoIcon />
  }
]

export const Navbar = () => {
  const [ value, setValue ] = useState( 0 )

  return (
    <>
      <h1 style={ styles.title }>Alta Usuarios</h1>
      <Box sx={ styles.container }>
        <h2 style={ styles.container.subtitle as React.CSSProperties }>GOTAM-UPE</h2>
      </Box>
      <BottomNavigation
        sx={ styles.navbar }
        showLabels
        value={ value }
        onChange={ ( event, newValue ) => {
          setValue( newValue )
        } }
      >
        { botones.map( btn => <BottomNavigationAction key={ btn.label } label={ btn.label } icon={ btn.icon } /> ) }
      </BottomNavigation>
    </>
  )
}
