import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Star from 'shared/assets/icons/star.svg'
import { ICharacter } from 'shared/types/characterType'

import styles from './CharactersSeriesPreview.module.scss'


interface IProps {
    Character: ICharacter,

}

export const CharactersSeriesPreview: FC<IProps> = ({ Character, }) => {
    return (
        <div>
            {
                Character.animes.map((el) => (
                    <div className={styles.preview}>
                        <div>
                            <div className={styles.previewRating}>
                                <img src={Star} alt="Рейтинг" />
                                <div className={styles.previewRating__text}>{el.score}</div>
                            </div>
                            <NavLink to={''}>
                                <div>
                                    <img src={`https://shikimori.one/${el.image.original}`} alt="Баннер" className={styles.preview__img} />
                                </div>
                            </NavLink>
                        </div>
                        <div className={styles.previewInfo}>
                            <div className={styles.previewInfo__title}>
                                <NavLink to={''}>
                                    {el.russian}
                                </NavLink>
                            </div>
                            <div className={styles.previewInfo__text}>
                                {el.role}
                            </div>

                            <div className={styles.previewInfo__text}>
                                {el.name}
                            </div>
                            <div className={styles.seyu}>
                                {
                                    Character.seyu.map((el) => (

                                        <div>
                                            <div className={styles.previewInfo__text}>
                                                Сэйю
                                            </div>
                                            <div className={styles.previewInfo__actor}>
                                                <NavLink to={''}>
                                                    <div>
                                                        <img src={`https://shikimori.one/${el.image.original}`} alt="Баннер" className={styles.previewInfo__actorImg} />
                                                    </div>
                                                </NavLink>
                                                <div>
                                                    <div className={styles.previewInfo__actorTitle}>
                                                        {el.name}
                                                    </div>
                                                    <div className={styles.previewInfo__actorTitle}>
                                                        {el.russian}
                                                    </div>
                                                    <div className={styles.previewInfo__text}>
                                                        <a href={`https://shikimori.one/${el.url}`} target="_blank" rel="noopener noreferrer">
                                                            Ссылка на источник
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>



    )
}
