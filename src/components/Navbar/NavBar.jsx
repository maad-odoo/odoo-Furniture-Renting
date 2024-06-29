import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFireBase } from "../../context/FireBase";
// import { useFireBase } from './Firebase'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fireBase = useFireBase();
  return (
    <nav className="bg-amber-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-amber-200 text-lg font-bold">
          Furniture
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-amber-200 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
          >
            Home
          </Link>
          {fireBase.isLoggedIn ? (
            <>
              <Link
                to="/add-listing"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
              >
                Add Listing
              </Link>
              <button
                onClick={fireBase.handleLogout}
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/registration"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
              >
                Registration
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
