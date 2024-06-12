import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { cartSlidePreview } from 'entities/Cart/constants';
import { SlidePreview } from 'entities/Cart';

import styles from './Slider.module.scss'
import 'swiper/scss';

const breakpoints = {
    320: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,
    },
    1440: {
        slidesPerView: 7,
    },
};

export const Slider: FC = () => {
    return (
        <div className={styles.slider}>
            <h1 className={`${styles.title} container`}>
                <NavLink to={''}>
                    Аниме "этого" сезона
                </NavLink>
            </h1>
            <Swiper
                breakpoints={breakpoints}
                spaceBetween={30}
                slidesPerView={7}
                onSlideChange={() => console.log()}
                onSwiper={() => console.log()}
                className='container'
            >
                {
                    cartSlidePreview.map(el => (
                        <SwiperSlide>
                            <SlidePreview key={el.title} img={el.img} rate={el.rate} title={el.title} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
