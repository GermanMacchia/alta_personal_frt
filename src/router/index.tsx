import App from '../App'
import { createHashRouter } from 'react-router-dom'
import {
	ListaEmpleado,
	About,
	NotFound,
	ListaArea,
	AltaEmpleado,
	Login,
	Registro,
} from '../views'

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Login />,
				errorElement: <NotFound />,
			},
			{
				path: '/registro',
				element: <Registro />,
				errorElement: <NotFound />,
			},
			{
				path: '/lista-empleados',
				element: <ListaEmpleado />,
				errorElement: <NotFound />,
			},
			{
				path: '/lista-areas',
				element: <ListaArea />,
				errorElement: <NotFound />,
			},
			{
				path: '/alta-empleados',
				element: <AltaEmpleado />,
				errorElement: <NotFound />,
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <NotFound />,
			},
			{
				path: '/*',
				element: <Login />,
				errorElement: <NotFound />,
			},
		],
	},
])
