import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const TryNowForm = ({ toyName }) => {
    const { user } = useAuth();

    const handleTryNow = (e) => {
        e.preventDefault();
        
        toast.success(`Thank you, ${user?.displayName || 'user'}! Your request to Try Now "${toyName}" has been submitted.`);
        
        e.target.reset();
    };

    return (
        <div className="p-6 bg-secondary text-secondary-content rounded-xl shadow-lg sticky top-20">
            <h3 className="text-2xl font-bold mb-4">Try Now: {toyName}</h3>
            <p className="mb-4 text-sm">Fill out the form below to show interest. A seller will contact you shortly!</p>

            <form onSubmit={handleTryNow} className="space-y-4">
                <div className="form-control">
                    <label className="label"><span className="label-text text-secondary-content">Your Name</span></label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        defaultValue={user?.displayName || ''}
                        className="input input-bordered text-base-content" 
                        required 
                    />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-secondary-content">Your Email</span></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        defaultValue={user?.email || ''}
                        className="input input-bordered text-base-content" 
                        required 
                        readOnly={!!user}
                    />
                </div>
                
                <div className="form-control pt-4">
                    <button type="submit" className="btn btn-warning text-black font-bold">
                        Submit "Try Now" Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TryNowForm;
