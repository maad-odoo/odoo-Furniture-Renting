// components/FurnitureCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureCard = ({ furniture }) => {
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
            <img src={furniture?.images} alt={furniture.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-amber-800">{furniture.name}</h3>
                <p className="text-amber-600">${furniture.price}</p>
                <p className="text-amber-800">{furniture.category}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link
                    to={`/furniture/${furniture.id}`}
                    className="bg-amber-200 text-amber-800 px-4 py-2 rounded-md"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default FurnitureCard;
