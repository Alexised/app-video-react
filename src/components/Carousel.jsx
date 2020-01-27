import React from 'react';
import '../assets/styles/componets/Carrousel.scss';

const Carrousel = ({children}) => (
  <section className='carousel'>
    <div className='carousel_container'>
      {children}
    </div>
  </section>
);

export default Carrousel;
