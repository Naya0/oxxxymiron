import React from 'react'
import Icon from '../Icon/Icon'
import ScrollAnimation from "react-animate-on-scroll";

const TourItem = ({ date, place, city, soldOut, i }) => {

    return (
        <li>
            <ScrollAnimation
                animateIn='fadeInLeft'
                animateOut='fadeOutRight'
                delay={i * 100}
                offset={260}
            >
                <div className='tour-item'>
                    <div className='tour-item__info'>
                        <span className="tour-item__date">{date}</span>
                        <p className='tour-item__place'>{place}</p>
                    </div>
                    <p className='tour-item__city'>{city}</p>
                    <a href="#" className={soldOut ? 'tour-item__button' : 'tour-item__soldout-title'} >
                        {
                            soldOut ? (
                                <>
                                    <span>Билеты</span>
                                    <Icon name='arrow-right' />
                                </>
                            ) : (
                                <span>Билеты распроданы</span>
                            )
                        }
                    </a>
                </div>
            </ScrollAnimation >
        </li>
    )
}

export default TourItem