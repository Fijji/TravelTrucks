import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersOperations';
import {
    selectFilteredCampers,
    selectCampersLoading,
    selectCampersError,
} from '../../redux/campers/campersSelectors';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectFilteredCampers);
    const isLoading = useSelector(selectCampersLoading);
    const error = useSelector(selectCampersError);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Campers Catalog</h1>
            <ul>
                {campers.map((camper) => (
                    <li key={camper.id}>
                        <h2>{camper.name}</h2>
                        <p>Location: {camper.location}</p>
                        <p>Price: {camper.price}</p>
                        {/* Add more camper details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatalogPage;
