// CamperCard.jsx
import React from "react";
import styles from "./CamperCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faCogs,
    faCoffee,
    faTv,
    faShower,
    faGasPump,
    faWater,
    faWind,
    faRadiation,
    faSnowflake,
    faCar,
    faSink,
    faBroadcastTower,
    faStar,
    faHeart
} from "@fortawesome/free-solid-svg-icons";

const featureIcons = {
    location: faMapMarkerAlt,
    kitchen: faCoffee,
    transmission: faCogs,
    engine: faGasPump,
    gas: faRadiation,
    water: faWater,
    microwave: faSnowflake,
    bathroom: faShower,
    refrigerator: faSink,
    TV: faTv,
    radio: faBroadcastTower,
    AC: faWind,
};

const CamperCard = ({ camper }) => {
    const primaryImage = camper.gallery && camper.gallery.length > 0 ? camper.gallery[0].thumb : "";
    const formattedPrice = camper.price.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
      <div className={styles.camperCard}>
        {primaryImage && (
          <div className={styles.imageContainer}>
            <img src={primaryImage} alt={camper.name} />
          </div>
        )}
        <div className={styles.cardContent}>
          <div className={styles.header}>
            <h2 className={styles.title}>{camper.name}</h2>
            <div className={styles.priceFavorite}>
              <h2 className={styles.price}>€{formattedPrice}</h2>
              <FontAwesomeIcon icon={faHeart} className={styles.favoriteIcon} />
            </div>
          </div>

          <div className={styles.cardMeta}>
            <span className={styles.rating}>
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
            <span className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {camper.location}
            </span>
          </div>

          {camper.description && typeof camper.description === "string" && (
            <p className={styles.description}>{camper.description}</p>
          )}

          <div className={styles.features}>
            {Object.keys(featureIcons).map(
              (featureKey) =>
                camper[featureKey] && (
                  <span key={featureKey} className={styles.featureIcon}>
                    <FontAwesomeIcon
                      icon={featureIcons[featureKey]}
                      className={styles.icon}
                    />
                    {featureKey}
                  </span>
                ),
            )}
          </div>
          <a
            href={`/catalog/${camper.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.showMoreButton}
          >
            Show more
          </a>
        </div>
      </div>
    );
};

export default CamperCard;
