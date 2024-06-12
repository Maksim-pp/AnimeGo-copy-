import { FC } from 'react'

import styles from './ListCharacters.module.scss'
import { characters } from 'entities/Cart/constants'
import { CharactersPreview } from 'entities/Cart'

export const ListCharacters: FC = () => {
    return (
        <div className={`${styles.list} container`}>
            <div className={styles.list__title}>
                Аниме персонажи
            </div>
            <div className={styles.list__subtitle}>
                Ниже представлен весь список Аниме персонажей. Здесь найдете полную информацию о вашем любимом герое — рост, вес,
                сфера деятельности, картинки, фото, аниме в которых они участвовали, сейю которые их озвучивали и многое другое.
            </div>
            <div className={styles.listPreview}>
                {
                    characters.map(el => (
                        <CharactersPreview img={el.img} title={el.title} key={Date.now()} />
                    ))
                }
            </div>

        </div>
    )
}
