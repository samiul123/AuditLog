import React, {Suspense} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import appRoutes from "../../config/appRoutes";
import Content from "./Content";

const Layout = () => {
    // if (!!localStorage.getItem("username") === false) {
    //     window.location.href="/login"
    //     return;
    // }

    return (
        <Content/>
    )
}

export default Layout