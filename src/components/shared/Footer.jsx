import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaRegFileAlt, FaShieldAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-primary to-secondary text-white pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="space-y-4">
                    <h3 className="text-4xl font-extrabold text-white">ToyTopia</h3>
                    <p className="text-sm md:text-base text-gray-200">
                        A Local Kids Toy Store Platform.<br/>
                        Supporting creativity and community since 2023.
                    </p>
                    <p className="text-xs text-gray-300">
                        &copy; {new Date().getFullYear()} ToyTopia. All rights reserved.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Company & Legal</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="flex items-center hover:text-yellow-300 transition duration-300">
                                <FaRegFileAlt className="mr-2" /> Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center hover:text-yellow-300 transition duration-300">
                                <FaShieldAlt className="mr-2" /> Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-yellow-300 transition duration-300">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Connect & Contact</h4>

                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-lg" />
                        <a href="mailto:raihangazi2014@gmail.com" className="hover:text-yellow-300 transition duration-300">raihangazi2014@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <FaPhone className="text-lg" />
                        <a href="tel:01610607010" className="hover:text-yellow-300 transition duration-300">01610607010</a>
                    </div>

                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/MDRAIHAN181299/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition duration-300">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/raihangazi1999/?next=%2F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-400 transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/Raihang17372612" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-300 transition duration-300">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-300 text-sm">
                Made with ❤️ by MD Raihan
            </div>
        </footer>
    );
};

export default Footer;
