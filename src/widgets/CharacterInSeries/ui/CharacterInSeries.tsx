import { FC } from 'react'
import { CharactersSeriesPreview } from 'entities/Cart'
import { useLocation } from 'react-router-dom'

import styles from './CharacterInSeries.module.scss'

export const CharacterInSeries:FC = () => {
    const location = useLocation()
    const { actor_age, actor_img, actor_name, rate, role, serial_title, serial_title_eng, tag, img_serial} = location.state
  return (
    <div className={`${styles.series} container`}>
        <div className={styles.series__title}>
            Аниме
        </div>
        <CharactersSeriesPreview 
            img_serial={img_serial}
            actor_age={actor_age}
            actor_img={actor_img}
            actor_name={actor_name}
            rate={rate}
            role={role}
            serial_title={serial_title} 
            serial_title_eng={serial_title_eng}
            tag={tag}
            key={Date.now()}
        />
    </div>
  )
}
