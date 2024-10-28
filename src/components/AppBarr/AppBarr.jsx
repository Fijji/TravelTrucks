import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./AppBarr.module.css";

const AppBarr = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isCatalogActive = location.pathname === "/catalog";

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={styles.appbar}>
      <div
        className={styles.logo}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
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
          className={
            isCatalogActive
              ? `${styles.navLink} ${styles.activeLink}`
              : styles.navLink
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBarr;
