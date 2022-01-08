import {Redirect, Route, Switch} from "react-router-dom";
import appRoutes from "../../config/appRoutes";
import React from "react";

const Content = (props) => {

    return (
        <Switch>
            {!!localStorage.getItem("username") === false && <Redirect to={'/login'}/>}
            {
                appRoutes.map((route, idx) => {
                    return (
                        <Route
                            key={idx}
                            exact={route.exact}
                            path={route.path}
                            name={route.name}
                            component={route.component}
                        />
                    )
                })
            }
            <Redirect to={'/auditLog'}/>
        </Switch>
    )
}

export default Content