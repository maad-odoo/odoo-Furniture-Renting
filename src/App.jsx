import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/NavBar"
import Home from './components/pages/Home'; // Create these pages
import Login from "./components/pages/Login"
import Registration from "./components/pages/Registration";
import AddListing from './components/pages/AddListing';
import FurnitureDetails from './components/pages/FurnitureDetails';
import Footer from './components/Footer/Footer';
import axios from 'axios';

function App() {

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
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/add-listing" element={<AddListing />} />
                    <Route path="/furniture/:id" element={<FurnitureDetails />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
