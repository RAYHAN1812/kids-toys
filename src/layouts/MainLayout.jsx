import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import DynamicTitle from '../components/shared/DynamicTitle'; 

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <DynamicTitle /> 
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;