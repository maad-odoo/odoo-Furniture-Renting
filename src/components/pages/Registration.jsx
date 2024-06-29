import React from "react";
import { Link } from "react-router-dom";
import { useFireBase } from "../../context/FireBase";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const fireBase = useFireBase();
  const navigate = useNavigate();



 const  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      fireBase.handleRegistration(email,password);
      console.log("registerd succuessfully")
      navigate("/");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-amber-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">
          Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-amber-800 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-amber-800 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-amber-800 text-amber-200 px-4 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-800"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-amber-800">Already a user?</span>
          <Link
            to="/login"
            className="ml-2 text-amber-800 underline hover:text-amber-900"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
