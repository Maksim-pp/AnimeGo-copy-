import  { FC } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './Character.module.scss'

export const Character:FC = () => {
    const location = useLocation()
    const { img, title, subtitle, description} = location.state

    
    const getDescription = ()=> {
        if(description.length == 0) {
        return <div>Нет Описания</div>
    } else {
        return <div className={styles.characterInfo__description}>{description}</div>
    }
}

  return (
    <div className={`${styles.character} container`}>
        <img src={img} alt="" className={styles.character__img}/>
        <div className={styles.characterInfo}>
            <div className={styles.characterInfo__title}>
                {title}
                <div className={styles.characterInfo__subtitle}>
                    {subtitle}
                </div>
            </div>
            <div className={styles.characterInfo__titleDescription}>
                Описание
            </div>
            { getDescription() }
        </div>
    </div>
  )
}
