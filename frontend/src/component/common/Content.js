import {Redirect, Route, Switch} from "react-router-dom";
import appRoutes from "../../config/appRoutes";
import React, {Suspense} from "react";

const Content = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
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
                {!!localStorage.getItem("username") === false && <Redirect to={'/login'}/>}
            </Switch>
        </Suspense>
    )
}

export default Content