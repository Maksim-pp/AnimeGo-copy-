import { AppLayout } from 'app/layout'
import { AnimePage } from 'pages/AnimePage'
import { CharactersPage } from 'pages/CharactersPage'
import { MainPage } from 'pages/MainPage'
import { MangaPage } from 'pages/MangaPage'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'

import { Routes } from 'shared/constants'

export const AppRouter = () => {
    const routes = createRoutesFromElements(
        <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={'error'}>
            <Route index element={<MainPage />} />
            <Route path={Routes.ANIME} element={<AnimePage />} />
            <Route path={Routes.MANGA} element={<MangaPage />} />
            <Route path={Routes.CHARACTERS} element={<CharactersPage />} />
        </Route>
    )

    const router = createHashRouter(routes, {})
    return <RouterProvider router={router}/> 
}
