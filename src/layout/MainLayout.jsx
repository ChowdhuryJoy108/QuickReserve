import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedComponents/Navbar/Navbar';
import Footer from '../sharedComponents/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;