import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppBarr.module.css"; // Import as CSS Module

const AppBarr = () => {
  return (
    <header className={styles.appbar}>
      <div className={styles.logo}>
        <span className={styles.logoTravel}>Travel</span>
        <span className={styles.logoTrucks}>Trucks</span>
      </div>
      <nav className={styles.navLinks}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBarr;
