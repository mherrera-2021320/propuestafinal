import React from 'react'
import { HeadPage } from './pages/HeadPage'
import { PiePag } from './pages/PiePag'
import { RouteZonas } from './RouteZonas'
import { AppRoutes } from './AppRoutes'



export const RoutesApp = () => {
    return (
        < >
            <HeadPage />
            <hr />
            <AppRoutes />
            <hr />
            <PiePag />

        </>
    )
}
