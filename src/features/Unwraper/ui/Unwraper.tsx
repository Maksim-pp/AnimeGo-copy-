import { FC, useState } from 'react'
import { MyButton } from 'shared/index'

import { SeriesUpdateCard } from 'entities/Cart'
import { cartSeries } from 'entities/Cart/constants/cartSeries'
import { useSpring } from 'react-spring'

import styles from './Unwraper.module.scss'
//добавить пропсы по API

interface IProps {
    title: string,
    data: ISerial[],
}

type ISerial = {
    img: string; 
    title: string; 
    series: string; 
    text: string;
}

export const Unwraper: FC<IProps> = ({ title, data}) => {

    const [isShow, setIsShow] = useState(false)

    const clickHandler = () => {
        setIsShow(pre => !pre)
        useSpring({
            
        })
    }

    return (
        <div className={styles.unwraper}>
            <div className={styles.unwraperTitle}>
                <div className={styles.unwraperTitle__text}>
                    {title}
                </div>
                {
                    isShow === false
                        ?
                        (<MyButton className={styles.button} clickHandler={clickHandler}> Развернуть</MyButton>)
                        :
                        (<MyButton className={styles.button} clickHandler={clickHandler}> Свернуть</MyButton>)
                }
            </div>
            {
                isShow &&
                <div className={styles.popup}>
                    {
                        data.map(el => (
                            <SeriesUpdateCard img={el.img} series={el.series} title={el.title} text={el.text} key={Date.now()} />
                        ))
                    }
                </div>
            }
        </div>
    )
}
