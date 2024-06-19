import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/constants'

import styles from './CharactersPreview.module.scss'

interface IProps {
    img: string,
    title: string,
    subtitle: string,
    description: string,
    role: string,
    serial_title: string,
    serial_title_eng: string,
    tag: string[],
    actor_img: string,
    actor_name: string,
    actor_age: string,
    rate: string,
    img_serial: string
}

export const CharactersPreview:FC<IProps> = ({img, title, subtitle, description, actor_age, actor_img, actor_name, rate, role, serial_title, serial_title_eng, tag, img_serial}) => {
  return (
    <div className={styles.characters}>
        <NavLink 
            to={`${Routes.CHARACTERS}` + title} 
            state={{
                img: img,
                title: title,
                subtitle: subtitle,
                description: description,
                actor_age: actor_age, 
                actor_img: actor_img, 
                actor_name: actor_name, 
                rate: rate, 
                role: role, 
                serial_title: serial_title, 
                serial_title_eng: serial_title_eng, 
                tag: tag,
                img_serial: img_serial
            }}
        >
            <div>
                <img src={img} alt="" className={styles.characters__img}/>
            </div>
        </NavLink>
        <NavLink 
            to={`${Routes.CHARACTERS}` + title} 
            state={{
                img: img,
                title: title,
                subtitle: subtitle,
                description: description,
                actor_age: actor_age, 
                actor_img: actor_img, 
                actor_name: actor_name, 
                rate: rate, 
                role: role, 
                serial_title: serial_title, 
                serial_title_eng: serial_title_eng, 
                tag: tag,
                img_serial: img_serial
            }}
        >
            <h2 className={styles.characters__title}>
                {title}
            </h2>
        </NavLink>
    </div>
  )
}
