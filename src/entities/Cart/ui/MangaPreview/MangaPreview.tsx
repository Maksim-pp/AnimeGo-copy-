import { FC, useState } from 'react'

import styles from './MangaPreview.module.scss'
import { MyButton } from 'shared/index'

interface IProps {
    img: string,
    rate: string,
    title: string,
    name: string,
}

export const MangaPreview: FC<IProps> = ({img, name, rate, title, }) => {
    const [isShow, setIsShow] = useState(false)
    const classes = isShow ? `${styles.preview__description} ${styles.active}` : styles.preview__description

    const changeHandler = () => {
        setIsShow(pre => !pre)
    }

    return (
        <div className={styles.preview}>
            <img src={img} alt="" className={styles.preview__img} />
            <div className={styles.previewInfo}>
                <div className={styles.previewInfo__title}>
                    {title}
                </div>
                <div className={styles.previewInfo__subtitle}>
                    {name}
                </div>
                <div className={styles.previewInfo__block}>
                    <div className={styles.previewInfo__blockDescription}>
                        <div className={styles.previewInfo__subtitle}>Тип</div>
                        <div className={styles.previewInfo__subtitle}>Выпуск</div>
                        <div className={styles.previewInfo__subtitle}>Жанр</div>
                        <div className={styles.previewInfo__subtitle}>Издательство</div>
                        <div className={styles.previewInfo__subtitle}>Авторы</div>
                        <div className={styles.previewInfo__subtitle}>Главные герои</div>
                    </div>
                    {/* {
                        tag.map(el => (
                            <div key={el} className={styles}>
                                {el}
                            </div>
                        ))
                    } */}
                </div>
            </div>
            <div className={classes}>
                {/* {description} */}
            </div>
            {isShow 
                ? <MyButton clickHandler={changeHandler} className={styles.button}>Свернуть</MyButton> 
                : <MyButton clickHandler={changeHandler} className={styles.button}>Читать дальше</MyButton>
            }
        </div>
    )
}
