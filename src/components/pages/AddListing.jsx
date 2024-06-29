import React, { useState } from "react";

const AddListing = () => {


  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  
  const [loading ,setLoading ]=useState(false);
  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleRegistration = async(e)=>{
    e.preventDefault()
    setLoading(true);
    const formData=new FormData(e.target);
    const {username,email, password}=Object.fromEntries(formData);
    try {
      const res =await  createUserWithEmailAndPassword(auth,email,password);
      
      const imgUrl = await uploads(avatar.file)
      
      
      await setDoc(doc(db,"users",res.user.uid),{
       username,
       email,
       avatar:imgUrl,
       id:res.user.uid,
       blocked:[] , 
      });

      await setDoc(doc(db,"userchats",res.user.uid),{
        chats:[],
      });

      toast.success("Account created Sucessfully, You can login now!!");
    } catch (err) {
      toast.error(err.message);
    }finally{
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
              <img src={avatar.url || "./avatar.png"} alt="" />
              Upload your image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handelAvatar}
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
