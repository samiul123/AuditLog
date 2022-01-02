import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import appRoutes from "../../config/appRoutes";

const Layout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {
                    appRoutes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                name={route.name}
                                component={route.component}
                            />
                        )
                    })
                }
            </Switch>
        </Suspense>

    )
}

export default Layout