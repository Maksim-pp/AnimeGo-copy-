import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'shared/constants'
import Img from 'shared/assets/img/image.png'

import styles from './ErrorPage.module.scss'

export const ErrorPage: FC = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__404}>404</h1>
      <h2 className={styles.error__title}>Страница не найдена</h2>
      <p className={styles.error__text}>
        Скорее всего, вы попали сюда из-за опечатки в адресе страницы. Попробуйте <Link to={Routes.MAIN_PAGE}>
          <span className={styles.error__link}>вернуться на главную</span>
        </Link> или свяжитесь с администрацией сайта.
      </p>
      <div>
        <img src={Img} alt="404 error img" className={styles.error__img} />
      </div>
    </div>
  )
}
