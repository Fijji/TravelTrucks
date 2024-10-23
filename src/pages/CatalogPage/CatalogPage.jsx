import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOperations";
import CampersCatalog from "../../components/CampersCatalog/CampersCatalog";
import styles from "./CatalogPage.module.css";
import { selectFilteredCampers } from "../../redux/filters/filtersSelectors.js";
import { selectCampersError, selectCampersLoading } from "../../redux/campers/campersSelectors.js";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectFilteredCampers);
    const isLoading = useSelector(selectCampersLoading);
    const error = useSelector(selectCampersError);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.catalogPage}>
            <aside className={styles.filters}>
                <FilterPanel />
            </aside>
            <main className={styles.campersList}>
                <CampersCatalog campers={campers} />
            </main>
        </div>
    );
};

export default CatalogPage;
