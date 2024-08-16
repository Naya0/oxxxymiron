import React, { useState } from 'react';

import Icon from '../Icon/Icon';

const FooterForm = () => {
  const [state, setState] = useState('');

  const handleChange = ({ target: { value } }) => {
    setState(value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setState('');
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <p>онлифас оксимирона</p>
      <div className="footer-form__email">
        <input type="email" name="email" placeholder='Email' value={state} onChange={handleChange} />
        <button type="submit" className='footer-form__button'>
          <span>Подписаться</span>
          <Icon name='arrow-right' />
        </button>
      </div>
    </form>
  )
}

export default FooterForm