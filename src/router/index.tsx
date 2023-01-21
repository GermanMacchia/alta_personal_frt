import { createBrowserRouter } from "react-router-dom"
import { EmpleadosInfo, EmpleadosList, About, NotFound, AreasList } from '../views'
import App from '../App'

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
                element: <EmpleadosInfo />,
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
