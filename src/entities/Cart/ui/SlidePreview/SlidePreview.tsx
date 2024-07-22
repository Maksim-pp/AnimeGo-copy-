import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Star from 'shared/assets/icons/star.svg'

import styles from './SlidePreview.module.scss'

//с пропсами временное решение, изменить потом при добавлении API
interface IProps {
    score: number | string,
    img: string,
    title: string,
}

export const SlidePreview:FC<IProps> = ({img, score, title}) => {
  return (
    <div className={styles.slide}>
        <div className={styles.slideRating}>
            <img src={Star} alt="Рейтинг" />
            <div className={styles.slideRating__text}>{score}</div>
        </div>
        <NavLink to={''}>
            <img src={`https://shikimori.one/${img}`} alt="Баннер" className={styles.slide__img} />
        </NavLink>
        <NavLink to={''}>
            <h2 className={styles.slide__title}>{title}</h2>
        </NavLink>
    </div>
  )
}
