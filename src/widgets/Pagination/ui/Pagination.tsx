import { FC } from 'react'
import { MyButton } from 'shared/index'

import styles from './Pagination.module.scss'

interface IProps {
    page: number,
    next: ()=> void,
    prev: ()=> void,
}

export const Pagination: FC<IProps> = ({page, next, prev}) => {
    return (
        <div>
            <MyButton className={styles.button} clickHandler={prev}>
                Назад
            </MyButton>
            {page}
            <MyButton className={styles.button} clickHandler={next}>
                Вперёд
            </MyButton>
        </div>
    )
}
