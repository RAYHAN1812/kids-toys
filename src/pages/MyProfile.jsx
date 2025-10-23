import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import DynamicTitle from '../components/shared/DynamicTitle';
import { toast } from 'react-toastify';
import { FaUserCircle, FaEnvelope, FaPen, FaSave, FaCamera } from 'react-icons/fa';

const MyProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        if (name === user.displayName && photoURL === user.photoURL) {
            toast.info("No changes detected.");
            setIsUpdating(false);
            return;
        }

        try {
            await updateUserProfile(name, photoURL);
            toast.success("Profile updated successfully!");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsUpdating(false);
        }
    };

    if (!user) {
        return <p className='text-center'>Please log in to view your profile.</p>; 
    }

    return (
        <div className="py-10 min-h-[85vh] flex justify-center items-start">
            <DynamicTitle title="My Profile" />

            <div className="max-w-4xl w-full">
                
                <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden 
                         border border-gray-100 transform transition duration-500 hover:shadow-primary/30">
                    
                    <div className="absolute inset-0 opacity-10 pointer-events-none 
                                 bg-repeat [background-image:radial-gradient(circle_at_center,rgba(0,187,255,0.1)_1px,transparent_0)] [background-size:20px_20px]">
                    </div>
                    
                    <h1 className="text-4xl font-extrabold text-center text-primary pb-4">
                        My ToyTopia Profile 🚀
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-around p-8 
                                 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-xl shadow-lg relative">
                        
                        <div className="avatar mb-4 md:mb-0 relative">
                            <div className="w-36 rounded-full ring-4 ring-white ring-offset-2 ring-offset-indigo-500 shadow-xl">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName} className="object-cover w-full h-full" />
                                ) : (
                                    <FaUserCircle className="w-36 h-36 text-gray-200" />
                                )}
                            </div>
                            <span className="badge badge-lg badge-warning absolute -bottom-1 -right-1 text-black font-semibold">
                                <FaCamera className='mr-1' /> Edit
                            </span>
                        </div>

                        <div className="text-center md:text-left space-y-3 mt-6 md:mt-0">
                            <h2 className="text-4xl font-black">{user.displayName || 'Name Not Set'}</h2>
                            <p className="flex items-center justify-center md:justify-start text-lg opacity-90">
                                <FaEnvelope className="mr-3 text-white" /> **{user.email}**
                            </p>
                            <p className="text-sm opacity-70">
                                Last sign-in: {user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    </div>

                    <div className="p-6 pt-8 border-t border-gray-200">
                        <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                            <FaPen className="mr-3" /> Update Your Information
                        </h3>
                        
                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold text-lg text-gray-700">Display Name</span></label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name" 
                                    className="input input-bordered input-lg w-full focus:border-primary focus:ring-1 focus:ring-primary transition duration-200" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold text-lg text-gray-700">New Photo URL</span></label>
                                <input 
                                    type="url" 
                                    name="photoURL" 
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    placeholder="Enter a new photo URL" 
                                    className="input input-bordered input-lg w-full focus:border-primary focus:ring-1 focus:ring-primary transition duration-200" 
                                />
                                <label className="label">
                                    <span className="label-text-alt text-gray-500">Paste a direct link to a profile image.</span>
                                </label>
                            </div>

                            <div className="form-control pt-4">
                                <button type="submit" className="btn btn-secondary btn-lg shadow-lg hover:shadow-secondary/50" disabled={isUpdating}>
                                    {isUpdating ? (
                                        <span className="loading loading-spinner text-white"></span>
                                    ) : (
                                        <>
                                            <FaSave className="mr-2" /> Save Changes
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
