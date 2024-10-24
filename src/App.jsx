import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBarr/AppBarr.jsx';

const Reviews = lazy(() => import('./components/ReviewList/ReviewList.jsx'));
const Features = lazy(() => import('./components/Features/Features.jsx'));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage/CamperDetailsPage.jsx"));

const App = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:id" element={<CamperDetailsPage />}>
                        {/* Default child route for features */}
                        <Route index element={<Features />} />
                        <Route path="features" element={<Features />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
