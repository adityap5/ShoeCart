import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden max-h-80 w-60 mt-8 ml-5">
      <div className="h-60 w-48">
            <img className="object-cover object-top w-full h-full p-2 rounded-lg" src={product.imageUrl} alt="" />
      </div>
      <div className="p-4">
        <h3 className='text-lg font-medium text-gray-900 text-wrap'>{product.title}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.price}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
