import React from 'react';
import { Link } from 'react-router-dom';
import './AppBarr.module.css'; // Styles for the AppBar component

const AppBarr = () => {
    return (
        <header className="appbar">
            <nav className="nav-links">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/catalog" className="nav-link">
                    Catalog
                </Link>
            </nav>
        </header>
    );
};

export default AppBarr;
