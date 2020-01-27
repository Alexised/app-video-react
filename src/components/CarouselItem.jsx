import React from 'react';
import '../assets/styles/componets/Carrouselitem.scss';

const CarrouselItem = () => (
  <div className='carousel-item'>
    <img src='../assets/rock_al_parque.jpg' alt='People' className='carousel-item__img' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src='../assets/icon-play.png' width='30' alt='Play' />
        <img className='carousel-item__details--img' src='../assets/icon-plus.png' width='30' alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114</p>
    </div>
  </div>
);

export default CarrouselItem;
