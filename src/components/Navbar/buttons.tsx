import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

export const buttons = [
  {
    label: 'Plantilla',
    icon: <ListIcon />,
    link: '/lista-empleados',
  },
  {
    label: 'Alta Empleados',
    icon: <GroupAddIcon />,
    link: '/alta-empleados',
  },
  {
    label: 'Areas',
    icon: <AccountTreeIcon />,
    link: '/lista-areas',
  },
  {
    label: 'Acerca',
    icon: <InfoIcon />,
    link: '/about',
  },
]
