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
		path: '/alta_personal_frt',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/alta_personal_frt',
				element: <SignIn />,
				errorElement: <NotFound />,
			},
			{
				path: '/alta_personal_frt/lista-empleados',
				element: <ListaEmpleado />,
				errorElement: <NotFound />,
			},
			{
				path: '/alta_personal_frt/lista-areas',
				element: <ListaArea />,
				errorElement: <NotFound />,
			},
			{
				path: '/alta_personal_frt/alta-empleados',
				element: <AltaEmpleado />,
				errorElement: <NotFound />,
			},
			{
				path: '/alta_personal_frt/about',
				element: <About />,
				errorElement: <NotFound />,
			},
		],
	},
])
