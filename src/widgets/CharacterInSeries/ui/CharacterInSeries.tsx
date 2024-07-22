import { FC } from 'react'
import { CharactersSeriesPreview } from 'entities/Cart'

import styles from './CharacterInSeries.module.scss'
import { ICharacter } from 'shared/types/characterType'

interface IProps {
  Character: ICharacter,
}

export const CharacterInSeries: FC<IProps> = ({ Character }) => {

  return (
    <div className={`${styles.series} container`}>
      <div className={styles.series__title}>
        Аниме
      </div>
      <CharactersSeriesPreview
        Character={Character}
        key={Character.id}
      />
    </div>
  )
}
