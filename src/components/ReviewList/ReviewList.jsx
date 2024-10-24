import React from 'react';
import { useOutletContext } from "react-router-dom";
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewList = () => {
    const { camper } = useOutletContext(); // Gets camper from context

    // Check if reviews are present and render them
    const reviews = camper?.reviews;

    if (!reviews || reviews.length === 0) {
        return <p>No reviews available.</p>;
    }

    return (
        <div>
            {reviews.map((review, index) => (
                <ReviewItem key={index} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
