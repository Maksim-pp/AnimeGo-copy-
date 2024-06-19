import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Star from 'shared/assets/icons/star.svg'

import styles from './CharactersSeriesPreview.module.scss'


interface IProps {
    role: string,
    serial_title: string,
    serial_title_eng: string,
    tag: string[],
    actor_img: string,
    actor_name: string,
    actor_age: string,
    rate: string,
    img_serial:string
}

export const CharactersSeriesPreview: FC<IProps> = ({actor_age, actor_img, actor_name, role, serial_title, serial_title_eng, tag, rate, img_serial}) => {
    return (
        <div className={styles.preview}>
            <div>
                <div className={styles.previewRating}>
                    <img src={Star} alt="Рейтинг" />
                    <div className={styles.previewRating__text}>{rate}</div>
                </div>
                <NavLink to={''}>
                    <div>
                        <img src={img_serial} alt="Баннер" className={styles.preview__img} />
                    </div>
                </NavLink>
            </div>
            <div className={styles.previewInfo}>
                <div className={styles.previewInfo__text}>
                    {role}
                </div>
                <div className={styles.previewInfo__title}>
                    <NavLink to={''}>
                        {serial_title}
                    </NavLink>
                </div>
                <div className={styles.previewInfo__text}>
                    {serial_title_eng}
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
                <div className={styles.previewInfo__text}>
                    Сэйю
                </div>
                <div className={styles.previewInfo__actor}>
                    <NavLink to={''}>
                        <div>
                            <img src={actor_img} alt="Баннер" className={styles.previewInfo__actorImg} />
                        </div>
                    </NavLink>
                    <div>
                        <div className={styles.previewInfo__actorTitle}>
                            <NavLink to={''}>
                                {actor_name}
                            </NavLink>
                        </div>
                        <div className={styles.previewInfo__text}>
                            {actor_age}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
