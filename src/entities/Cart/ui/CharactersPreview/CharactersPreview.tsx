import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './CharactersPreview.module.scss'

interface IProps {
    img: string,
    title: string,
}

export const CharactersPreview:FC<IProps> = ({img, title}) => {
  return (
    <div className={styles.characters}>
        <NavLink to={''}>
            <div>
                <img src={img} alt="" className={styles.characters__img}/>
            </div>
        </NavLink>
        <NavLink to={''}>
            <h2 className={styles.characters__title}>
                {title}
            </h2>
        </NavLink>
    </div>
  )
}
