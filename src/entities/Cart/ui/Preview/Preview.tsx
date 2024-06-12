import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Star from 'shared/assets/icons/star.svg'

import styles from './Preview.module.scss'

//пропсы изменить под API и в тегах поменять
interface IProps {
    img: string,
    rate: string,
    title: string,
    name: string,
    tag: string[],
    description: string,
}

export const Preview: FC<IProps> = ({ description, img, name, rate, tag, title }) => {
    return (
        <div className={styles.preview}>
            <div>
                <div className={styles.previewRating}>
                    <img src={Star} alt="Рейтинг" />
                    <div className={styles.previewRating__text}>{rate}</div>
                </div>
                <NavLink to={''}>
                    <div>
                        <img src={img} alt="Баннер" className={styles.preview__img} />
                    </div>
                    
                </NavLink>
            </div>
            <div className={styles.previewInfo}>
                <div className={styles.previewInfo__title}>
                    <NavLink to={''}>
                        {title}
                    </NavLink>
                </div>
                <div className={styles.previewInfo__name}>
                    {name}
                </div>
                <div className={styles.previewInfo__tag}>
                    {
                        tag.map(el => (
                            <div className={styles.previewInfo__tagItem}>
                                <NavLink to={''}>{el}</NavLink>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.previewInfo__description}>
                    {description}
                </div>
            </div>
        </div>
    )
}
