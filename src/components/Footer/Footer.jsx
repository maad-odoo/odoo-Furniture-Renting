import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-amber-800 text-amber-200 py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-white">
                        <h2 className="text-xl font-bold">Furniture Web App</h2>
                        <p>&copy; 2024 All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-amber-200 hover:text-white">Home</a>
                        <a href="#" className="text-amber-200 hover:text-white">About Us</a>
                        <a href="#" className="text-amber-200 hover:text-white">Contact</a>
                        <a href="#" className="text-amber-200 hover:text-white">Privacy Policy</a>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p>Follow us on:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-amber-200 hover:text-white">Facebook</a>
                        <a href="#" className="text-amber-200 hover:text-white">Twitter</a>
                        <a href="#" className="text-amber-200 hover:text-white">Instagram</a>
                        <a href="#" className="text-amber-200 hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
