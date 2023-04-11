import {createBrowserRouter} from 'react-router-dom'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from "./views/Registro";
import AuthLayout from './Layouts/AuthLayout';
import Layout from './Layouts/Layout';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
        {
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/registro',
            element: <Registro />
        },
        ]
    }
])

export default router