import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'

import { Routes } from 'shared/constants'
import { MainPage } from 'pages/MainPage'
import { AnimePage } from 'pages/AnimePage'
import { CharacterPage } from 'pages/CharacterPage'
import { CharactersPage } from 'pages/CharactersPage'
import { MangaPage } from 'pages/MangaPage'
import { MangaItemPage } from 'pages/MangaItemPage'
import { ErrorPage } from 'pages/ErrorPage'
import { AppLayout } from 'app/layout'
import { useEffect } from 'react'
import { useAppDispatch } from 'app/store/AppStore'
import { fetchAnimeSeasonList } from 'widgets/Slider/model/AnimeSeasonListThunk'
import { fetchMangasList } from 'widgets/ListManga/model/MangasListThunk'
import { fetchAnimeList } from 'widgets/ListAnime/model/AnimeListThunk'
import { fetchCharacter } from 'widgets/Character/model/CharacterThunk'


export const AppRouter = () => {

    const dispatch = useAppDispatch()
    
    useEffect(()=> {
        dispatch(fetchAnimeSeasonList())
        dispatch(fetchMangasList)
        dispatch(fetchAnimeList)
        dispatch(fetchCharacter)
    },[])

    const routes = createRoutesFromElements(
        <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={<ErrorPage />}>
            <Route index element={<MainPage />} />
            <Route path={Routes.ANIME} element={<AnimePage />} />
            <Route path={Routes.MANGA} element={<MangaPage />} />
            <Route path={`${Routes.MANGA}:title`} element={<MangaItemPage />}/>
            {/* <Route path={Routes.CHARACTERS} element={<CharactersPage />} /> */}
            <Route path={Routes.CHARACTER} element={<CharacterPage />}/>
        </Route>
    )

    const router = createHashRouter(routes, {})
    return <RouterProvider router={router}/> 
}
