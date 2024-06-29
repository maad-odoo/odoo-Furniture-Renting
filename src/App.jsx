import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/NavBar"
import Home from './components/pages/Home'; // Create these pages
import Login from "./components/pages/Login"
import Registration from "./components/pages/Registration";
import AddListing from './components/pages/AddListing';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/add-listing" element={<AddListing />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
