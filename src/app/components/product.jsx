import React from 'react';


const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <a
            href={`/products/${product.id}`}
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Details
          </a>
        </div>
      </div>
    );
  };

  export default ProductCard;