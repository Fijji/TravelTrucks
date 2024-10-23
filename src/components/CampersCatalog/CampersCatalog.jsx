// CampersCatalog.jsx
import React, { useState } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import styles from './CampersCatalog.module.css';

const CampersCatalog = ({ campers }) => {
    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <div className={styles.campersCatalog}>
            <div className={styles.cardsContainer}>
                {campers.slice(0, visibleCount).map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                ))}
            </div>
            {visibleCount < campers.length && (
                <button className={styles.loadMoreButton} onClick={loadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default CampersCatalog;
