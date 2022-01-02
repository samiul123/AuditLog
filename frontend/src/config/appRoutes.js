import {lazy} from "react";

const Login = lazy(() => import('../component/login/Login'))

const appRoutes = [
    {
        path: '/login',
        name: 'Login',
        exact: true,
        component: Login
    }
]

export default appRoutes