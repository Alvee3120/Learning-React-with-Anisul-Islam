import React from 'react'
import PropTypes from 'prop-types'

function ProductCard({product}) {
  return (
    <>
   <div className="bg-white shadow-md rounded-2xl overflow-hidden w-72 m-4 transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-green-600 font-bold text-lg">{product.price}৳</span>
          <span className="bg-yellow-400 text-sm px-2 py-0.5 rounded-full text-white font-semibold">
            ⭐ {product.rating}
          </span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
    </>
  )
}

ProductCard.PropTypes = {
    product: PropTypes.shape({

        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
}

export default ProductCard