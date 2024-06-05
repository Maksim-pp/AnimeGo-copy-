import { AppLayout } from 'app/layout'
import { MainPage } from 'pages/MainPage'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'

import { Routes } from 'shared/constants'

export const AppRouter = () => {
    const routes = createRoutesFromElements(
        <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={'error'}>
            <Route index element={<MainPage />} />
        </Route>
    )

    const router = createHashRouter(routes, {})
    return <RouterProvider router={router}/> 
}
