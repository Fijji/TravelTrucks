import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage.jsx';
import AppBar from './components/AppBarr/AppBarr.jsx';


const App = () => {
    return (
        <>
            <AppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<CamperDetailsPage />} />
            </Routes>
        </>
    );
};

export default App;
