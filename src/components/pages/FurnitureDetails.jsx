// pages/FurnitureDetails.js
import { useState ,useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDoc } from "firebase/firestore";
import { doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';


const FurnitureDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [itemData, setItemData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const docRef = doc(db, "Products", id);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
              setItemData(docSnap.data());
              setLoading(false)
              return { id: docSnap.id, ...docSnap.data() };
            } else {
              console.log('No such document!');
            }
          } catch (error) {
            console.error('Error fetching document:', error);
          }
        
      };
  
      fetchData();
    }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-2xl w-full bg-amber-200 p-8 rounded-lg shadow-lg">
                <img src={itemData.images} alt={itemData.name} className="w-full h-64 object-cover rounded-md mb-6" />
                <h2 className="text-2xl font-bold text-amber-800 mb-4">{itemData.name}</h2>
                <p className="text-amber-800 mb-2">Price: ${itemData.price}</p>
                <p className="text-amber-800 mb-2">Category: {itemData.category}</p>
                <p className="text-amber-800 mb-2">Dimensions: {itemData.dimensions} </p>
                <p className="text-amber-800 mb-2">Material: {itemData.material}</p>
                <p className="text-amber-800 mb-2">Color: {itemData.color}</p>
                <p className="text-amber-800 mb-2">Availability: {itemData.availability}</p>
                <p className="text-amber-800 mb-2">Description: {itemData.description}</p>
            </div>
        </div>
    );
};

export default FurnitureDetails;
