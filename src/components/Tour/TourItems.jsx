import React from 'react';
import { Link } from 'react-router-dom';


import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import TourItem from './TourItem';

import { TOURS } from '../utils/constants';


const TourItems = () => {
  return (
    <Section className='tour'>
      <div className="container">
        <SectionTitle text='Концерты' />

        <ul>
          {
            TOURS.map((item, i) => (
              <TourItem  {...item} key={item.id} i={i} />
            ))
          }
        </ul>
        <Link to='/tour' className='button-more'>Все Концерты</Link>
      </div>
    </Section>
  )
}

export default TourItems