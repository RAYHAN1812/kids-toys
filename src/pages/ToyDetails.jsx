import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toysData from '../data/popularToys.json';
import DynamicTitle from '../components/shared/DynamicTitle';
import { FaStar, FaEnvelope, FaTag } from 'react-icons/fa';
import TryNowForm from '../components/forms/TryNowForm';

const ToyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        const selectedToy = toysData.find(t => t.toyId === id);
        
        if (selectedToy) {
            setToy(selectedToy);
        } else {
            navigate('/404'); 
        }
    }, [id, navigate]);

    if (!toy) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }
    
    return (
        <div className="py-10">
            <DynamicTitle title={`${toy.toyName} Details`} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-base-100 p-8 rounded-xl shadow-2xl">
                
                <div className="lg:col-span-2 space-y-6">
                    <figure className="rounded-xl overflow-hidden shadow-lg h-96 w-full">
                        <img src={toy.pictureURL} alt={toy.toyName} className="object-cover w-full h-full" />
                    </figure>

                    <h1 className="text-4xl font-bold text-primary">{toy.toyName}</h1>
                    <p className="text-lg text-gray-700">{toy.description}</p>
                    
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                        <div className="stat">
                            <div className="stat-figure text-secondary"><FaTag /></div>
                            <div className="stat-title">Price</div>
                            <div className="stat-value text-secondary">${toy.price.toFixed(2)}</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-warning"><FaStar /></div>
                            <div className="stat-title">Rating</div>
                            <div className="stat-value">{toy.rating} / 5</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-info">Qty</div>
                            <div className="stat-title">Available</div>
                            <div className="stat-value">{toy.availableQuantity}</div>
                        </div>
                    </div>
                    
                    <div className="p-4 bg-base-200 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-accent">Seller Information</h3>
                        <p><strong>Seller:</strong> {toy.sellerName}</p>
                        <p className="flex items-center">
                            <FaEnvelope className="mr-2" /><strong>Email:</strong> {toy.sellerEmail}
                        </p>
                        <p><strong>Category:</strong> {toy.subCategory}</p>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <TryNowForm toyName={toy.toyName} />
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
