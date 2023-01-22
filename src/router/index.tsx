import App from '../App'
import { createBrowserRouter } from "react-router-dom"
import { EmpleadosList, About, NotFound, AreasList } from '../views'
import { EmpleadoForm } from '../components/EmpleadoForm/EmpleadoForm'

export const router = createBrowserRouter( [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
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
                element: <EmpleadoForm />,
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
