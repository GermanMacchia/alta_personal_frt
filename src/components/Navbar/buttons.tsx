import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

export const buttons = [
	{
		label: 'Plantilla',
		icon: <ListIcon />,
		link: '/alta_personal_frt/lista-empleados',
	},
	{
		label: 'Alta Empleados',
		icon: <GroupAddIcon />,
		link: '/alta_personal_frt/alta-empleados',
	},
	{
		label: 'Areas',
		icon: <AccountTreeIcon />,
		link: '/alta_personal_frt/lista-areas',
	},
	{
		label: 'Acerca',
		icon: <InfoIcon />,
		link: '/alta_personal_frt/about',
	},
]
