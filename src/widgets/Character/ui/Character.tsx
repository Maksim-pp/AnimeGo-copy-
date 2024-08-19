import { FC } from 'react'

import styles from './Character.module.scss'
import { ICharacter } from 'shared/types/characterType'

interface IProps {
    Character: ICharacter,
}

export const Characters: FC<IProps> = ({ Character }) => {

    return (
        <div className={`${styles.character} container`}>
            <img src={`https://shikimori.one/${Character.image.original}`} alt="" className={styles.character__img} />
            <div className={styles.characterInfo}>
                <div className={styles.characterInfo__title}>
                    {Character.russian}
                    <div className={styles.characterInfo__subtitle}>
                        {Character.name}
                    </div>
                    <div className={styles.characterInfo__subtitle}>
                        {Character.japanese}
                    </div>
                </div>
                <div className={styles.characterInfo__titleDescription}>
                    Описание
                </div>
            </div>
        </div>
    )
}
