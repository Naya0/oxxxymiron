import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import Icon from '../Icon/Icon';
import track from '../../images/tracks1.png';

import { TRACKS } from '../utils/constants';


const Tracks = () => {
    // const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const handleTrackClick = (track) => {
        setPlaying(prev => !prev);
        setCurrentTrack(track);

        // setPlaying((prev) => {
        //     const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;

        //     audio.src = track.link.url;
        //     !isPlaying ? audio.pause() : audio.play();

        //     return isPlaying;
        // });
        // setCurrentTrack(track);


    };

    // useEffect(() => {
    //     return () => {
    //       audio.pause();
    //     };
    //   }, [audio]);


    return (
        <Section className='tracks-section'>
            <div className="container">
                <SectionTitle text='Релизы' />
                <div className="tracks">

                    {

                        TRACKS.filter((_, i) => i < 3).map(({ date, title, id }, i) => (

                            <ScrollAnimation
                                key={id}
                                className="track-item"
                                animateIn="fadeInLeft"
                                animateOut="fadeOutRight"
                            >
                                <div className="track" onClick={() => handleTrackClick(id)}>
                                    <div className="track-image">
                                        <img src={track} alt={title} />

                                        {!!playing && currentTrack === id && <Icon name='pause' />}
                                    </div>
                                    <p className="track-date">{date}</p>
                                    <h3 className='track-title'>{title}</h3>
                                </div>
                            </ScrollAnimation>
                        ))
                    }
                </div>
                <Link to='/tracks' className='button-more'>Все треки</Link>
            </div>
        </Section>
    )
}

export default Tracks