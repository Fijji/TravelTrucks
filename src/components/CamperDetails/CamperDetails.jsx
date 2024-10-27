import React from "react";
import styles from "./CamperDetails.module.css";
import IconMap from "../Icons/IconMap";
import IconRatingGold from "../Icons/IconRatingGold";
import {useNavigate} from "react-router-dom";

const CamperDetails = ({ camper }) => {
  if (!camper) return <div>Loading camper details...</div>;

    const navigate = useNavigate();
    const handleRatingClick = () => {
        navigate(`/catalog/${camper.id}/reviews`); // Navigate to the reviews path
    };

  return (
      <div className={styles.camperDetails}>
          <h2>{camper.name}</h2>
          <div className={styles.cardMeta}>
        <span className={`${styles.rating} ${styles.clickable}`}
              onClick={handleRatingClick}
        >
          <IconRatingGold className={styles.starIcon}/>
            {camper.rating} ({camper.reviews.length} Reviews)
        </span>
              <span className={styles.location}>
          <IconMap className={styles.icon}/>
                  {camper.location}
        </span>
          </div>

          <div className={styles.price}>
              <p>€{camper.price.toFixed(2)}</p>
          </div>

          <div className={styles.gallery}>
              {camper.gallery.map((image, index) => (
                  <img
                      key={index}
                      src={image.thumb}
                      alt={`Gallery ${index}`}
                      className={styles.camperImg}
                  />
              ))}
          </div>

          <p className={styles.description}>{camper.description}</p>
      </div>
  );
};

export default CamperDetails;
