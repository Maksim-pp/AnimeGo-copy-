import { FC, useEffect } from 'react'
import { Preloader } from 'shared/index'
import { Review } from 'widgets/Review'
import { AnimeInfo } from 'widgets/AnimeInfo'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/store/AppStore'
import { fetchAnime } from '../model/AnimeThunk'

import styles from './AnimeItemPage.module.scss'
import { fetchAnimeRole } from '../model/AnimeRoleThunk'
import { fetchAnimeRelated } from '../model/AnimeRelatedThunk'
import { fecthAnimeSimilar } from '../model/AnimeSimilarThunk'

export const AnimeItemPage: FC = () => {
    const location = useLocation()
    const { id } = location.state

    const {anime, error, isLoading} = useAppSelector(state =>  state.anime)
    const {animeRole} = useAppSelector(state=> state.animeRole)
    const {animeRelated} =useAppSelector(state => state.animeRelated)
    const {animeSimilar} = useAppSelector(state => state.animeSimilar)

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchAnime(id))
        dispatch(fetchAnimeRole(id))
        dispatch(fetchAnimeRelated(id))
        dispatch(fecthAnimeSimilar(id))
    }, [])

    if (isLoading) {
        return (
            <section className='preloader'>
                <Preloader />
            </section>
        )
    }
    if (error) { return <section className='error'>Ивините! Произошла ошибка</section> }

    return (
        <div className={styles.anime}>
            <AnimeInfo  anime={anime} AnimeRole={animeRole} AnimeRelated={animeRelated} AnimeSimilar={animeSimilar}/>
            <Review title={anime.russian}/>
        </div>
    )
}
