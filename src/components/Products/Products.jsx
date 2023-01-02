import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../elements/ProductCard/ProductCard';
import noski1 from '../../assets/noski1.webp';
import noski2 from '../../assets/noski2.webp';
import noski3 from '../../assets/noski3.webp';
import noski4 from '../../assets/noski4.webp';

import './Products.css';

const Products = () => {
  return (
    <div className='main_container'>
      <h2>Наші товари</h2>

      <div className='items_block'>
        <ProductCard img={noski1} title='nosok1' price='300 грн' />
        <ProductCard img={noski2} title='nosok2' price='200 грн' />
        <ProductCard img={noski3} title='nosok3' price='300 грн' />
        <ProductCard img={noski4} title='nosok4' price='400 грн' />
        <ProductCard img={noski1} title='nosok5' price='300 грн' />
      </div>
      <div className='items_block'>
        <ProductCard img={noski1} title='nosok1' price='300 грн' />
        <ProductCard img={noski2} title='nosok2' price='200 грн' />
        <ProductCard img={noski3} title='nosok3' price='300 грн' />
        <ProductCard img={noski4} title='nosok4' price='400 грн' />
        <ProductCard img={noski1} title='nosok5' price='300 грн' />
      </div>
      <div className='items_block'>
        <ProductCard img={noski1} title='nosok1' price='300 грн' />
        <ProductCard img={noski2} title='nosok2' price='200 грн' />
        <ProductCard img={noski3} title='nosok3' price='300 грн' />
        <ProductCard img={noski4} title='nosok4' price='400 грн' />
        <ProductCard img={noski1} title='nosok5' price='300 грн' />
      </div>
      <div className='items_block'>
        <ProductCard img={noski1} title='nosok1' price='300 грн' />
        <ProductCard img={noski2} title='nosok2' price='200 грн' />
        <ProductCard img={noski3} title='nosok3' price='300 грн' />
        <ProductCard img={noski4} title='nosok4' price='400 грн' />
        <ProductCard img={noski1} title='nosok5' price='300 грн' />
      </div>
      <div className='redirect_container'>
        <Link className='kill_link' to='/contacts'>
          <h3>Звʼязатися з нами &#8594;</h3>
        </Link>
      </div>
    </div>
  );
};

export default Products;
