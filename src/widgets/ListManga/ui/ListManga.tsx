import { FC } from 'react'
import { Preview } from 'entities/Cart'
import { cartManga } from 'entities/Cart/constants'

import styles from './ListManga.module.scss'
import { useAppSelector } from 'app/store/AppStore'
import { Preloader } from 'shared/index'
import { Routes } from 'shared/constants'

export const ListManga: FC = () => {
    const { Error, isLoading, mangas } = useAppSelector(state => state.Mangas)


    if (isLoading) {
        return (
            <section className='preloader'>
                <Preloader />
            </section>
        )
    }
    if (Error) { return <section className='error'>Ивините! Произошла ошибка</section> }

    return (
        <div className={`${styles.list} container`}>
            <div className={styles.list__title}>
                Манга
            </div>
            <div className={styles.listPreview}>
                {
                    mangas.map(el => (
                        <Preview
                            key={el.id}
                            image={el.image.original}
                            name={el.name}
                            score={el.score}
                            russian={el.russian}
                            id={el.id}
                            kind={el.kind}
                            released_on={el.released_on}
                            status={el.status}
                            url={el.url}
                            volumes={el.volumes}
                            aired_on = {el.aired_on}
                            path={Routes.MANGA}
                        />
                    ))
                }
            </div>
        </div>
    )
}
