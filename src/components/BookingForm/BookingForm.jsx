import React from 'react';
import styles from './BookingForm.module.css';

const BookingForm = ({ camperId }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className={styles.bookingForm}>
            <h3>Book your camper van now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <label>Name*</label>
            <input type="text" name="name" required />
            <label>Email*</label>
            <input type="email" name="email" required />
            <label>Booking date*</label>
            <input type="date" name="date" required />
            <label>Comment</label>
            <textarea name="comment" rows="3"></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default BookingForm;
