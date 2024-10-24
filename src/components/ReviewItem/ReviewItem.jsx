import React from 'react';
import styles from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
    if (!review) return null;

    const { reviewer_name, reviewer_rating, comment } = review;
    const maxRating = 5;

    // Create a function to render filled and empty stars
    const renderStars = () => {
        const filledStars = Math.round(reviewer_rating);
        const emptyStars = maxRating - filledStars;

        return (
            <>
                {'★'.repeat(filledStars)}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    // Extract the first letter of the reviewer's name for the avatar
    const avatarLetter = reviewer_name.charAt(0).toUpperCase();

    return (
        <div className={styles.reviewItem}>
            <div className={styles.reviewAvatar}>{avatarLetter}</div>
            <div className={styles.reviewContent}>
                <div className={styles.reviewHeader}>
                    <h4 className={styles.reviewerName}>{reviewer_name}</h4>
                    <div className={styles.reviewRating}>{renderStars()}</div>
                </div>
                <p className={styles.reviewText}>{comment}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
