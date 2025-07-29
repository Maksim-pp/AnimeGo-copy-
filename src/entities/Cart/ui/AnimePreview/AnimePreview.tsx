import { FC, useState } from 'react'
import { MyButton } from 'shared/index'
import { IAnime } from 'shared/types/animeType'
import Star from 'shared/assets/icons/star.svg'

import styles from './AnimePreview.module.scss'


interface IProps {
    anime: IAnime
}

export const AnimePreview: FC<IProps> = ({anime}) => {

    const [isShow, setIsShow] = useState(false)
    const classes = isShow ? `${styles.preview__description} ${styles.active}` : styles.preview__description

    const changeHandler = () => {
        setIsShow(pre => !pre)
    }

    return (
        <div className={styles.preview}>
            <img src={`https://shikimori.one/${anime.image.original}`} alt="" className={styles.preview__img}  />
            <div className={styles.previewInfo}>
                <div className={styles.score}>
                    <img src={Star} alt="" />
                    {anime.score}
                </div>
                <div className={styles.previewInfo__title}>
                    {anime.russian}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {anime.name}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {anime.english}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {anime.japanese}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {anime.synonyms}
                </div>
                <div className={styles.previewInfo__block}>
                    <div className={styles.previewInfo__blockDescription}>
                        <div className={styles.previewInfo__subtitle}>Тип: <span> {anime.kind}</span></div>
                        <div className={styles.previewInfo__subtitle}>Статус: <span>{anime.status}</span></div>
                        <div className={styles.previewInfo__subtitle}>Выпуск: <span>с {anime.aired_on} по {anime.released_on}</span></div>
                        <div className={styles.previewInfo__subtitle}>Эпизоды: <span> {anime.episodes_aired}/{anime.episodes} </span></div>
                        <div className={styles.previewInfo__subtitle}>Анонс: {anime.anons ? <span>Да</span> : <span>Нет</span>}</div>
                        <div className={styles.previewInfo__subtitle}>Выходит: {anime.ongoing ? <span>Да</span> : <span>Нет</span>} </div>
                        <div className={styles.previewInfo__subtitle}>Рейтинг: {anime.rating} </div>

                        <div className={styles.previewInfo__subtitle}>Жанры: <span className={styles.genres}> {anime.genres.map((el) => (
                            <div>{el.name},</div>
                        ))}</span></div>
                        <div className={styles.previewInfo__subtitle}>Студия: <span> {anime.studios.map((el) => (
                            <div>
                                <img src={`https://shikimori.one/${el.image}`} alt={el.name} className={styles.studios}/>
                            </div>
                        ))}</span></div>
                    </div>
                    <div className={styles.previewInfo__blockRate}>

                        <div >
                            <div className={styles.previewInfo__subtitle}>Оценки людей</div>
                            {anime.rates_scores_stats.map((el) => (
                                <div><img src={Star} alt="" /> {el.name} : <span>{el.value}</span> </div>
                            ))}
                        </div>
                        <div>
                            <div className={styles.previewInfo__subtitle}>В списках у людей</div>
                            {anime.rates_statuses_stats.map((el) => (
                                <div>{el.name}: <span>{el.value}</span> </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes}>
                {anime.description}
            </div>
            {isShow
                ? <MyButton clickHandler={changeHandler} className={styles.button}>Свернуть</MyButton>
                : <MyButton clickHandler={changeHandler} className={styles.button}>Читать дальше</MyButton>
            }
        </div>
    )
}
