import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.webp';


const Logo = () => (
        <div className='logo'>
            <Link to='/' >
                <img src={logo} alt="Логотип oxxxymiron" />
            </Link>
        </div>
    )


export default Logo