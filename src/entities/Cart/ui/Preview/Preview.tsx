import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Star from 'shared/assets/icons/star.svg'

import styles from './Preview.module.scss'

//пропсы изменить под API и в тегах поменять
interface IProps {
    id: number,
    name: string,
    russian: string,
    image: string,
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes?: number,
    chapters?: number,
    released_on: string,
    aired_on:string,
    episodes?: number,
    episodes_aired?: number,
    path: string,
}

export const Preview: FC<IProps> = ({ 
    id,
    name,
    russian,
    image,
    url,
    kind,
    score,
    status,
    volumes,
    released_on,
    chapters,
    aired_on,
    path,
}) => {
    return (
        <div className={styles.preview}>
            <div>
                <div className={styles.previewRating}>
                    <img src={Star} alt="Рейтинг" />
                    <div className={styles.previewRating__text}>{score}</div>
                </div>
                <NavLink to={path + id} state={{
                    
                }}>
                    <div>
                        <img src={`https://shikimori.one/${image}`} alt="Баннер" className={styles.preview__img} />
                    </div>
                    
                </NavLink>
            </div>
            <div className={styles.previewInfo}>
                <div className={styles.previewInfo__title}>
                    <NavLink to={path + id} state={{
                    id,
                    name,
                    russian,
                    image,
                    url,
                    kind,
                    score,
                    status,
                    volumes,
                    released_on,
                    chapters,
                }}>
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
