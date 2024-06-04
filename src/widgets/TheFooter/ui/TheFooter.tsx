import { FC } from 'react'
import { about } from '../constants'

import styles from './TheFooter.module.scss'

export const TheFooter: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styles.info} container`}>
                <ul className={styles.infoList}>
                    {
                        about.map(({ title, url, icon, isMail }) => (
                            <li key={url} >
                                {isMail ? (
                                    <a href={`mailto:${url}`} className={styles.infoList__link}>
                                        <img src={icon} alt="" className={styles.icon} />
                                        <div>{title}</div>
                                    </a>
                                ) : (
                                    <a href={url} target="_blank" className={styles.infoList__link}>
                                        <img src={icon} alt="" className={styles.icon} />
                                        <div>{title}</div>
                                    </a>
                                )}
                            </li>
                        ))
                    }
                </ul>
                <div>© AnimeGoCopy 2024</div>
            </div>

        </div>
    )
}
