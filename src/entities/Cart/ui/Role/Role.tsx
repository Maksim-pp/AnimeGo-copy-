import { FC } from 'react'
import { IMangaRoles } from 'shared/types/mangaRolesType'

import styles from './Role.module.scss'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/constants'

//добавить типы к ролям в аниме через аператор "|"

interface IProps {
    Role?: IMangaRoles[]
}

export const Role: FC<IProps> = ({ Role }) => {

    return (
        <div className={styles.role}>
            <h2 className={styles.role__title}>Главные герои и Авторы</h2>
            <div className={styles.role__list}>
                {Role?.map((el) => (
                    <div>
                        {
                            el.character == null ? <div></div> : <div>
                                <NavLink to={Routes.CHARACTER} state={{id : el.character?.id}}>
                                    <img src={`https://shikimori.one/${el.character.image.x96}`} alt="" />
                                    <div className={styles.subtitle}>{el.character.russian}</div>
                                    <div className={styles.subtitle}>{el.roles_russian}</div>
                                </NavLink>
                                <a href={`https://shikimori.one/${el.url}`} target="_blank">Ссылка на источник</a>
                            </div>
                        }
                        {
                            el.person == null ? <div></div> : <div>
                                <NavLink to={Routes.CHARACTER} state={el.person?.id}>
                                    <img src={`https://shikimori.one/${el.person.image.x96}`} alt="" />
                                    <div className={styles.subtitle}>{el.person.russian}</div>
                                    <div className={styles.subtitle}>{el.roles_russian}</div>
                                </NavLink>
                                <a href={`https://shikimori.one/${el.url}`} target="_blank">Ссылка на источник</a>
                            </div>
                        }
                    </div>
                ))
                }
            </div>
        </div>
    )

}
