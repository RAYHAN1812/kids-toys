import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import DynamicTitle from '../components/shared/DynamicTitle';

const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; 
    
    const [loginEmail, setLoginEmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signIn(email, password);
            toast.success("Login successful!");
            
            navigate(from, { replace: true }); 

        } catch (error) {
            toast.error("Login Failed: Invalid email or password.");
            console.error(error.message);
        }
    };
    
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            toast.success("Logged in with Google successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center py-10 min-h-[80vh]">
            <DynamicTitle title="Login" />
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-3xl font-bold text-center text-primary mb-6">Welcome Back!</h2>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email@example.com" 
                            className="input input-bordered" 
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                        <label className="label">
                            <Link 
                                to="/forget-password" 
                                state={{ email: loginEmail }}
                                className="label-text-alt link link-hover text-sm"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    
                    <div className="divider">OR</div>

                    <button 
                        type="button" 
                        onClick={handleGoogleSignIn} 
                        className="btn btn-outline btn-secondary"
                    >
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>
                    
                    <p className="text-center mt-4 text-sm">
                        Don't have an account? <Link to="/register" className="link link-hover text-primary font-semibold">Register now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
