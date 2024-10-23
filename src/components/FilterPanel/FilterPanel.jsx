import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,
  setVehicleTypeFilter,
  addFeatureFilter,
  removeFeatureFilter,
} from "../../redux/filters/filtersSlice";
import styles from "./FilterPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faWind,
  faCogs,
  faCoffee,
  faTv,
  faShower,
  faVanShuttle,
  faLayerGroup,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const availableFeatures = [
    { label: "AC", icon: faWind },
    { label: "Automatic", icon: faCogs },
    { label: "Kitchen", icon: faCoffee },
    { label: "TV", icon: faTv },
    { label: "Bathroom", icon: faShower },
  ];
  const [tempSelectedFeatures, setTempSelectedFeatures] = useState([]);
  const [tempVehicleType, setTempVehicleType] = useState("");

  const location = useSelector((state) => state.filters.location);

  const handleLocationChange = (e) => {
    dispatch(setLocationFilter(e.target.value));
  };

  const handleFeatureToggle = (feature) => {
    if (tempSelectedFeatures.includes(feature)) {
      setTempSelectedFeatures((prev) =>
        prev.filter((selectedFeature) => selectedFeature !== feature),
      );
    } else {
      setTempSelectedFeatures((prev) => [...prev, feature]);
    }
  };

  const handleVehicleTypeChange = (type) => {
    setTempVehicleType(type);
  };

  const handleSearchClick = () => {
    // Dispatch temporary filters to the global state
    dispatch(setVehicleTypeFilter(tempVehicleType));
    tempSelectedFeatures.forEach((feature) =>
      dispatch(addFeatureFilter(feature)),
    );
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.subtitle}>Location</div>
      <div className={styles.locationInputContainer}>
        <FontAwesomeIcon icon={faMap} className={styles.locationIcon} />
        <input
          className={styles.locationInput}
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={styles.title}>Filters</div>

      <div className={styles.subtitleVehicle}>Vehicle equipment</div>
      <div className={styles.featureGrid}>
        {availableFeatures.map((feature) => (
          <button
            key={feature.label}
            className={`${styles.featureButton} ${
              tempSelectedFeatures.includes(feature.label)
                ? styles.selected
                : ""
            }`}
            onClick={() => handleFeatureToggle(feature.label)}
          >
            <FontAwesomeIcon icon={feature.icon} className={styles.typeIcon} />
            <span>{feature.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.subtitleVehicle}>Vehicle type</div>
      <div className={styles.typeGrid}>
        {[
          { label: "Van", icon: faVanShuttle },
          { label: "Fully Integrated", icon: faLayerGroup },
          { label: "Alcove", icon: faCubes },
        ].map((type) => (
          <button
            key={type.label}
            className={`${styles.typeButton} ${
              tempVehicleType === type.label ? styles.selected : ""
            }`}
            onClick={() => handleVehicleTypeChange(type.label)}
          >
            <FontAwesomeIcon icon={type.icon} className={styles.typeIcon} />
            <span>{type.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.searchButtonContainer}>
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default FilterPanel;
