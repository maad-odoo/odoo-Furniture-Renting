// pages/Home.js
import React, { useState, useEffect } from 'react';
import FurnitureCard from '../Card/FurnitureCard';
import { useFireBase } from '../../context/FireBase';


const Home = () => {
    const { getAllProducts } = useFireBase();
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const Data = await getAllProducts();
                setProductData(Data);
            } catch (error) {
                console.error("Error fetching listings: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getAllProducts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productData?.map(furniture => (
                    <FurnitureCard key={furniture.id} furniture={furniture} />
                ))}
            </div>
        </div>
    );
};

export default Home;
