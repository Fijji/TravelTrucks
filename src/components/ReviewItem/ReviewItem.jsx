import React from "react";
import styles from "./ReviewItem.module.css";
import IconRatingGold from "../Icons/IconRatingGold";
import IconRatingEmpty from "../Icons/IconRatingEmpty";

const ReviewItem = ({ review }) => {
  if (!review) return null;

  const { reviewer_name, reviewer_rating, comment } = review;
  const maxRating = 5;

  const renderStars = () => {
    return Array.from({ length: maxRating }).map((_, index) =>
      index < reviewer_rating ? (
        <IconRatingGold key={index} className={styles.filledStar} />
      ) : (
        <IconRatingEmpty key={index} className={styles.emptyStar} />
      ),
    );
  };

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
