import React from 'react';
import '../assets/styles/componets/Categories.scss';

const Categories = ({ children , title }) => (
  <div className='category'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
