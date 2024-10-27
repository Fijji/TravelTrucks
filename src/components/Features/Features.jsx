import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Features.module.css";
import IconWind from "../Icons/IconWind";
import IconCupHot from "../Icons/IconCupHot";
import IconShower from "../Icons/IconShower";
import IconWaterOutline from "../Icons/IconWaterOutline";
import IconRadios from "../Icons/IconRadios";
import IconMicrowave from "../Icons/IconMicrowave";
import IconGasStove from "../Icons/IconGasStove";
import IconTV from "../Icons/IconTV";

const Features = () => {
  const context = useOutletContext();
  const camper = context?.camper;

  if (!camper) {
    return (
      <div className={styles.featuresSection}>
        No vehicle details available.
      </div>
    );
  }

  const featuresWithIcons = [
    { key: "AC", label: "AC", icon: IconWind },
    { key: "kitchen", label: "Kitchen", icon: IconCupHot },
    { key: "bathroom", label: "Bathroom", icon: IconShower },
    { key: "water", label: "Water", icon: IconWaterOutline },
    { key: "radio", label: "Radio", icon: IconRadios },
    { key: "microwave", label: "Microwave", icon: IconMicrowave },
    { key: "gas", label: "Gas", icon: IconGasStove },
    { key: "TV", label: "TV", icon: IconTV },
  ];

  return (
    <div className={styles.featuresSection}>
      <div className={styles.featureCategories}>
        {featuresWithIcons.map(
          (feature, index) =>
            camper[feature.key] && (
              <span key={index} className={styles.featureBadge}>
                <feature.icon className={styles.icon} />
                {feature.label}
              </span>
            ),
        )}
      </div>

      <h3 className={styles.heading}>Vehicle details</h3>
      <div className={styles.features}>
        <ul className={styles.detailsList}>
          <li>
            <strong>Form:</strong> {camper.form}
          </li>
          <li>
            <strong>Length:</strong> {camper.length}
          </li>
          <li>
            <strong>Width:</strong> {camper.width}
          </li>
          <li>
            <strong>Height:</strong> {camper.height}
          </li>
          <li>
            <strong>Tank:</strong> {camper.tank}
          </li>
          <li>
            <strong>Consumption:</strong> {camper.consumption}
          </li>
          <li>
            <strong>Transmission:</strong> {camper.transmission}
          </li>
          <li>
            <strong>Engine:</strong> {camper.engine}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
