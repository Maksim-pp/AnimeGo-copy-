import { FC, useState } from 'react'
import { IManga, } from 'shared/types/mangaType'
import { IMangaRoles } from 'shared/types/mangaRolesType'
import { MyButton } from 'shared/index'
import Star from 'shared/assets/icons/star.svg'

import styles from './MangaPreview.module.scss'

interface IProps {
    manga: IManga
}

export const MangaPreview: FC<IProps> = ({ manga }) => {
    const [isShow, setIsShow] = useState(false)
    const classes = isShow ? `${styles.preview__description} ${styles.active}` : styles.preview__description

    const changeHandler = () => {
        setIsShow(pre => !pre)
    }

    return (
        <div className={styles.preview}>
            <img src={`https://shikimori.one/${manga.image.original}`} alt="" className={styles.preview__img} />
            <div className={styles.previewInfo}>
                <div className={styles.score}>
                    <img src={Star} alt="" />
                    {manga.score}
                </div>
                <div className={styles.previewInfo__title}>
                    {manga.russian}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {manga.name}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {manga.english}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {manga.japanese}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {manga.synonyms}
                </div>
                <div className={styles.previewInfo__block}>
                    <div className={styles.previewInfo__blockDescription}>
                        <div className={styles.previewInfo__subtitle}>Тип: <span>{manga.kind}</span></div>
                        <div className={styles.previewInfo__subtitle}>Статус: <span>{manga.status}</span></div>
                        <div className={styles.previewInfo__subtitle}>Выпуск: <span>с {manga.aired_on} по {manga.released_on}</span></div>
                        <div className={styles.previewInfo__subtitle}>Тома и Главы: <span>{manga.volumes} томов, {manga.chapters} глав</span></div>
                        <div className={styles.previewInfo__subtitle}>Анонс: {manga.anons ? <span>Да</span> : <span>Нет</span>}</div>
                        <div className={styles.previewInfo__subtitle}>Выходит: {manga.ongoing ? <span>Да</span> : <span>Нет</span>}</div>
                        <div className={styles.previewInfo__subtitle}>Жанры: <span className={styles.genres}>{manga.genres.map((el) => (
                            <div>{el.name},</div>
                        ))}</span></div>
                        <div className={styles.previewInfo__subtitle}>Студия: <span>{manga.publishers.map((el) => (
                            <div>
                                {el.name}
                            </div>
                        ))}</span></div>
                    </div>
                    <div className={styles.previewInfo__blockRate}>

                        <div >
                            <div className={styles.previewInfo__subtitle}>Оценки людей</div>
                            {manga.rates_scores_stats.map((el) => (
                                <div><img src={Star} alt="" /> {el.name} : <span>{el.value}</span> </div>
                            ))}
                        </div>
                        <div >
                            <div className={styles.previewInfo__subtitle}>В списках у людей</div>
                            {manga.rates_statuses_stats.map((el) => (
                                <div>{el.name}: <span>{el.value}</span> </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes}>
                {manga.description}
            </div>
            {isShow
                ? <MyButton clickHandler={changeHandler} className={styles.button}>Свернуть</MyButton>
                : <MyButton clickHandler={changeHandler} className={styles.button}>Читать дальше</MyButton>
            }
        </div>
    )
}
