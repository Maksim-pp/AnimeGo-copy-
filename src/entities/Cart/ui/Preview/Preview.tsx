import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Star from 'shared/assets/icons/star.svg'

import styles from './Preview.module.scss'
import { IGenres, IImage, IPublishers, IRatesScoresStats, IRatesStatusesStats } from 'shared/types/mangaType'
import { IScreenshots, IStudios, IVideos } from 'shared/types/animeType'

interface IProps {
    id: number,
    name: string,
    russian: string,
    image: string
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes?: number,
    chapters?: number,
    aired_on: string,
    released_on?: string,
    english?: [],
    japanese?: [],
    synonyms?: [],
    license_name_ru?: string,
    description?: string,
    description_html?: string,
    description_source?: string,
    franchise?: string,
    favoured?: boolean,
    anons?: boolean,
    ongoing?: boolean,
    thread_id?: number,
    topic_id?: number,
    myanimelist_id?: number,
    rates_scores_stats?: IRatesScoresStats[],
    rates_statuses_stats?: IRatesStatusesStats[],
    licensors?: [],
    genres?: IGenres[],
    publishers?: IPublishers[]

    path: string

    episodes?: number,
    episodes_aired?: number,
    rating?: string,
    duration?: number,
    updated_at?: string,
    next_episode_at?: string,
    fansubbers?: [],
    fandubbers?: [],
    studios?: IStudios[],
    videos?: IVideos[],
    screenshots?: IScreenshots[],
}

export const Preview: FC<IProps> = ({
    path, id, image, name, russian, kind, aired_on, score, status, url, 
    }) => {
    return (
        <div className={styles.preview}>
            <div>
                <div className={styles.previewRating}>
                    <img src={Star} alt="Рейтинг" />
                    <div className={styles.previewRating__text}>{score}</div>
                </div>
                <NavLink to={path + id} state={{id}}>
                    <div>
                        <img src={`https://shikimori.one/${image}`} alt="Баннер" className={styles.preview__img} />
                    </div>

                </NavLink>
            </div>
            <div className={styles.previewInfo}>
                <div className={styles.previewInfo__title}>
                    <NavLink to={path + id} state={{id}}>
                        {russian}
                    </NavLink>
                </div>
                <div className={styles.previewInfo__name}>
                    {name}
                </div>

                <div className={styles.previewInfo__tag}>
                    <div><span className={styles.previewInfo__tag_gray}>Тип:</span> <span className={styles.previewInfo__tagItem}>{kind}</span></div>
                    <div><span className={styles.previewInfo__tag_gray}>Статус:</span> <span className={styles.previewInfo__tagItem}>{status}</span> c {aired_on}</div>
                </div>
                <div className={styles.previewInfo__url}>
                    <a href={`https://shikimori.one/${url}`} target="_blank">Ссылка на источник</a>
                </div>
            </div>
        </div>
    )
}
