import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = ({ title = 'ToyTopia' }) => {
    const location = useLocation();
    
    useEffect(() => {
        let newTitle = title;
        if (location.pathname === '/profile') newTitle = 'My Profile';
        else if (location.pathname === '/login') newTitle = 'Login';
        else if (location.pathname.startsWith('/toy/')) newTitle = 'Toy Details';
        
        document.title = `${newTitle} | ToyTopia`;
    }, [location.pathname, title]);

    return null;
};

export default DynamicTitle;
