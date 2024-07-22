import { FC } from 'react'

import styles from './Character.module.scss'
import { Preloader } from 'shared/index'
import { ICharacter } from 'shared/types/characterType'

interface IProps {
    Character: ICharacter,
}

export const Characters: FC<IProps> = ({ Character }) => {

    
    const getDescription = () => {
        if (Character.description.length == 0) {
            return <div>Нет Описания</div>
        } else {
            return <div className={styles.characterInfo__description}>{Character.description}</div>
        }
    }

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
                {getDescription()}
            </div>
        </div>
    )
}
