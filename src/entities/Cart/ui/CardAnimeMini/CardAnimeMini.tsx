import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './CardAnimeMini.module.scss'

// изменить пропсы
interface IProps {
    img: string,
    title: string,
    text:string,
    series: string,
}

export const CardAnimeMini:FC<IProps> = ({img, series, text, title}) => {
  return (
    <div className={styles.card}>
        <img src={img} alt="" className={styles.card__img}/>
        <div>
            <div className={styles.cardInfo}>
                <div className={styles.cardInfo__title}>
                    <NavLink to={''}>
                        {title}
                    </NavLink>
                </div>
                <div className={styles.cardInfo__text}>
                    {text}
                </div>
                <div className={styles.cardInfo__text}>
                    {series}
                </div>
            </div>
        </div>
    </div>
  )
}
