import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';

import Section from '../Section/Section';
import image from '../../images/news.png';
import { Navigation } from 'swiper/modules';
import Icon from '../../components/Icon/Icon';

import { SLIDER_BUTTON_TYPES, NEWS } from '../utils/constants';

import 'swiper/css'

const News = () => {
    const { PREV, NEXT } = SLIDER_BUTTON_TYPES;

    const sliderRef = useRef();

    const dispatch = useDispatch();

    const handleButtonClick = useCallback(
        (type) => {
            if (!sliderRef.current) return;

            const { swiper } = sliderRef.current;

            type === NEXT ? swiper.slideNext() : swiper.slidePrev();
        },
        [NEXT]
    );



    return (
        <Section className='news-section'>
            <div className="container">
                <Swiper
                    ref={sliderRef} 
                    spaceBetween={24} 
                    slidesPerView={4} 
                    className='news' 
                    navigation modules={[Navigation]}
                >
                    {
                        NEWS.map(({ title, id }, i) => (
                            <SwiperSlide key={id}>
                                <ScrollAnimation animateIn='fadeIdLeft' animateOut='fadeOutRight' delay={i * 100}>
                                    <div className="news-item">
                                        <Link to={`/news/${id}`} >
                                            <div className="news-item__img">
                                                <img src={image} alt={title} />
                                            </div>
                                            <h3 className="news-item__title">{title}</h3>
                                        </Link>
                                    </div>
                                </ScrollAnimation>
                            </SwiperSlide>
                        ))}
                    <div className="navigation">
                        <div className="navigation-button navigation-prev"  onClick={() => handleButtonClick(PREV)}>
                            <Icon name='slider-arrow' />
                        </div>
                        <div className="navigation-button navigation-next"  onClick={() => handleButtonClick(NEXT)}>
                            <Icon name='slider-arrow' />
                        </div>
                    </div>
                </Swiper>
            </div>
        </Section>
    )
}

export default News