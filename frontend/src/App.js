import React, {Suspense} from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    const Login = React.lazy(() => import("./component/login/Login"))
    const Layout = React.lazy(() => import("./component/common/Layout"))
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path='/login' name='Login' component={Login}/>
                <Route path='/' component={Layout}/>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
