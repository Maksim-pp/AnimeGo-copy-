import { FC } from 'react'
import { Preview } from 'entities/Cart'
import { cartManga } from 'entities/Cart/constants'

import styles from './ListManga.module.scss'
import { useAppSelector } from 'app/store/AppStore'
import { Preloader } from 'shared/index'
import { Routes } from 'shared/constants'

export const ListManga: FC = () => {
    const { error, isLoading, mangas } = useAppSelector(state => state.Mangas)


    if (isLoading) {
        return (
            <section className='preloader'>
                <Preloader />
            </section>
        )
    }
    if (error) { return <section className='error'>Ивините! Произошла ошибка</section> }

    return (
        <div className={`${styles.list} container`}>
            <div className={styles.list__title}>
                Манга
            </div>
            <div className={styles.listPreview}>
                {
                    mangas.map(el => (
                        <Preview
                            id={el.id}
                            image={el.image.original}
                            name={el.name}
                            russian={el.russian}
                            kind={el.kind}
                            key={el.id}
                            aired_on={el.aired_on}
                            score={el.score}
                            status={el.status}
                            url={el.url}
                            path={Routes.MANGA}

                            volumes={el.volumes}
                            chapters={el.chapters}
                            released_on={el.released_on}
                            english={el.english}
                            japanese={el.japanese}
                            synonyms={el.synonyms}
                            license_name_ru={el.license_name_ru}
                            description={el.description}
                            description_html={el.description_html}
                            description_source={el.description_source}
                            franchise={el.franchise}
                            favoured={el.favoured}
                            anons={el.anons}
                            ongoing={el.ongoing}
                            thread_id={el.thread_id}
                            topic_id={el.topic_id}
                            myanimelist_id={el.myanimelist_id}
                            rates_scores_stats={el.rates_scores_stats}
                            rates_statuses_stats={el.rates_statuses_stats}
                            licensors={el.licensors}
                            genres={el.genres}
                            publishers={el.publishers}
                        />
                    ))
                }
            </div>
        </div>
    )
}
