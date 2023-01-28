import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import {
	ListaEmpleado,
	About,
	NotFound,
	ListaArea,
	AltaEmpleado,
} from '../views'
import { SignIn } from '../components/SignIn'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <SignIn />,
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
				element: <SignIn />,
				errorElement: <NotFound />,
			},
		],
	},
])
