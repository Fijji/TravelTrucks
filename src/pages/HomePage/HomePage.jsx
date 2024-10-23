import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css"; // Import styles as CSS module

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles["home-banner"]}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={styles["btn-view-now"]}>
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
