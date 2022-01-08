import React, {Suspense} from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Box, CircularProgress} from "@mui/material";

function App() {
    const Login = React.lazy(() => import("./component/login/Login"))
    const Layout = React.lazy(() => import("./component/common/Layout"))
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <CircularProgress/>
                </Box>
            }>
                <Route path='/login' name='Login' component={Login}/>
                <Route path='/' component={Layout}/>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
