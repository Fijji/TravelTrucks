import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewList = ({ reviews }) => {
    console.log(reviews);

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
