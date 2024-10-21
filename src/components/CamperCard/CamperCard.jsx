import React from 'react';
import { Link } from 'react-router-dom';

const CamperCard = ({ camper }) => {
    return (
        <div>
            <img src={camper.imageUrl} alt={camper.name} />
            <h2>{camper.name}</h2>
            <p>Price: €{camper.price.toFixed(2)}</p>
            <Link to={`/catalog/${camper.id}`}>Show more</Link>
        </div>
    );
};

export default CamperCard;
