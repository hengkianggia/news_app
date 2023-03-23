import React from 'react'

const ItemProduk = ({img,title,overview,rating,realease}) => {
  return (
    <div className="w-[24%] space-y-3 relative overflow-hidden rounded-xl">
      <div className="w-full h-96">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center rounded-xl"
        />
        <div className='w-10 h-10 absolute top-0 right-0 bg-yellow-400 text-black grid place-items-center text-lg font-Helvetica font-semibold'>{rating}</div>
      </div>

      <div className="w-full font-Helvetica">
        {/* <h3 className="flex text-orange-400">Rating: {rating}</h3> */}
        <h2 className="text-xl mb-2">{title}</h2>
        {/* <p className="text-gray-400 mb-2 truncate">{overview}</p> */}
        <p>{realease}</p>
      </div>
    </div>
  );
}

export default ItemProduk