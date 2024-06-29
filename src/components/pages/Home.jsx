// pages/Home.js
import React from 'react';
import FurnitureCard from '../Card/FurnitureCard';

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

const Home = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {furnitureData.map(furniture => (
                    <FurnitureCard key={furniture.id} furniture={furniture} />
                ))}
            </div>
        </div>
    );
};

export default Home;
