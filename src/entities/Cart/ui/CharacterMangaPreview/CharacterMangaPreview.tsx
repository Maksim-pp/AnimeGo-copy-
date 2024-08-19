import { FC } from 'react'
import { ICharacter } from 'shared/types/characterType'
import Star from 'shared/assets/icons/star.svg'

import styles from './CharacterMangaPreview.module.scss'

interface IProps {
    Character: ICharacter,
}

export const CharacterMangaPreview: FC<IProps> = ({ Character }) => {
    return (
        <div>
            {
                Character.mangas.map((el) => (
                    <div key={el.id} className={styles.preview}>
                        <div>
                            <div className={styles.previewRating}>
                                <img src={Star} alt="Рейтинг" />
                                <div className={styles.previewRating__text}>{el.score}</div>
                            </div>
                            <div>
                                <img src={`https://shikimori.one/${el.image.original}`} alt="Баннер" className={styles.preview__img} />
                            </div>
                        </div>
                        <div className={styles.previewInfo}>
                            <div className={styles.previewInfo__title}>
                                {el.russian}
                            </div>
                            <div className={styles.previewInfo__text}>
                                {el.name}
                            </div>

                            <div className={styles.previewInfo}>
                                <div><span className={styles.previewInfo__text}>Тип:</span> <span>{el.kind}</span></div>
                                <div><span className={styles.previewInfo__text}>Статус:</span> <span>{el.status}</span> c {el.aired_on}</div>
                            </div>
                            <div>
                                <a href={`https://shikimori.one/${el.url}`} target="_blank">Ссылка на источник</a>
                            </div>
                        </div>
                    </ div>
                ))
            }
        </div>
    )
}
