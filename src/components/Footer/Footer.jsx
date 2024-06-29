import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-amber-800 text-amber-200 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-white">Furniture Web App</h2>
                        <p>&copy; 2024 All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
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
