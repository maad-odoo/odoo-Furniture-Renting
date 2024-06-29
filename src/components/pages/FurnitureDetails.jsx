import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFireBase } from '../../context/FireBase';
import axios from 'axios';


const FurnitureDetails = () => {
    const { id } = useParams();
    const { getProductById } = useFireBase();
    const [itemData, setItemData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const buyFunction = async () => {
        try {
          const response = await axios.post('http://localhost:3000/payment');
          if (response.status === 200) {
            window.location.href = response.data.url;
          }
        } catch (error) {
          console.error('Error processing payment:', error);
        }
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductById(id);
                setItemData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [id, getProductById]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div
            className="min-h-screen bg-white flex items-center justify-center"
            style={{
                backgroundImage: `url(${itemData.images})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-2xl w-full bg-amber-200 p-8 rounded-lg shadow-lg mt-10 mb-10" style={{ opacity: 0.7 }}>
                <img src={itemData.images} alt={itemData.name} className="w-full h-64 object-cover rounded-md mb-6" />
                <h2 className="text-2xl font-bold text-amber-800 mb-4">{itemData.name}</h2>
                <p className="text-amber-800 mb-2">Price: ${itemData.price}</p>
                <p className="text-amber-800 mb-2">Category: {itemData.category}</p>
                <p className="text-amber-800 mb-2">Dimensions: {itemData.dimensions}</p>
                <p className="text-amber-800 mb-2">Material: {itemData.material}</p>
                <p className="text-amber-800 mb-2">Color: {itemData.color}</p>
                <p className="text-amber-800 mb-2">Availability: {itemData.availability}</p>
                <p className="text-amber-800 mb-2">Description: {itemData.description}</p>

                <div className="flex justify-center">
                    <button className="bg-amber-800 text-amber-200 px-4 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-800" onClick={buyFunction}>
                         Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FurnitureDetails;
