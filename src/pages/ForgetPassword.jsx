import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import DynamicTitle from '../components/shared/DynamicTitle';

const ForgetPassword = () => {
    const { resetPassword } = useAuth(); 
    const location = useLocation();
    
    const initialEmail = location.state?.email || '';
    const [email, setEmail] = useState(initialEmail);
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            toast.error("Please enter your email address.");
            setLoading(false);
            return;
        }

        try {
            await resetPassword(email);
            setLoading(false);
            toast.success("Password reset email sent! Check your inbox.");

            setTimeout(() => {
                window.location.href = "https://mail.google.com/";
            }, 1000);

        } catch (error) {
            setLoading(false);
            if (error.code === 'auth/user-not-found') {
                 toast.error("No user found with that email address.");
            } else {
                 toast.error(error.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center py-10 min-h-[80vh]">
            <DynamicTitle title="Reset Password" />
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-8">
                <h2 className="text-3xl font-bold text-center text-secondary mb-6">Reset Password</h2>
                <p className="text-center mb-6 text-sm">Enter your email and we'll send you a link to reset your password.</p>
                
                <form onSubmit={handleResetPassword}>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered input-lg" 
                            required 
                        />
                    </div>
                    
                    <div className="form-control mt-8">
                        <button type="submit" className="btn btn-secondary btn-lg" disabled={loading}>
                            {loading ? <span className="loading loading-spinner text-white"></span> : 'Send Reset Link'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
