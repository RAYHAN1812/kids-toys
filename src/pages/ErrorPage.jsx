import React, { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import DynamicTitle from '../components/shared/DynamicTitle';

const ErrorPage = () => {
    const error = useRouteError();
    
    useEffect(() => {
        document.title = "404 | ToyTopia - Not Found";
    }, []);

    let errorMessage = "Oops! The page you are looking for doesn't exist.";
    if (error && error.statusText) {
        errorMessage = error.statusText;
    } else if (error && error.message) {
        errorMessage = error.message;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-6">
            <DynamicTitle title="404 Not Found" />
            
            <h1 className="text-8xl font-extrabold text-error mb-4">404</h1>
            <h2 className="text-4xl font-bold text-neutral mb-4">Page Not Found</h2>
            
            <p className="text-lg text-gray-600 mb-8">
                {errorMessage}
            </p>
            
            <Link to="/" className="btn btn-primary btn-lg">
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
