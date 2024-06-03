import React from 'react'
import './ProductCard.css'
function ProductCard({product}) {
  return (
    <div className="productCard w-60 m-3 transition-all cursor-pointer">
      <div className="h-80">
        <img className="h-full w-full object-cover object-left-top" src={product.imageUrl} alt="" />
      </div>

      <div className="textPart bg-slate-400 p-3">
        <div>
            <p className="font-bold opacity-60 truncate">{product.title} </p>
            <p >{product.brand}</p>
        </div>
        <div className=" flex items-center space-x-2 font-semibold">
            <p>{product.selling_price}</p>
            <p className='line-through opacity-50'>{product.price}</p>
            <p className='text-green-600'>{product.disscount}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
