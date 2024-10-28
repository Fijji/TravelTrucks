import React, { useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/campersOperations.js";
import {
  selectCamperById,
  selectCampersLoading,
} from "../../redux/campers/campersSelectors.js";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import BookingForm from "../../components/BookingForm/BookingForm";
import DotLoader from "react-spinners/ClipLoader";
import styles from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => selectCamperById(state, id));
  const isLoading = useSelector(selectCampersLoading);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="loaderContainer">
        <DotLoader className="loader" />
      </div>
    );
  }

  return (
    <div className={styles.detailsPage}>
      <CamperDetails camper={camper} />

      <div className={styles.tabs}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive || location.pathname === `/catalog/${id}`
              ? styles.activeTab
              : ""
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? styles.activeTab : "")}
        >
          Reviews
        </NavLink>
      </div>

      <div className={styles.layout}>
        <div className={styles.features}>
          <Outlet context={{ camper }} />
        </div>

        <div className={styles.bookingForm}>
          <BookingForm camperId={id} />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;
