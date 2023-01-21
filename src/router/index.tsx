import { createBrowserRouter } from "react-router-dom"
import { NewUserForm, UserList, About, NotFound } from '../views'
import App from '../App'

export const router = createBrowserRouter( [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/lista-empleados',
                element: <UserList />,
                errorElement: <NotFound />
            },
            {
                path: '/alta-empleados',
                element: <NewUserForm />,
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
