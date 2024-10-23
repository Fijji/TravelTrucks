import React from 'react';
import styles from './CamperCard.module.css';

const featureIcons = {
    location: "icon-map",
    van: "icon-bi_grid",
    fullyIntegrated: "icon-bi_grid-1x2",
    alcove: "icon-bi_grid-3x3-gap",
    kitchen: "icon-cup-hot",
    transmission: "icon-diagram",
    engine: "icon-fuel-pump",
    gas: "icon-huge-icons-gas-stove",
    water: "icon-ion_water-outline",
    microwave: "icon-lucide_microwave",
    bathroom: "icon-ph_shower",
    refrigerator: "icon-solar_fridge-outline",
    TV: "icon-tv",
    radio: "icon-ui-radios",
    AC: "icon-wind",
};

const CamperCard = ({ camper }) => {
    return (
        <div className={styles.camperCard}>
            <h2>{camper.name}</h2>
            <p>Location: {camper.location}</p>
            <p>Price: €{camper.price}</p>
            <div className={styles.features}>
                {Object.keys(featureIcons).map((featureKey) =>
                        camper[featureKey] && (
                            <span key={featureKey} className={styles.featureIcon}>
              <svg className={styles.icon} aria-hidden="true">
                <use href={`#${featureIcons[featureKey]}`} />
              </svg>
                                {featureKey} {/* Optional: add a label */}
            </span>
                        )
                )}
            </div>
        </div>
    );
};

export default CamperCard;
