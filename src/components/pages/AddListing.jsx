import React, { useState } from "react";
import { db, storage } from '../../lib/firebase'; // adjust the path if necessary
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const AddListing = () => {


  const [photo, setPhoto] = useState({
    file: null,
    url: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
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

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${uuidv4()}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const imgUrl = photo.file ? await uploadImage(photo.file) : "";
      
      await setDoc(doc(db, "Products", uuidv4()), {
        ...formData,
        images: imgUrl,
      });
      
     // toast.success("Listing added successfully!");
    } catch (err) {
     // toast.error(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-amber-800 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
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
              <img src={photo.url } alt="" 
              required
              />
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-amber-800 text-amber-200 px-4 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-800"
            >
              Add Product
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => (window.location.href = "/registration")}
              className="text-amber-800 px-4 py-2 rounded-md hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-800"
            >
              Not a user? Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
