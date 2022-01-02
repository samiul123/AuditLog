import {lazy} from "react";
// import Login from "../component/login/Login";

const Login = lazy(() => import('../component/login/Login'))

const appRoutes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }
]

export default appRoutes