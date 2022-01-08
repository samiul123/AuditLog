import {Redirect, Route, Switch} from "react-router-dom";
import appRoutes from "../../config/appRoutes";
import React, {Suspense} from "react";

const Content = (props) => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}

export default Content