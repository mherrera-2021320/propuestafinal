import React from 'react'
import { HeadPage } from './pages/HeadPage'
import { PiePag } from './pages/PiePag'
import { AppRoutes } from './AppRoutes'



export const MainApp = () => {
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
