import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/campersOperations.js';
import { selectCamperById, selectCampersLoading } from '../../redux/campers/campersSelectors.js';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import ReviewList from '../../components/ReviewList/ReviewList';
import BookingForm from '../../components/BookingForm/BookingForm';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const camper = useSelector((state) => selectCamperById(state, id));
    const loading = useSelector(selectCampersLoading);

    useEffect(() => {
        dispatch(fetchCamperById(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.detailsPage}>
            <CamperDetails camper={camper} />
            <div className={styles.layout}>
                <ReviewList reviews={camper?.reviews || []} />
                <BookingForm camperId={id} />
            </div>
        </div>
    );
};

export default CamperDetailsPage;
