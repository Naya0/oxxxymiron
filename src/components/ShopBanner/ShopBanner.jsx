import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section/Section';
import logo from '../../images/oxxxyshop.webp';
import banner from '../../images/banner.webp';

const ShopBanner = () => {
    return (
        <Section className='shop-banner__section'>
            <div className="container">
                <div className="shop-banner_wrapper">
                    <Link to='/shop' className='shop-banner'>
                        <ScrollAnimation className='shop-banner__text' animateIn='fadeInLeft' animateOut='fadeOutLeft'>
                            <p className="shop-banner__subtitle">обновленный мерч оксимирона</p>
                            <p className="shop-banner__title">oxxxyshop 2.0</p>
                        </ScrollAnimation>
                        <ScrollAnimation className='shop-banner__logo' animateIn='fadeInRight' animateOut='fadeOutRight'>
                            <img src={logo} alt="Оксишоп логотип" className='shop-logo' />
                        </ScrollAnimation>
                        <ScrollAnimation className='shop-banner__image' animateIn='fadeInRight' animateOut='fadeOutRight'>
                            <img src={banner} alt="Оксимирон" />
                        </ScrollAnimation>
                    </Link>
                </div>
            </div>
        </Section>
    )
}

export default ShopBanner