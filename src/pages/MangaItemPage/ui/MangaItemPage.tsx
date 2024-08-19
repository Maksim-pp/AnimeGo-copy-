import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchManga } from '../model/MangaThunk'
import { Preloader } from 'shared/index'
import { MangaInfo } from 'widgets/MangaInfo'
import { Review } from 'widgets/Review'
import { useAppDispatch, useAppSelector } from 'app/store/AppStore'

import styles from './MangaItemPage.module.scss'
import { fetchMangaRole } from '../model/MangaRoleThunk'
import { fetchMangaRelated } from '../model/MangaRelatedThunk'
import { fecthMangaSimilar } from '../model/MangaSimilarThunk'

export const MangaItemPage: FC = () => {
    
    const location = useLocation()
    const { id } = location.state

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchManga(id))
        dispatch(fetchMangaRole(id))
        dispatch(fetchMangaRelated(id))
        dispatch(fecthMangaSimilar(id))
    }, [])
    const { manga, error, isLoading } = useAppSelector(state => state.manga)
    const { mangaRole } = useAppSelector(state => state.mangaRole)
    const { mangaRelated } = useAppSelector(state => state.mangaRelated)
    const { mangaSimilar } =useAppSelector(state=> state.mangaSimilar)

    if (isLoading) {
        return (
            <section className='preloader'>
                <Preloader />
            </section>
        )
    }
    if (error) { return <section className='error'>Ивините! Произошла ошибка</section> }

    return (
        <div className={styles.manga}>
            <MangaInfo 
                mangaSimilar={mangaSimilar}
                mangaRelated={mangaRelated}
                mangaRole={mangaRole}
                manga={manga}
            />
            <Review title={manga.russian} />
        </div>
    )
}