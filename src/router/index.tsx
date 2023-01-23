import App from '../App'
import { createBrowserRouter } from "react-router-dom"
import { EmpleadosList, About, NotFound, AreasList, AltaEmpleado } from '../views'
import { SignIn } from '../components/SignIn'
import React from 'react'



export const router = createBrowserRouter( [
    {
        path: '/alta_personal_frt',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/alta_personal_frt',
                element: <SignIn />,
                errorElement: <NotFound />
            },
            {
                path: '/alta_personal_frt/lista-empleados',
                element: <EmpleadosList />,
                errorElement: <NotFound />
            },
            {
                path: '/alta_personal_frt/lista-areas',
                element: <AreasList />,
                errorElement: <NotFound />
            },
            {
                path: '/alta_personal_frt/alta-empleados',
                element: <AltaEmpleado />,
                errorElement: <NotFound />
            },
            {
                path: '/alta_personal_frt/about',
                element: <About />,
                errorElement: <NotFound />
            }
        ]
    },

] )
