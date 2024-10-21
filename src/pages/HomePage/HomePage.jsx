import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.module.css'; // We'll add some basic styling

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-banner">
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog!</p>
                <Link to="/catalog" className="btn-view-now">View Now</Link>
            </div>
        </div>
    );
};

export default HomePage;
