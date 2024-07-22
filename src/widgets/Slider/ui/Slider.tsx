import { FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { Preloader } from 'shared/index';
import { SlidePreview } from 'entities/Cart';

import styles from './Slider.module.scss'
import 'swiper/scss';
import { useAppSelector } from 'app/store/AppStore';

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    425: {
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
    let { Error, animeSeason, isLoading} = useAppSelector(state => state.AnimeSeason)
    
    if (isLoading)
        return (
            <section className='preloader'>
                <Preloader />
            </section>
        );
    if (Error) return <section className='error'>Ивините! Произошла ошибка</section>;

    return (
        <div className={styles.slider}>
            <h1 className={`${styles.title} container`}>
                <NavLink to={''}>
                    Сейчас на экранах
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
                    animeSeason.map(el => (
                        <SwiperSlide>
                            <SlidePreview key={el.id} img={el.image.original} score={el.score} title={el.name}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
