import React from 'react';
import styles from './CamperDetails.module.css';

const CamperDetails = ({ camper }) => {
    if (!camper) return <div>Loading camper details...</div>;

    return (
        <div className={styles.camperDetails}>
            <h1>{camper.name}</h1>
            <div className={styles.gallery}>
                {camper.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Gallery ${index}`} className={styles.camperImg} />
                ))}
            </div>
            <p>{camper.description}</p>
            <div className={styles.priceAndLocation}>
                <p><strong>Price:</strong> €{camper.price.toFixed(2)}</p>
                <p><strong>Location:</strong> {camper.location}</p>
            </div>
            <div className={styles.features}>
                <h3>Vehicle details</h3>
                <p><strong>Form:</strong> {camper.form}</p>
                <p><strong>Length:</strong> {camper.length}</p>
                <p><strong>Width:</strong> {camper.width}</p>
                <p><strong>Height:</strong> {camper.height}</p>
                <p><strong>Tank:</strong> {camper.tank}</p>
                <p><strong>Consumption:</strong> {camper.consumption}</p>
                <p><strong>Transmission:</strong> {camper.transmission}</p>
                <p><strong>Engine:</strong> {camper.engine}</p>
                <p><strong>AC:</strong> {camper.AC ? 'Yes' : 'No'}</p>
                <p><strong>Bathroom:</strong> {camper.bathroom ? 'Yes' : 'No'}</p>
                <p><strong>Kitchen:</strong> {camper.kitchen ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

export default CamperDetails;
