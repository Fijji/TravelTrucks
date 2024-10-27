import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setLocationFilter,
  setVehicleTypeFilter,
  addFeatureFilter,
  clearFeaturesFilter,
} from "../../redux/filters/filtersSlice";
import styles from "./FilterPanel.module.css";
import IconMap from "../Icons/IconMap";
import IconWind from "../Icons/IconWind";
import IconDiagram from "../Icons/IconDiagram";
import IconCupHot from "../Icons/IconCupHot";
import IconTV from "../Icons/IconTV";
import IconShower from "../Icons/IconShower";
import IconVan from "../Icons/IconVan";
import IconIntegrated from "../Icons/IconIntegrated";
import IconAlcove from "../Icons/IconAlcove";

const availableFeatures = [
  { label: "AC", icon: IconWind },
  { label: "Automatic", icon: IconDiagram },
  { label: "Kitchen", icon: IconCupHot },
  { label: "TV", icon: IconTV },
  { label: "Bathroom", icon: IconShower },
];

const FilterPanel = () => {
  const dispatch = useDispatch();
  const [tempSelectedFeatures, setTempSelectedFeatures] = useState([]);
  const [tempVehicleType, setTempVehicleType] = useState("");
  const [tempLocation, setTempLocation] = useState("");

  const handleLocationChange = (e) => {
    setTempLocation(e.target.value);
  };

  const handleFeatureToggle = (feature) => {
    setTempSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((selectedFeature) => selectedFeature !== feature)
        : [...prev, feature],
    );
  };

  const handleVehicleTypeChange = (type) => {
    setTempVehicleType((prev) => (prev === type ? "" : type));
  };

  const handleSearchClick = () => {
    dispatch(setLocationFilter(tempLocation));
    dispatch(setVehicleTypeFilter(tempVehicleType));
    dispatch(clearFeaturesFilter());
    tempSelectedFeatures.forEach((feature) =>
      dispatch(addFeatureFilter(feature)),
    );
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.subtitle}>Location</div>
      <div className={styles.locationInputContainer}>
        <IconMap className={styles.locationIcon} />
        <input
          className={styles.locationInput}
          type="text"
          placeholder="Enter location"
          value={tempLocation}
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
            <feature.icon className={styles.typeIcon} />
            <span>{feature.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.subtitleVehicle}>Vehicle type</div>
      <div className={styles.typeGrid}>
        {[
          { label: "Van", icon: IconVan },
          { label: "Fully Integrated", icon: IconIntegrated },
          { label: "Alcove", icon: IconAlcove },
        ].map((type) => (
          <button
            key={type.label}
            className={`${styles.typeButton} ${
              tempVehicleType === type.label ? styles.selected : ""
            }`}
            onClick={() => handleVehicleTypeChange(type.label)}
          >
            <type.icon className={styles.typeIcon} />
            <span>{type.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.searchButtonContainer}>
        <button className={styles.searchButton} onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
