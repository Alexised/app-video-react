import React from 'react';
import '../assets/styles/componets/Header.scss';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src='/assets/logo-platzi-video-BW2.png'
      alt='video'
    />
    <div className='header__img'>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src='/assets/user-icon.png' alt='user' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
