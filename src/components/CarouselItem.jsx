import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/componets/Carrouselitem.scss';
import playIcon from '../assets/static/icon-play.png';
import plusIcon from '../assets/static/icon-plus.png';

const CarrouselItem = ({ cover, title, year, contenRating, duration }) => (
  <div className='carousel-item'>
    <img src={cover} className='carousel-item__img' alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} width='30' alt='Play' />
        <img className='carousel-item__details--img' src={plusIcon} width='30' alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contenRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contenRating: PropTypes.string,
  duration: PropTypes.number,

};

export default CarrouselItem;
