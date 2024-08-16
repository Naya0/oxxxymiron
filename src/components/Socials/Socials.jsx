import React from 'react'
import { SOCIALS } from '../utils/constants'
import Icon from '../Icon/Icon'

const Socials = ({...rest}) => (
    <ul className='socials'>
        {SOCIALS.map(({ icon, link }) => (
            <li key={icon} className='socials-item' title='icon'>
                <a href={link} target='_blank'>
                    <Icon name={icon} {...rest}/>
                </a>
            </li>
        ))}
    </ul>
)

export default Socials