import React from 'react'

const ItemProduk = () => {
  return (
    <div className="w-[24%] space-y-3">
      <div className="w-full h-80 bg-gray-400">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-full font-Helvetica">
        <h3 className="flex text-orange-400">Just In</h3>
        <h2 className="text-lg mb-2">Nike Dunk Low Retro SE</h2>
        <p className="text-gray-400">Mens Shoe</p>
        <p className="text-gray-400">1 Colous</p>
        <p>RP. 1,828,000</p>
      </div>
    </div>
  );
}

export default ItemProduk