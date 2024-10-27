import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./CamperCard.module.css";
import IconMap from "../Icons/IconMap";
import IconRatingGold from "../Icons/IconRatingGold";
import IconDefaultHeart from "../Icons/IconDefaultHeart";
import IconHeartRed from "../Icons/IconHeartRed";
import IconCupHot from "../Icons/IconCupHot";
import IconDiagram from "../Icons/IconDiagram";
import IconFuelPump from "../Icons/IconFuelPump";
import IconGasStove from "../Icons/IconGasStove";
import IconWaterOutline from "../Icons/IconWaterOutline";
import IconMicrowave from "../Icons/IconMicrowave";
import IconShower from "../Icons/IconShower";
import IconFridge from "../Icons/IconFridge";
import IconTV from "../Icons/IconTV";
import IconRadios from "../Icons/IconRadios";
import IconWind from "../Icons/IconWind";
import { selectIsFavorite } from "../../redux/favorites/favoritesSelectors.js";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favoritesSlice.js";

const features = {
  kitchen: { icon: IconCupHot, name: "Kitchen" },
  transmission: { icon: IconDiagram, name: "Transmission" },
  engine: { icon: IconFuelPump, name: "Engine" },
  gas: { icon: IconGasStove, name: "Gas" },
  water: { icon: IconWaterOutline, name: "Water" },
  microwave: { icon: IconMicrowave, name: "Microwave" },
  bathroom: { icon: IconShower, name: "Bathroom" },
  refrigerator: { icon: IconFridge, name: "Refrigerator" },
  TV: { icon: IconTV, name: "TV" },
  radio: { icon: IconRadios, name: "Radio" },
  AC: { icon: IconWind, name: "Air Conditioning" },
};

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector(selectIsFavorite(camper.id));

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper.id));
    }
  };

  const handleRatingClick = () => {
    navigate(`/catalog/${camper.id}/reviews`); // Navigate to the reviews path
  };

  const primaryImage =
      camper.gallery && camper.gallery.length > 0 ? camper.gallery[0].thumb : "";
  const formattedPrice = camper.price.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

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
              {isFavorite ? (
                  <IconHeartRed
                      className={`${styles.favoriteIcon} ${styles.favorited}`}
                      onClick={handleFavoriteToggle}
                  />
              ) : (
                  <IconDefaultHeart
                      className={styles.favoriteIcon}
                      onClick={handleFavoriteToggle}
                  />
              )}
            </div>
          </div>

          <div className={styles.cardMeta}>
          <span
              className={`${styles.rating} ${styles.clickable}`}
              onClick={handleRatingClick}
          >
            <IconRatingGold className={styles.starIcon} />
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>
            <span className={styles.location}>
            <IconMap className={styles.icon} /> {camper.location}
          </span>
          </div>

          {camper.description && typeof camper.description === "string" && (
              <p className={styles.description}>{camper.description}</p>
          )}

          <div className={styles.features}>
            {Object.entries(features).map(
                ([featureKey, { icon: IconComponent, name }]) => {
                  const featureValue = camper[featureKey];

                  return (
                      featureValue && (
                          <span key={featureKey} className={styles.featureIcon}>
                    <IconComponent className={styles.icon} />
                            {typeof featureValue === "boolean" ? name : featureValue}
                  </span>
                      )
                  );
                },
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
