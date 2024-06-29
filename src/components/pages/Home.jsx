import React, { useState, useEffect } from "react";
import FurnitureCard from "../Card/FurnitureCard";
import { useFireBase } from "../../context/FireBase";

const Home = () => {
  const { getAllProducts } = useFireBase();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching listings: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getAllProducts]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts = productData.filter((product) => {
    return (
      (!searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice)) &&
      (!category || product.category === category)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border px-3 py-2 rounded-md mr-4"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="border px-3 py-2 rounded-md mr-4"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border px-3 py-2 rounded-md mr-4"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="wood">Wood</option>
          <option value="steel">Steel</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((furniture) => (
          <FurnitureCard key={furniture.id} furniture={furniture} />
        ))}
      </div>
    </div>
  );
};

export default Home;
