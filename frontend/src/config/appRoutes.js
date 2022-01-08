import {lazy} from "react";

const AuditLog = lazy(() => import('../component/auditLog/AuditLog'))

const appRoutes = [
    {
        path: '/auditLog',
        name: 'AuditLog',
        exact: true,
        component: AuditLog
    }
]

export default appRoutes