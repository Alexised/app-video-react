import React from 'react';
import '../assets/styles/componets/Categories.scss';

const Categories = ({ children }) => (
  <div className='category'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categories;
