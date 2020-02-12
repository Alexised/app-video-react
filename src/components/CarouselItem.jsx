import React from 'react';
import '../assets/styles/componets/Carrouselitem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';
import imgrock from '../assets/static/rock_al_parque.jpg';


const CarrouselItem = () => (
  <div className='carousel-item'>
    <img src={imgrock} alt='People' className='carousel-item__img' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} width='30' alt='Play' />
        <img className='carousel-item__details--img' src={plusIcon} width='30' alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114</p>
    </div>
  </div>
);

export default CarrouselItem;
