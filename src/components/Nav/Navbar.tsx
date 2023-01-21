import { useState } from 'react'
import { styles } from './styles'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { useNavigate } from 'react-router'


const botones = [
  {
    label: 'Plantilla',
    icon: <ListIcon />,
    link: '/lista-empleados'
  }, {
    label: 'Alta Empleados',
    icon: <GroupAddIcon />,
    link: '/alta-empleados'

  }, {
    label: 'Acerca',
    icon: <InfoIcon />,
    link: '/about'
  }
]

export const Navbar = () => {
  const [ value, setValue ] = useState( 0 )
  const navigate = useNavigate()

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
        { botones.map( btn => <BottomNavigationAction onClick={ () => navigate( btn.link ) } key={ btn.label } label={ btn.label } icon={ btn.icon } /> ) }
      </BottomNavigation>
    </>
  )
}
