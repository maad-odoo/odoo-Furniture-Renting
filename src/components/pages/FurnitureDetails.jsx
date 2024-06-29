// pages/FurnitureDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const furnitureData = [
    {
        id: 1,
        name: "Modern Sofa",
        description: "A comfortable and stylish modern sofa with a sleek design.",
        price: 499.99,
        category: "Living Room",
        dimensions: {
            width: "80 inches",
            height: "35 inches",
            depth: "38 inches"
        },
        material: "Fabric",
        color: "Gray",
        image: "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_green.jpg",
        availability: "In Stock"
    },
    // ... other furniture items
];

const FurnitureDetails = () => {
    const { id } = useParams();
    const furniture = furnitureData.find(item => item.id === parseInt(id));

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-2xl w-full bg-amber-200 p-8 rounded-lg shadow-lg">
                <img src={furniture.image} alt={furniture.name} className="w-full h-64 object-cover rounded-md mb-6" />
                <h2 className="text-2xl font-bold text-amber-800 mb-4">{furniture.name}</h2>
                <p className="text-amber-800 mb-2">Price: ${furniture.price}</p>
                <p className="text-amber-800 mb-2">Category: {furniture.category}</p>
                <p className="text-amber-800 mb-2">Dimensions: {furniture.dimensions.width} x {furniture.dimensions.height} x {furniture.dimensions.depth}</p>
                <p className="text-amber-800 mb-2">Material: {furniture.material}</p>
                <p className="text-amber-800 mb-2">Color: {furniture.color}</p>
                <p className="text-amber-800 mb-2">Availability: {furniture.availability}</p>
                <p className="text-amber-800 mb-2">Description: {furniture.description}</p>
            </div>
        </div>
    );
};

export default FurnitureDetails;
