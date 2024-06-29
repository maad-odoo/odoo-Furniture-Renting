import React, { useState } from "react";
import { useFireBase } from "../../context/FireBase";

const AddListing = () => {
  const fireBase = useFireBase();

  const [photo, setPhoto] = useState({
    file: null,
    url: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",  // Initial value set to empty string
    material: "",
    color: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);

  const handlePhoto = (e) => {
    if (e.target.files[0]) {
      setPhoto({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fireBase.addListing(formData, photo);
    setLoading(false);

    // Clear the form
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",  // Reset to empty string
      material: "",
      color: "",
      availability: "",
    });
    setPhoto({
      file: null,
      url: "",
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-amber-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-amber-800 mb-6">
          Add a New Furniture Listing
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            >
              <option value="">Select Category</option>
              <option value="wood">Wood</option>
              <option value="steel">Steel</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="material">
              Material
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="color">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file">
              {photo.url && (
                <img src={photo.url} alt="Preview" className="mb-4" />
              )}
              Upload your image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handlePhoto}
            />
          </div>
          <div className="mb-4">
            <label className="block text-amber-800 mb-2" htmlFor="availability">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900 transition duration-300"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Add Listing"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
