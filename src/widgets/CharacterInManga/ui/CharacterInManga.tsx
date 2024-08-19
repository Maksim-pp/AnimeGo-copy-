import { FC } from 'react'
import { ICharacter } from 'shared/types/characterType'

import styles from './CharacterInManga.module.scss'
import { CharacterMangaPreview } from 'entities/Cart'


interface IProps {
    Character: ICharacter
}

export const CharacterInManga: FC<IProps> = ({Character}) => {
    return (
        <div className={`${styles.series} container`}>
            <div className={styles.series__title}>
                Манга
            </div>
            <CharacterMangaPreview Character={Character}/>
        </div>
    )
}
