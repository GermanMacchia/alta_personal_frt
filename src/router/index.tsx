import App from '../App'
import { createBrowserRouter } from "react-router-dom"
import { EmpleadosList, About, NotFound, AreasList, AltaEmpleado } from '../views'
import { SignIn } from '../components/SignIn'



export const router = createBrowserRouter( [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <SignIn />,
                errorElement: <NotFound />
            },
            {
                path: '/lista-empleados',
                element: <EmpleadosList />,
                errorElement: <NotFound />
            },
            {
                path: '/lista-areas',
                element: <AreasList />,
                errorElement: <NotFound />
            },
            {
                path: '/alta-empleados',
                element: <AltaEmpleado />,
                errorElement: <NotFound />
            },
            {
                path: '/about',
                element: <About />,
                errorElement: <NotFound />
            }
        ]
    },

] )
