import { FC } from 'react'
import { Characters } from 'widgets/Character'
import { CharacterInSeries } from 'widgets/CharacterInSeries'
import { useAppSelector } from 'app/store/AppStore'

import styles from './CharacterPage.module.scss'
import { Preloader } from 'shared/index'

export const CharacterPage: FC = () => {
  const {Character, Error, isLoading} = useAppSelector(state => state.Character)
  
  if (isLoading) {
    return (
        <section className='preloader'>
            <Preloader />
        </section>
    )
}
if (Error) { return <section className='error'>Ивините! Произошла ошибка</section> }

  return (
    <div className={styles.character}>
      <Characters key={Character.id} Character={Character} />
      <CharacterInSeries key={Character.id}  Character={Character}  />
    </div>
  )
}
