import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import DynamicTitle from '../components/shared/DynamicTitle';

const Register = () => {
    const { createUser, googleSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!name || !email || !password || !confirmPassword) {
            return toast.error("Please fill in all required fields.");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match.");
        }

        // --- Password Validation ---
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters.");
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }

        try {
            // Create user in Firebase
            await createUser(email, password);

            // Update user profile
            await updateUserProfile(name, photoURL);

            toast.success("Registration successful! Welcome to ToyTopia!");
            navigate('/');

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error("This email is already registered. Please log in.");
            } else {
                toast.error(error.message);
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            toast.success("Logged in with Google successfully!");
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center py-10 min-h-[80vh]">
            <DynamicTitle title="Register" />
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">Create Your Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">

                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" name="email" placeholder="email@example.com" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Photo URL</span></label>
                        <input type="text" name="photoURL" placeholder="https://example.com/photo.jpg" className="input input-bordered" />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password" 
                                className="input input-bordered w-full" 
                                required 
                            />
                            <span 
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-lg"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <label className="label">
                            <span className="label-text-alt text-error text-xs">
                                Min 6 characters, must include Upper & Lowercase.
                            </span>
                        </label>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Confirm Password</span></label>
                        <div className="relative">
                            <input 
                                type={showConfirmPassword ? "text" : "password"} 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                                className="input input-bordered w-full" 
                                required 
                            />
                            <span 
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-lg"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>

                    <div className="divider">OR</div>

                    <button 
                        type="button" 
                        onClick={handleGoogleSignIn} 
                        className="btn btn-outline btn-secondary w-full"
                    >
                        <FaGoogle className="mr-2" /> Register with Google
                    </button>

                    <p className="text-center mt-4 text-sm">
                        Already have an account? <Link to="/login" className="link link-hover text-primary font-semibold">Login here</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Register;
