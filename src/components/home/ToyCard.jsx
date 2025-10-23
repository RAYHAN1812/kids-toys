import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaTags, FaBoxOpen } from 'react-icons/fa';

const ToyCard = ({ toy }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out">
            <figure className="h-48 overflow-hidden">
                <img 
                    src={toy.pictureURL} 
                    alt={toy.toyName} 
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-primary text-2xl mb-2">{toy.toyName}</h2>
                
                
                <div className="space-y-1 text-sm text-gray-700">
                    <p className="flex items-center font-semibold">
                        <FaTags className="mr-2 text-secondary" /> Price: <span className="text-xl text-secondary ml-1">${toy.price.toFixed(2)}</span>
                    </p>
                    <p className="flex items-center">
                        <FaStar className="mr-2 text-warning" /> Rating: 
                        <span className="font-bold text-warning ml-1">{toy.rating}</span> / 5
                    </p>
                    <p className="flex items-center">
                        <FaBoxOpen className="mr-2 text-info" /> Available Quantity: 
                        <span className="font-bold ml-1">{toy.availableQuantity}</span>
                    </p>
                </div>
                
                <div className="card-actions justify-end mt-4">
                   
                    <Link 
                        to={`/toy/${toy.toyId}`} 
                        className="btn btn-primary btn-sm md:btn-md"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;