import React from 'react';
import styles from './CamperDetails.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";

const CamperDetails = ({ camper }) => {
    if (!camper) return <div>Loading camper details...</div>;

    return (
        <div className={styles.camperDetails}>
            <h2>{camper.name}</h2>
            <div className={styles.cardMeta}>
            <span className={styles.rating}>
              <FontAwesomeIcon icon={faStar} className={styles.starIcon}/>
                {camper.rating} ({camper.reviews.length} Reviews)
            </span>
                <span className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt}/> {camper.location}
            </span>
            </div>

            <div className={styles.price}>
                <p> €{camper.price.toFixed(2)}</p>
            </div>

            <div className={styles.gallery}>
                {camper.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Gallery ${index}`} className={styles.camperImg}/>
                ))}
            </div>

            <p className={styles.description}>{camper.description}</p>

        </div>
    );
};

export default CamperDetails;
