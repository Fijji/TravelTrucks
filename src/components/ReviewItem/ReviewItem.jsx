import React from 'react';

const ReviewItem = ({ review }) => {
    if (!review) return null;

    const { reviewer_name, reviewer_rating, comment } = review;

    return (
        <div>
            <h4>{reviewer_name}</h4>
            <p>Rating: {reviewer_rating}/5</p>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewItem;
