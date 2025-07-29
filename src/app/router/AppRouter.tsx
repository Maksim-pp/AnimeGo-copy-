import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'

import { Routes } from 'shared/constants'
import { MainPage } from 'pages/MainPage'
import { AnimePage } from 'pages/AnimePage'
import { CharacterPage } from 'pages/CharacterPage'
import { MangaPage } from 'pages/MangaPage'
import { MangaItemPage } from 'pages/MangaItemPage'
import { ErrorPage } from 'pages/ErrorPage'
import { AppLayout } from 'app/layout'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/store/AppStore'
import { fetchAnimeSeasonList } from 'widgets/Slider/model/AnimeSeasonListThunk'
import { fetchMangasList } from 'widgets/ListManga/model/MangasListThunk'
import { fetchAnimeList } from 'widgets/ListAnime/model/AnimeListThunk'
import { AnimeItemPage } from 'pages/AnimeItemPage'


export const AppRouter = () => {
    const {page} = useAppSelector(state=> state.Animes)
    const dispatch = useAppDispatch()

    // console.log(page);
    
    useEffect(()=> {
        dispatch(fetchAnimeSeasonList())
        dispatch(fetchMangasList())
        dispatch(fetchAnimeList(page))
    },[dispatch])

    const routes = createRoutesFromElements(
        <Route path={Routes.MAIN_PAGE} element={<AppLayout />} errorElement={<ErrorPage />}>
            <Route index element={<MainPage />} />
            <Route path={Routes.ANIME} element={<AnimePage />} />
            <Route path={`${Routes.ANIME}:id`} element={<AnimeItemPage />} />
            <Route path={Routes.MANGA} element={<MangaPage />} />
            <Route path={`${Routes.MANGA}:id`} element={<MangaItemPage />}/>
            <Route path={Routes.CHARACTER} element={<CharacterPage />}/>
        </Route>
    )

    const router = createHashRouter(routes, {})
    return <RouterProvider router={router}/> 
}
