import React from 'react'
import FilterProduk from './FilterProduk';
import ListProduk from './ListProduk';

import NavProduk from './NavProduk';

const Produk = () => {
  return (
    <section className="w-full px-16 mt-20">
      <NavProduk/>
      <div className='w-full flex'>
        <FilterProduk/>
        <ListProduk/>
      </div>
    </section>
  );
}

export default Produk