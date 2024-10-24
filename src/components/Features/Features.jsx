import React from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './Features.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSnowflake,
    faShower,
    faUtensils,
    faWater,
    faMusic,
    faTv,
    faGasPump,
    faBolt
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    const context = useOutletContext();
    const camper = context?.camper;

    if (!camper) {
        return <div className={styles.featuresSection}>No vehicle details available.</div>;
    }

    const featuresWithIcons = [
        { key: "AC", label: "AC", icon: faSnowflake },
        { key: "kitchen", label: "Kitchen", icon: faUtensils },
        { key: "bathroom", label: "Bathroom", icon: faShower },
        { key: "water", label: "Water", icon: faWater },
        { key: "radio", label: "Radio", icon: faMusic },
        { key: "microwave", label: "Microwave", icon: faBolt },
        { key: "gas", label: "Gas", icon: faGasPump },
        { key: "TV", label: "TV", icon: faTv }
    ];

    return (
        <div className={styles.featuresSection}>
            {/* Display available features as badges with icons */}
            <div className={styles.featureCategories}>
                {featuresWithIcons.map((feature, index) => (
                    camper[feature.key] && (
                        <span key={index} className={styles.featureBadge}>
                            <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
                            {feature.label}
                        </span>
                    )
                ))}
            </div>

            {/* Display vehicle details */}
            <h3 className={styles.heading}>Vehicle details</h3>
            <div className={styles.features}>
                <ul className={styles.detailsList}>
                    <li><strong>Form:</strong> {camper.form}</li>
                    <li><strong>Length:</strong> {camper.length}</li>
                    <li><strong>Width:</strong> {camper.width}</li>
                    <li><strong>Height:</strong> {camper.height}</li>
                    <li><strong>Tank:</strong> {camper.tank}</li>
                    <li><strong>Consumption:</strong> {camper.consumption}</li>
                    <li><strong>Transmission:</strong> {camper.transmission}</li>
                    <li><strong>Engine:</strong> {camper.engine}</li>
                </ul>
            </div>
        </div>
    );
};

export default Features;
